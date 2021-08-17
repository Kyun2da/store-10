import { UploadSVG } from '@/assets/svgs';
import React, { RefObject } from 'react';
import * as S from './style';

export interface IFileInput {
  name: string;
  attributes?: Record<string, unknown>;
  multiple?: boolean;
  hidden?: boolean;
  fileImgs: string[];
  isError: boolean;
  fileRef: RefObject<HTMLInputElement>;
  handleClickOnFileInput: () => void;
  handleUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({
  name,
  fileRef,
  attributes,
  hidden,
  multiple,
  fileImgs,
  isError,
  handleClickOnFileInput,
  handleUploadFile,
}: IFileInput) => {
  return (
    <>
      <S.FileInputButton onClick={handleClickOnFileInput}>
        <UploadSVG width={100} height={100} />
        <span className="helper-text">
          클릭 또는 드래그&드랍으로 파일을 추가하세요!
        </span>
        <input
          ref={fileRef}
          type="file"
          hidden={hidden}
          multiple={multiple}
          name={name}
          onChange={handleUploadFile}
          {...attributes}
        />
      </S.FileInputButton>

      <S.PreviewWrapper>
        {fileImgs.map((file) => (
          <img key={file} src={file} alt="미리보기 이미지" />
        ))}
      </S.PreviewWrapper>

      {isError && (
        <S.ErrorMessage>3장 이상의 사진은 업로드 할 수 없어요!</S.ErrorMessage>
      )}
    </>
  );
};

export default FileInput;
