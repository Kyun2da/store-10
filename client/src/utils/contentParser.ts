interface ParserProps {
  details: string;
  essentials: string;
}

type tableType = {
  description: string;
  title: string;
};

const contentParser = ({ details, essentials }: ParserProps) => {
  const jsoned_details = JSON.parse(details);
  const jsoned_essentials = JSON.parse(essentials);

  const images: string[] = jsoned_details.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (detail: Record<string, Array<any>>) =>
      'https:' + detail.vendorItemContentDescriptions[0].content
  );

  const tables: tableType[] = jsoned_essentials.slice(0, 4);

  return [images, tables] as const;
};

export default contentParser;
