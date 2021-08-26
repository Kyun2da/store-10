import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      'text-color': string;
      'body': string;
      'footer': string;
      'label': string;
      'placeholder': string;
      'line': string;
      'background': string;
      'off-white': string;
      'primary': string;
      'primary2': string;
      'primary3': string;
      'new': string;
      'best': string;
      'error': string;
      'border-gray': string;
    };
    fontSize: {
      xs: FlattenSimpleInterpolation;
      s: FlattenSimpleInterpolation;
      m: FlattenSimpleInterpolation;
      l: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      xxl: FlattenSimpleInterpolation;
    };
    fontWeight: {
      s: FlattenSimpleInterpolation;
      m: FlattenSimpleInterpolation;
      l: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      xxl: FlattenSimpleInterpolation;
    };
    media: {
      pc: number;
      tablet: number;
      phone: number;
      headerSearch: number;
    };
    boxShadow: string;
  }
}
