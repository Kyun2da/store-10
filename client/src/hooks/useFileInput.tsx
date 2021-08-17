import { useCallback, useRef, useState } from 'react';

const useFileInput = () => {
  // TODO: Drag & Drop 구현할지...?

  const [fileImgs, setFileImgs] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClickOnFileInput = useCallback(() => {
    fileInput.current?.click();
  }, [fileInput]);

  const handleUploadFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { files },
      } = e;

      for (let i = 0; i < (files?.length ?? 0); i++) {
        const file = files?.[i];
        const preview = URL.createObjectURL(file);

        if (fileImgs.length === 3) {
          setIsError(true);
          return;
        }

        setFileImgs([...fileImgs, preview]);
      }
    },
    [fileImgs]
  );

  return {
    fileRef: fileInput,
    fileImgs,
    isError,
    handleClickOnFileInput,
    handleUploadFile,
  } as const;
};

export default useFileInput;
