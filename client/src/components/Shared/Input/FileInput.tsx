import { UploadSVG, CloseSVG } from '@/assets/svgs';
import { CustomFile } from '@/hooks/useFileInput';
import React, { RefObject } from 'react';
import * as S from './style';

export interface IFileInput {
  name: string;
  attributes?: Record<string, unknown>;
  multiple?: boolean;
  hidden?: boolean;
  imgFiles: CustomFile;
  isError: boolean;
  fileRef: RefObject<HTMLInputElement>;
  handleClickOnFileInput: () => void;
  handleUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeSeletedPreview: (e: React.MouseEvent, selected: string) => void;
}

const FileInput = ({
  name,
  fileRef,
  attributes,
  hidden,
  imgFiles,
  isError,
  handleClickOnFileInput,
  handleUploadFile,
  removeSeletedPreview,
}: IFileInput) => {
  const initInputValue = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    target.value = '';
  };

  return (
    <>
      <S.FileInputButton onClick={handleClickOnFileInput}>
        <UploadSVG width={100} height={100} />
        <span className="helper-text">클릭하여 파일을 추가하세요!</span>
        <input
          ref={fileRef}
          type="file"
          hidden={hidden}
          name={name}
          onClick={(e) => initInputValue(e)}
          onChange={handleUploadFile}
          {...attributes}
        />
      </S.FileInputButton>

      <S.PreviewWrapper>
        {Object.entries(imgFiles).map((files) => {
          const [hash, file] = files;
          return (
            <S.ImageWrapper key={hash}>
              <img src={URL.createObjectURL(file)} alt="미리보기 이미지" />
              <S.CloseButton onClick={(e) => removeSeletedPreview(e, hash)}>
                <CloseSVG />
              </S.CloseButton>
            </S.ImageWrapper>
          );
        })}
      </S.PreviewWrapper>

      {isError && (
        <S.ErrorMessage>3장 이상의 사진은 업로드 할 수 없어요!</S.ErrorMessage>
      )}
    </>
  );
};

export default FileInput;
