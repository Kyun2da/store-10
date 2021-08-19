import React, { useState } from 'react';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import * as S from './styles';
import { Link, useHistory } from '@/lib/Router';
import { githubLogin } from '@/lib/api/login/githubLogin';
import { normalLogin } from '@/lib/api/login/normalLogin';
import {
  validateEmail,
  validateInput,
} from '@/utils/constant/validate/validation';

const Login = () => {
  const GithubLogin = async () => {
    const oAuthURL = await githubLogin();
    window.location.href = oAuthURL;
  };

  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const { historyPush } = useHistory();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const emailValidation = validateEmail(email);
    const passwordValidation = validateInput(password);
    setError({ email: !emailValidation, password: !passwordValidation });
    if (emailValidation && passwordValidation) {
      try {
        await normalLogin({ user_id: email, password });
        historyPush('/');
      } catch (err) {
        window.alert(err.response.data.message);
      }
    }
  };

  // TODO : 만약 로그인이 되어있는 유저면 마이페이지로 이동시키기?
  // if (data) return;

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <S.LoginTitle level={4}>회원 로그인</S.LoginTitle>
      <Input
        type="text"
        label="Standard"
        name="email"
        placeholder="아이디"
        error={error.email}
        helperText="올바른 이메일 주소 형식이 아닙니다. ex) baemin@gmail.com"
      />
      <Input
        type="password"
        label="Standard"
        name="password"
        placeholder="비밀번호"
        error={error.password}
        helperText="비밀번호를 입력하세요."
      />
      <Button type="submit" color="primary">
        로그인
      </Button>
      <Button type="button" color="black" onClick={GithubLogin}>
        <S.GithubIcon fill="white" />
        GitHub 로그인
      </Button>
      <S.LinkContainer>
        <Link to="/select_auth">회원가입</Link>
        <Link to="/findid">아이디 찾기</Link>
        <Link to="/findpw">비밀번호 찾기</Link>
      </S.LinkContainer>
    </S.LoginForm>
  );
};

export default Login;
