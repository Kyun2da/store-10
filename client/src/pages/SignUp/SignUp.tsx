import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import useInput from '@/hooks/useInput';
import {
  validateAll,
  validateEmail,
  validateName,
  validatePassword,
  validateRePassword,
} from '@/utils/constant/validate/validation';
import React, { useCallback, useState } from 'react';
import { postEmailCheck } from '@/lib/api/user/postEmailCheck';
import * as S from './styles';
import { CheckSVG } from '@/assets/svgs';
import { createUser } from '@/lib/api/user/createUser';
import { Redirect, useHistory } from '@/lib/Router';

const SignUp = () => {
  const [error, setError] = useState({
    email: false,
    password: false,
    rePassword: false,
    name: false,
    initialError: true,
  });

  const [emailCheck, setEmailCheck] = useState(false);
  const [email, , onChangeEmail] = useInput('');

  const onClickEmailCheck = useCallback(async () => {
    if (!validateEmail(email)) {
      return window.alert('올바른 이메일을 입력하세요.');
    }
    try {
      await postEmailCheck(email);
      setEmailCheck(true);
      window.alert('사용할 수 있는 아이디입니다!');
    } catch (err) {
      const { status } = err.response.data;
      if (status === 409) window.alert('이미 존재하는 아이디 입니다.');
      else window.alert('서버 에러입니다. 관리자에게 문의하세요.');
    }
  }, [email, setEmailCheck]);

  const errorCheck = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      validateFunction: (param: string) => boolean
    ) => {
      const { name, value } = e.target;
      if (validateFunction(value)) {
        setError({ ...error, [name]: false });
      } else {
        setError({ ...error, [name]: true });
      }
    },
    [error]
  );

  const [password, , onChangePassword] = useInput('');

  const rePasswordCheck = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (validateRePassword(target.value, password)) {
        setError({ ...error, rePassword: false });
      } else {
        setError({ ...error, rePassword: true });
      }
    },
    [password, error]
  );

  const { historyPush } = useHistory();
  const formSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
        rePassword: { value: string };
        name: { value: string };
      };
      const email = target.email.value;
      const password = target.password.value;
      const rePassword = target.rePassword.value;
      const name = target.name.value;
      if (!validateAll(email, password, rePassword, name)) {
        window.alert('회원가입 폼이 제대로 채워지지 않았습니다.');
      } else if (!emailCheck) {
        window.alert('이메일 중복확인이 필요합니다.');
      } else {
        try {
          await createUser({ user_id: email, password, rePassword, name });
          historyPush('/');
        } catch (err) {
          window.alert('알수 없는 에러입니다.');
        }
      }
    },
    [emailCheck, historyPush]
  );

  const userName = window.localStorage.getItem('userName');

  if (userName) return <Redirect to="/" />;

  return (
    <S.SignUpContainer>
      <Title level={2}>회원가입</Title>
      <S.FormContainer onSubmit={formSubmit}>
        <S.EmailContainer>
          <Input
            type="text"
            name="email"
            label="Outlined"
            labelName="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
              setEmailCheck(false);
            }}
            onBlur={(e) => {
              errorCheck(e, validateEmail);
            }}
            error={error.email}
            helperText="올바른 이메일 주소 형식이 아닙니다. ex) baemin@gmail.com"
          />
          <Button
            type="button"
            color="white"
            onClick={onClickEmailCheck}
            disabled={emailCheck}
          >
            {emailCheck ? <CheckSVG width={23} height={23} /> : '중복 확인'}
          </Button>
        </S.EmailContainer>
        <Input
          type="password"
          name="password"
          label="Outlined"
          labelName="비밀번호"
          value={password}
          onChange={onChangePassword}
          onBlur={(e) => errorCheck(e, validatePassword)}
          error={error.password}
          placeholder="비밀번호를 입력해주세요."
          helperText="10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야합니다."
        />
        <Input
          type="password"
          name="rePassword"
          label="Outlined"
          onBlur={rePasswordCheck}
          error={error.rePassword}
          labelName="비밀번호 재입력"
          helperText="비밀번호가 일치하지 않거나 비밀번호를 입력해야 합니다."
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <Input
          type="text"
          name="name"
          label="Outlined"
          onBlur={(e) => errorCheck(e, validateName)}
          error={error.name}
          labelName="이름"
          helperText="이름을 입력해주세요."
          placeholder="이름을 입력해주세요."
        />
        <Button type="submit" color="primary">
          회원가입
        </Button>
      </S.FormContainer>
    </S.SignUpContainer>
  );
};

export default SignUp;
