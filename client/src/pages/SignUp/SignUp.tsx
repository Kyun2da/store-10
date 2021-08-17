import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import { validateEmail } from '@/utils/constant/validate/validation';
import React, { useCallback, useState } from 'react';
import * as S from './styles';

const SignUp = () => {
  const [emailError, setEmailError] = useState(false);

  const onChangeEmailInput = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (validateEmail(target.value)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    },
    [setEmailError]
  );

  return (
    <S.SignUpContainer>
      <Title level={2}>회원가입</Title>
      <S.FormContainer>
        <S.EmailContainer>
          <Input
            type="text"
            name="name"
            label="Outlined"
            labelName="이메일"
            placeholder="이메일을 입력해주세요."
            onChange={onChangeEmailInput}
            error={emailError}
            helperText="올바른 이메일 주소 형식이 아닙니다."
          />
          <Button type="button" color="white">
            중복 확인
          </Button>
        </S.EmailContainer>
        <Input
          type="password"
          name="password"
          label="Outlined"
          labelName="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
        <Input
          type="password"
          name="check-password"
          label="Outlined"
          labelName="비밀번호 재입력"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <Input
          type="text"
          name="name"
          label="Outlined"
          labelName="이름"
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
