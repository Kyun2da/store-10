import React, { useCallback, useState } from 'react';
import { CloseSVG } from '@/assets/svgs';
import * as S from './styles';
import categoryList from '@/dummies/categorys';
import { logout } from '@/lib/api/auth/logout';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import { useHistory } from '@/lib/Router';
import { Links } from '../Header';
import { getCateogries } from '@/lib/api/category';
import { ICategory } from '@/types';


interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ ...props }: Props) => {
  const { isOpen, setIsOpen } = props;
  const [user, setUser] = useRecoilState(userState);
  const closeSidebar = () => setIsOpen(false);
  const { historyPush } = useHistory();

  const onClickLogout = async () => {
    await logout();
    setUser(null);
    historyPush('/');
  };
  const [categories, setCategories] = useState<ICategory[]>([]);

  useCallback(async () => {
    const data = await getCateogries();
    setCategories(data);
  }, []);

  return (
    <>
      <S.SideBar className={isOpen ? 'active' : ''}>
        <S.Top>
          <div>
            {user ? `${user.name}님 환영합니다!` : '로그인이 필요합니다.'}
          </div>
          <S.IconsWrapper>
            {user ? <button onClick={onClickLogout}>로그아웃</button> : null}
            <CloseSVG onClick={closeSidebar} />
          </S.IconsWrapper>
        </S.Top>
        <S.Contents>
          <S.ContentTitle>카테고리</S.ContentTitle>
          <S.Categories>
            {categories.map((main) => (
              <li key={'mainCategory_' + main.id} className="active">
                <div>{main.title}</div>
                <S.SubCategory>
                  {main.subCategory.map((sub) => (
                    <dd key={'subCategory_' + sub.id}>{sub.title}</dd>
                  ))}
                </S.SubCategory>
              </li>
            ))}
          </S.Categories>
        </S.Contents>
      </S.SideBar>
      <S.Backdrop className="backdorp" onClick={closeSidebar}></S.Backdrop>
    </>
  );
};

export default Sidebar;
