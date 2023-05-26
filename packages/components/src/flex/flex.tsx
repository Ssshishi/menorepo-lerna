import React from "react";
import { mergeProps } from "utils";
import { Flex } from "./styled";

interface Props {
  gutter?: number;
  children: React.ReactNode;
}

const Index: React.FC<Props> = (p) => {
  const props = mergeProps(
    {
      gutter: 0,
    },
    p
  );

  const childrenCount = React.Children.count(props.children);

  return (
    <Flex>
      {React.Children.map(
        props.children,
        (child: React.ReactNode, index: number) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            isFirstChild: index === 0,
            isLastChild: index === childrenCount - 1,
            gutter: props.gutter,
          })
      )}
    </Flex>
  );
};

export default Index;
