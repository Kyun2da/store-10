import React, { useRef, useState } from 'react';
import Rating from '@/components/Shared/Rating';
import Title from '@/components/Shared/Title';
import ModalLayout from './ModalLayout';
import * as S from './styles';
import { UploadSVG } from '@/assets/svgs';
import Button from '@/components/Shared/Button';

interface ReviewModalProps {
  toggleModal: () => void;
}

// TODO: Input 타입을 조금 더 만들어야 하겠군뇨 호호호

const ReviewModal = ({ toggleModal }: ReviewModalProps) => {
  const [fileImg, setFileImg] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileUploader = () => {
    fileInput.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    for (let i = 0; i < (files?.length ?? 0); i++) {
      const file = files?.[i];
      const preview = URL.createObjectURL(file);

      if (fileImg.length === 3) {
        setIsError(true);
        return;
      }

      setFileImg([...fileImg, preview]);
    }
  };

  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품후기 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <S.Form>
          <Title level={5}>별점 매기기</Title>
          <Rating rating={4} uniqueId="thisisuniqueid" />
        </S.Form>

        <S.Form>
          <Title level={5}>사진 업로드 (최대 3장)</Title>

          <div className="input-file-button" onClick={handleFileUploader}>
            <UploadSVG width={100} height={100} />
            <span className="helper-text">
              클릭 또는 드래그&드랍으로 파일을 추가하세요!
            </span>
            <input
              ref={fileInput}
              id="file-upload"
              type="file"
              onChange={handleFileUpload}
              multiple
              hidden
            />
          </div>
          {fileImg.length !== 0 && (
            <div className="preview-wrapper">
              {fileImg.map((file) => (
                <img key={file} src={file} alt="미리보기 이미지" />
              ))}
            </div>
          )}

          {isError && (
            <p className="error-text">3장 이상의 사진은 업로드 할 수 없어요!</p>
          )}
        </S.Form>

        <S.Form>
          <Title level={5}>리뷰 남기기</Title>
          <textarea placeholder="다른 구매자와 판매자에게 도움이 될 수 있도록 자세하고 솔직하게 리뷰 작성 부탁드려요!" />
        </S.Form>
      </S.ModalBody>
      <S.ModalButtonArea>
        <Button color="primary" type="submit" fullWidth>
          완료
        </Button>
      </S.ModalButtonArea>
    </ModalLayout>
  );
};

export default ReviewModal;
