import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';

export function uuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export const scrollUtil = () => {
  setTimeout(() => {
    const scrollDOM = document.querySelector(
      '.sendbird-conversation__messages-padding'
    );
    const timer = setTimeout(() => {
      if (scrollDOM) {
        scrollDOM.scrollTop = scrollDOM.scrollHeight;
      }
    }, 200);
    return () => clearTimeout(timer);
  });
};

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

export function capitalize(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1)
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

export function isNotLocalMessageCustomType(customType: string | undefined) {
  return (
    !customType ||
    Object.values(LOCAL_MESSAGE_CUSTOM_TYPE).indexOf(customType) === -1
  );
}

export function isValidJSON(str: any) {
  if (typeof str !== "string") {
    return false;
  }
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export function boldifyMessage(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function replaceTextExtractsMultiple(
  input: string,
  replacements: Array<[string, string]>
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
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
  return input.replace(urlRegex, function (url) {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
}

export function isSpecialMessage(
  message: string,
  specialMessageList: string[]
): boolean {
  return (
    specialMessageList.findIndex((substr: string) => {
      return message.includes(substr);
    }) > -1
  );
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

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export function getFormattedDate(inputTime: Date) {
  // const year = inputTime.getUTCFullYear();
  const month = inputTime.toLocaleString('en-us', { month: 'short' }); // 'Dec'
  const day = inputTime.getUTCDate(); // 21

  const formattedDate = `${month}, ${day}`;

  const hours = ('0' + inputTime.getUTCHours()).slice(-2);
  const minutes = ('0' + inputTime.getUTCMinutes()).slice(-2);
  const formattedTime = `${hours}:${minutes}`;

  return { formattedDate, formattedTime };
}

/**
 * Polyfill for localStorage
 * localStorage wont work in some browsers, in incognito
 * and no-cookie modes
 * @returns { getItem: (key), setItem: (key, value) }
 */
interface Storage {
  [key: string]: any;
}
export const LOCAL_STORAGE_KEY_PREFIX = 'chat-ai-widget';
export const localStorageHelper = () => {
  const store: Storage = {};
  return {
    getItem: (_key: string) => {
      const key = `${LOCAL_STORAGE_KEY_PREFIX}_${_key}`;
      try {
        return localStorage.getItem(key);
      } catch (error) {
        return store[key];
      }
    },
    setItem: (_key: string, value: string) => {
      const key = `${LOCAL_STORAGE_KEY_PREFIX}_${_key}`;
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        store[key] = value;
      }
    },
    removeItem: (_key: string) => {
      const key = `${LOCAL_STORAGE_KEY_PREFIX}_${_key}`;
      try {
        localStorage.removeItem(key);
      } catch (error) {
        //
      }
    },
  };
};
