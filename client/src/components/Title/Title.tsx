import React from 'react';
import * as s from './style';

interface ITitleProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const Title = ({ children, level, className }: ITitleProps) => {
  switch (level) {
    case 1:
      return <s.H1 className={className}>{children}</s.H1>;
    case 2:
      return <s.H2 className={className}>{children}</s.H2>;
    case 3:
      return <s.H3 className={className}>{children}</s.H3>;
    case 4:
      return <s.H4 className={className}>{children}</s.H4>;
    case 5:
      return <s.H5 className={className}>{children}</s.H5>;
    default:
      return <s.H1 className={className}>{children}</s.H1>;
  }
};

export default Title;
