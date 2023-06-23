import {LOCAL_MESSAGE_CUSTOM_TYPE} from "./const";

export function uuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export const scrollUtil = () => {
  setTimeout(() => {
    const scrollDOM = document.querySelector('.sendbird-conversation__messages-padding');
    //console.warn(scrollDOM);
    if (scrollDOM) {
      const {
        scrollHeight,
        clientHeight,
      } = scrollDOM;
      // const isScrolledToEnd = (scrollTop + 200) > (scrollHeight - clientHeight);
      const isScrolledToEnd = true;

      // console.warn({
      //   scrollTop,
      //   scrollHeight,
      //   clientHeight,
      //   [scrollHeight - clientHeight]: scrollHeight - clientHeight,
      //   isScrolledToEnd,
      // });
      if (isScrolledToEnd) {
        //console.warn('move to end', scrollDOM.scrollHeight + 200)
        scrollDOM.scrollTop = (scrollHeight - clientHeight) + 200
      }
    }
  }); // We may need ~500ms delay here.
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
}
type CodeSnippetToken = {
  type: TokenType.codeSnippet;
  value: string;
  language: Languages;
}

export type Token = StringToken | CodeSnippetToken;
const parseCode = (code: string): CodeSnippetToken => {
  const snippetRegex = /```([a-zA-Z]+)([\s\S]*)```/;
  const match = code.match(snippetRegex);
  if (match) {
    return {
      type: TokenType.codeSnippet,
      value: match[2],
      language: match[1] as Languages,
    }
  } else {
    return {
      type: TokenType.codeSnippet,
      value: code.substring(3, code.length - 3).trim(),
      language: Languages.unknown,
    }
  }
}

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
        i += (delimiter.length - 1); // -1 is because of i++;
      } else {
        currentWord += char;
      }
    }
  }
  result.push(currentWord);
  return result;
}

function isDelimiterIndex(index: number, inputString: string, delimiter: string) {


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
  return !customType || Object.values(LOCAL_MESSAGE_CUSTOM_TYPE).indexOf(customType) === -1;
}

export function replaceTextExtracts(input: string, searchText: string, replaceText: string): string {
  const regex = new RegExp(searchText, "gi");
  return input.replace(regex, replaceText);
}

export function replaceUrl(input: string): string {
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
  return input.replace(urlRegex, function(url) {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
}

export function isSpecialMessage(message: string, specialMessageList: string[]): boolean {
  return specialMessageList.findIndex((substr: string) => {
    return message.includes(substr);
  }) > -1;
}
