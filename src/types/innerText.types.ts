export type ParagraphItem = {
  text: string;
  highlight?: string;
};

export type InnerTextProps = {
  title: string;
  paragraph: string | ParagraphItem[];
  className: string;
  buttonText?: string;
};
