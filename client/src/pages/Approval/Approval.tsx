import Button from '@/components/Shared/Button';
import Checkbox from '@/components/Shared/Checkbox';
import Title from '@/components/Shared/Title';
import { useHistory, useParams } from '@/lib/Router';
import {
  PERSONAL_INFO_TEXT,
  TERMS_OF_SERVICE,
} from '@/utils/constant/approval';
import { SITE_TITLE } from '@/utils/constant/common';
import React, { useCallback } from 'react';
import * as S from './styles';

const Approval = () => {
  const { historyPush } = useHistory();
  const { params } = useParams();

  const onClickNextPage = useCallback(() => {
    const { authtype } = params;
    console.log(authtype);
    if (authtype === 'github') {
      // TODO : 깃허브 로그인 로직 넣기
    } else {
      historyPush('/signup');
    }
  }, [params, historyPush]);

  return (
    <S.ApprovalContainer>
      <Title level={2}>약관 동의</Title>
      <S.LabelContainer>
        <Checkbox />
        <Title level={5}>
          {SITE_TITLE}의 모든 약관을 확인하고 전체 동의합니다.
        </Title>
      </S.LabelContainer>
      <S.LabelContainer>
        <Checkbox />
        <Title level={5}>(필수) 이용약관</Title>
      </S.LabelContainer>
      <S.ApprovalBox>{TERMS_OF_SERVICE}</S.ApprovalBox>
      <S.LabelContainer>
        <Checkbox />
        <Title level={5}>(필수) 개인정보 수집 및 이용</Title>
      </S.LabelContainer>
      <S.ApprovalBox>{PERSONAL_INFO_TEXT}</S.ApprovalBox>
      <S.ButtonContainer>
        <Button
          type="button"
          color="white"
          onClick={() => historyPush('/select_auth')}
        >
          이전단계
        </Button>
        <Button type="button" color="primary" onClick={onClickNextPage}>
          다음단계
        </Button>
      </S.ButtonContainer>
    </S.ApprovalContainer>
  );
};

export default Approval;
