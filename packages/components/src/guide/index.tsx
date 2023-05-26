import React from "react";
import {
  Component,
  Guide,
  Title,
  TitleText,
  Tips,
  Body,
  TipsText,
} from "./styled";

interface Props {
  title: string;
  tips?: string;
  onTips?: () => void;
  children?: React.ReactNode;
}

const Index: React.FC<Props> = (props) => (
  <Component>
    <Guide>
      {props.title && (
        <Title>
          <TitleText>{props.title}</TitleText>
        </Title>
      )}
      <Body>{props.children}</Body>
      {props.tips && (
        <Tips onClick={() => props.onTips?.()}>
          <TipsText>{props.tips}</TipsText>
        </Tips>
      )}
    </Guide>
  </Component>
);

export default Index;
