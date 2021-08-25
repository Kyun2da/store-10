import React from 'react';
import { toast } from 'react-toastify';
import * as S from './styles';

type Type = 'info' | 'success' | 'warning' | 'error' | 'default' | 'dark';

const notify = (type: Type, message: string) => {
  switch (type) {
    case 'info':
      toast.info(message);
      break;
    case 'success':
      toast(
        <S.ImageContainer>
          <div>🎉 {message}</div>
        </S.ImageContainer>
      );
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast(
        <S.ImageContainer>
          <div>❗️ {message}</div>
        </S.ImageContainer>
      );
      break;
    case 'default':
      toast(message);
      break;
    case 'dark':
      toast.dark(message);
      break;
    default:
      toast(message);
      break;
  }
};

export default notify;
