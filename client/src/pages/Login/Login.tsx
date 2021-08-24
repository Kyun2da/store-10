import React, { useState } from 'react';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import * as S from './styles';
import { Link, Redirect, useHistory } from '@/lib/Router';
import { githubLogin } from '@/lib/api/auth/githubLogin';
import { normalLogin } from '@/lib/api/auth/normalLogin';
import { validateEmail, validateInput } from '@/utils/validatior';
import { notify } from '@/components/Shared/Toastify';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { getCurrentUser } from '@/lib/api/user/getCurrentUser';

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

  const [user, setUser] = useRecoilState(userState);
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
        const user = await getCurrentUser();
        setUser(user);
        historyPush('/');
      } catch (err) {
        notify('error', err.response.data.message);
      }
    }
  };

  if (user) return <Redirect to="/" />;

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
