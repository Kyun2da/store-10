import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import { Link, useHistory } from '@/core/Router';
import { SITE_TITLE } from '@/utils/constant/common';
import React from 'react';
import { GithubIcon } from '../Login/styles';
import * as S from './styles';

const SelectAuth = () => {
  const { historyPush } = useHistory();

  const goApproval = (path: string) => {
    historyPush(path);
  };
  return (
    <S.SelectAuthContainer>
      <Title level={3}>회원가입</Title>
      <Title level={4}>{SITE_TITLE}에 오신것을 환영합니다.</Title>
      <Title level={5}>
        회원가입하신 후 쿠폰 및 다양한 혜택을 이용해보세요.
      </Title>
      <Button
        type="button"
        color="primary"
        onClick={() => goApproval('/approval/normal')}
      >
        일반 회원가입
      </Button>
      <Button
        type="button"
        color="black"
        onClick={() => goApproval('/approval/github')}
      >
        <GithubIcon fill="white" />
        깃허브 회원가입
      </Button>
      <S.BackLoginContainer>
        이미 {SITE_TITLE} 회원이신가요? <Link to="/login">로그인</Link>
      </S.BackLoginContainer>
    </S.SelectAuthContainer>
  );
};

export default SelectAuth;
