import ReactDOM from 'react-dom';
import { useEffect } from 'react';

interface PortalProps {
  children: React.ReactElement | React.ReactElement[];
}

const Portal = ({ children }: PortalProps) => {
  // 모달 오픈 시 브라우저 스크롤 제거 및 복구
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: '', top: ''`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
