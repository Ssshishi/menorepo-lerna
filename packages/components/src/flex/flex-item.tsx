import React from "react";
import { mergeProps } from "utils";
import { Item } from "./styled";

interface Props {
  flex?: number;
  gutter?: number;
  isFirstChild?: boolean;
  isLastChild?: boolean;
  children?: React.ReactNode;
}

const Index: React.FC<Props> = (p) => {
  const props = mergeProps(
    {
      flex: 1,
    },
    p
  );

  return <Item {...props}>{props.children}</Item>;
};

export default Index;
