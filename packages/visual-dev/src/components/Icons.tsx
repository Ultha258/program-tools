import React from "react";
import styled from "styled-components";

interface IconProps {
  icon: string;
  color?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
}

const StyledIcon = styled.i<{
  color?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
}>`
    color: ${(props) => (props.color ? props.color : "#7c7c7c")} ;
    ${(props) => props.padding && `padding: ${props.padding};`}
    ${(props) => props.margin && `margin: ${props.margin};`}
    ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`;

export const Icon = (props: IconProps) => {
  return (
    <StyledIcon
      fontSize={props.fontSize}
      padding={props.padding}
      margin={props.margin}
      color={props.color}
      className={props.icon}
    />
  );
};
