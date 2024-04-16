import { type SendbirdGroupChat }  from '@sendbird/chat/lib/__definition';

export function uuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function formatCreatedAtToAMPM(createdAt: number) {
  const date: Date = new Date(createdAt);
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutes = date.getMinutes();
  const minutesStr: string = (minutes < 10 ? '0' : '') + minutes;
  const strTime = hours + ':' + minutesStr + ' ' + ampm;
  return strTime;
}

// Fixme: Add more languages
export enum Languages {
  typescript = 'typescript',
  javascript = 'javascript',
  java = 'java',
  python = 'python',
  unknown = 'unknown',
}

export enum TokenType {
  string = 'String',
  codeSnippet = 'codeSnippet',
}

type StringToken = {
  type: TokenType.string;
  value: string;
};
type CodeSnippetToken = {
  type: TokenType.codeSnippet;
  value: string;
  language: Languages;
};

export type Token = StringToken | CodeSnippetToken;
const parseCode = (code: string): CodeSnippetToken => {
  const snippetRegex = /```([a-zA-Z]+)([\s\S]*)```/;
  const match = code.match(snippetRegex);
  if (match) {
    return {
      type: TokenType.codeSnippet,
      value: match[2],
      language: match[1] as Languages,
    };
  } else {
    return {
      type: TokenType.codeSnippet,
      value: code.substring(3, code.length - 3).trim(),
      language: Languages.unknown,
    };
  }
};

export function splitText(inputString: string) {
  const delimiter = '```';
  const result = [];
  let currentWord = '';
  let inDelimiter = false;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (inDelimiter) {
      if (isDelimiterIndex(i, inputString, delimiter)) {
        currentWord += delimiter;
        result.push(currentWord);
        currentWord = '';
        inDelimiter = false;
        i += delimiter.length - 1;
      } else {
        currentWord += char;
      }
    } else {
      if (isDelimiterIndex(i, inputString, delimiter)) {
        // console.log('## isDelimiterIndex: ', isDelimiterIndex(i, inputString, delimiter));
        result.push(currentWord);
        currentWord = delimiter;
        inDelimiter = true;
        i += delimiter.length - 1; // -1 is because of i++;
      } else {
        currentWord += char;
      }
    }
  }
  result.push(currentWord);
  return result;
}

function isDelimiterIndex(
  index: number,
  inputString: string,
  delimiter: string
) {
  return inputString.substring(index, index + delimiter.length) === delimiter;
}

export function MessageTextParser(inputString: string): Token[] {
  // const snippetRegex = /```(.*)```/g;
  // const snippetRegex = /(```([\w]*)\n([\S\s]+?)\n```)/g;
  // debugger
  // const parts = inputString.split(snippetRegex);
  const parts = splitText(inputString);
  const result = parts.map((part) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      // Code snippet part
      return parseCode(part);
    } else {
      // String part
      return {
        type: 'String',
        value: part.trim(),
      } as StringToken;
    }
  });
  return result;
}

export function replaceTextExtractsMultiple(
  input: string,
  replacements: [string, string][]
): string {
  let result = input;
  for (let i = 0; i < replacements.length; i++) {
    const [searchText, replaceText] = replacements[i];
    result = replaceTextExtracts(result, searchText, replaceText);
  }
  return result;
}

export function replaceTextExtracts(
  input: string,
  searchText: string,
  replaceText: string
): string {
  const regex = new RegExp(searchText, 'gi');
  return input.replace(regex, replaceText);
}

export function replaceUrl(input: string): string {
  const urlRegex =
    /(?:https?:\/\/|www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.(xn--)?[a-z]{2,20}\b([-a-zA-Z0-9@:%_+[\],.~#?&/=]*[-a-zA-Z0-9@:%_+~#?&/=])*/g;
  return input.replace(urlRegex, function (url) {
    return `<a class="sendbird-word__url" href="${url}" target="_blank">${url}</a>`;
  });
}

export function assert(condition: any, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function delay(delayTime: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export const isIOSMobile = /iPad|iPhone|iPod/.test(navigator.userAgent);
export const isAndroidMobile = /Android/.test(navigator.userAgent);
export const isMobile = isIOSMobile || isAndroidMobile;

export function hideChatBottomBanner(sdk: SendbirdGroupChat): boolean {
  const REMOVE_POWERED_BY = 'remove_powered_by';
  const applicationAttributes = sdk?.appInfo?.applicationAttributes;

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(REMOVE_POWERED_BY);
  }

  return false;
}

export const replaceWithRegex = <T>(
  text: string,
  regex: RegExp,
  replacer: (params: { match: string; groups: string[]; index: number }) => T
) => {
  const matches = [...text.matchAll(regex)];
  const founds = matches.map((value) => {
    const text = value[0];
    const start = value.index ?? 0;
    const end = start + text.length;
    return { text, start, end, groups: value, matchIndex: value.index };
  });

  const items: Array<T | string> = [text];
  let cursor = 0;
  founds.forEach(({ text, start, end, groups }, index) => {
    const restText = items.pop() as string;
    const head = restText.slice(0, start - cursor);
    const mid = replacer({ match: text, groups, index });
    const tail = restText.slice(end - cursor);
    items.push(head, mid, tail);
    cursor = end;
  });
  return items;
};

export const isEmpty = (value: any) => {
  if (value == null) return true;
  if (typeof value === 'boolean' || typeof value === 'number') return !value;
  if ('length' in value) return value.length === 0;
  if (value instanceof Object) return Object.keys(value).length === 0;

  return false;
};
