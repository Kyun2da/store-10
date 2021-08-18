import React from 'react';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import * as S from './styles';
import { Link, useHistory } from '@/lib/Router';
import { getCurrentUser } from '@/lib/api/user/getCurrentUser';
import axios from 'axios';

import { useQuery } from 'react-query';

const Login = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    'user',
    getCurrentUser
  );

  const { historyPush } = useHistory();
  const GithubLogin = async () => {
    //const data = await axios.get('api/product');
    //console.log(data);
    const data = await axios.get('api/auth');
    window.location.href = data.data;
  };

  // if (data) return;

  return (
    <S.LoginForm>
      <S.LoginTitle level={4}>회원 로그인</S.LoginTitle>
      <Input type="text" label="Standard" name="email" placeholder="아이디" />
      <Input
        type="password"
        label="Standard"
        name="password"
        placeholder="비밀번호"
      />
      <Button type="button" color="primary">
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
