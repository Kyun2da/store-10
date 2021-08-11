import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    color: {
      'text-color': string;
      'body': string;
      'label': string;
      'placeholder': string;
      'line': string;
      'background': string;
      'off-white': string;
      'primary': string;
      'primary2': string;
      'primary3': string;
      'error': string;
    };
    fontSize: {
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
  }
}
