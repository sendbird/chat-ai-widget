import 'styled-components';
import { type CommonTheme } from './theme';
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CommonTheme {}
}
