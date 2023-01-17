import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      accent: string;
      white: string;
      gradientPrimary: string;
      textBackground: string;
      textColor: string;
      highlights: string;
      backgroundColor: string;
    };
  }
}
