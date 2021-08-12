import styled from 'styled-components';
import { media } from './../../styles/globalStyle';

export const Page404 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  z-index: 9999999;
`;

export const AlertTag = styled.div`
  position: absolute;
  border: 2px solid #111;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 2rem;
  font-size: 3rem;
  font-family: 'BMDOHYEON';
  text-align: center;
  transform: rotate(45deg) translate(15%, -80%);
  top: 0;
  right: 0;
  width: 35%;
  height: 50%;
  z-index: -1;
  background-color: #eee;

  &:hover {
    transform: rotate(48deg) translate(15%, -80%);
  }
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
  text-align: center;
  padding-right: 2rem;
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 5rem;

  .title {
    font-size: 4rem;
    font-family: 'BMDOHYEON';
  }

  .sub-title {
    font-size: 2.5rem;
    font-family: 'BMDOHYEON';
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

export const RedirectBtn = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid #aeaeae;
  border-radius: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    border-color: #2ac1bc;
    color: #fff;
    background-color: #2ac1bc;
  }
`;

export const AlertArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3rem;
  border: 3px solid #111;
  border-radius: 5rem;
  background-color: #fff;
  box-shadow: 2rem 2rem 4rem #e2e1e1, -2rem -2rem 4rem #fefdfd;

  img {
    max-width: 30rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;

    img {
      max-width: unset;
      width: 100%;
    }

    ${AlertContent} {
      padding: 1rem 1rem 2rem 1rem;
    }

    ${AlertTag} {
      padding: 2rem;
      width: 20rem;
      height: 15rem;
      transform: translate(-50%, -40%);
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 30rem;
    }
    .title {
      font-size: 2.5rem;
    }
    .sub-title {
      font-size: 1.8rem;
    }
    ${AlertTag} {
      font-size: 2rem;
      width: 15rem;
      height: 10rem;
      padding: 1.5rem;
      transform: translate(-50%, -50%);
    }
  }
`;
