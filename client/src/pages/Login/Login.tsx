import React, { useCallback, useEffect, useState } from 'react';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import * as S from './styles';
import { Link, Redirect, useHistory } from '@/lib/Router';
import { githubLogin } from '@/lib/api/auth/githubLogin';
import { normalLogin } from '@/lib/api/auth/normalLogin';
import {
  validateEmail,
  validateInput,
  validatePassword,
} from '@/utils/validator';
import { notify } from '@/components/Shared/Toastify';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { getCurrentUser } from '@/lib/api/user/getCurrentUser';
import useInput from '@/hooks/useInput';

const Login = () => {
  const GithubLogin = async () => {
    const { githubUrl } = await githubLogin();
    window.location.href = githubUrl;
  };

  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const { historyPush } = useHistory();
  const [email, , onChangeEmail] = useInput('');
  const [password, , onChangePassword] = useInput('');
  const [disabled, setDisabled] = useState(true);

  const [user, setUser] = useRecoilState(userState);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    if (emailValidation && passwordValidation) {
      try {
        setDisabled(true);
        await normalLogin({ user_id: email, password });
        const user = await getCurrentUser();
        setDisabled(false);
        setUser(user);
        historyPush('/');
      } catch (err) {
        notify('error', err.message);
        setDisabled(false);
      }
    }
  };

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

  useEffect(() => {
    if (
      Object.values(error).every((item) => item === false) &&
      email !== '' &&
      password !== ''
    ) {
      console.log('발생');
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, setDisabled, error]);

  if (user) return <Redirect to="/" />;

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <S.LoginTitle level={4}>회원 로그인</S.LoginTitle>
      <Input
        type="text"
        label="Standard"
        name="email"
        placeholder="아이디"
        value={email}
        onChange={onChangeEmail}
        error={error.email}
        onBlur={(e) => errorCheck(e, validateEmail)}
        helperText="올바른 이메일 주소 형식이 아닙니다. ex) baemin@gmail.com"
        autoComplete="username"
      />
      <Input
        type="password"
        label="Standard"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
        error={error.password}
        onBlur={(e) => errorCheck(e, validateInput)}
        helperText="비밀번호를 입력하세요."
        autoComplete="current-password"
      />
      <Button type="submit" color="primary" disabled={disabled}>
        로그인
      </Button>
      <Button type="button" color="black" onClick={GithubLogin}>
        <S.GithubIcon fill="white" />
        GitHub 로그인
      </Button>
      <S.LinkContainer>
        아이디가 없으신가요?
        <Link to="/select_auth">회원가입 하러 가기</Link>
      </S.LinkContainer>
    </S.LoginForm>
  );
};

export default Login;
