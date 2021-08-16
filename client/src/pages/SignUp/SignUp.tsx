import Button from '@/components/Button';
import { Input } from '@/components/Input';
import Title from '@/components/Title';
import React from 'react';
import * as S from './styles';

const SignUp = () => {
  return (
    <S.SignUpContainer>
      <Title level={2}>회원가입</Title>
      <S.FormContainer>
        <S.EmailContainer>
          <Input
            type="text"
            name="name"
            label="Outlined"
            placeholder="이메일을 입력해주세요."
          />
          <Button type="button" color="white">
            중복 확인
          </Button>
        </S.EmailContainer>
        <Input
          type="password"
          name="password"
          label="Outlined"
          placeholder="비밀번호를 입력해주세요."
        />
        <Input
          type="password"
          name="check-password"
          label="Outlined"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <Input
          type="text"
          name="name"
          label="Outlined"
          placeholder="이름을 입력해주세요."
        />
        <Button type="button" color="primary">
          회원가입
        </Button>
      </S.FormContainer>
    </S.SignUpContainer>
  );
};

export default SignUp;
