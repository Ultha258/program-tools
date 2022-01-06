import root from "react-shadow/styled-components";
import styled, { CSSProp } from "styled-components";
import * as Styles from "./Styles";
import { IconKey, Icon } from "../Icon";
import React from "react";

type InputProps = OptionProps & Omit<React.ComponentProps<"input">, "value">;

export interface OptionProps {
  value?: any;
  onChange?: any;
  disabled?: boolean;
  type?: string;
  errors?: any;
  icon?: IconKey;
  buttons?: React.ReactElement;
  position?: "left" | "right";
  css?: CSSProp;
}

const ShadowDom = styled(root.div)`
  display: contents;
`;

const InputBox = styled.input<{
  isInvalid: boolean;
  position: string;
  css: CSSProp;
}>`
  ${Styles.InputBoxStyle}
  ${(props) => (props.isInvalid ? Styles.invalid : "")}
  ${(props) => (props.position == "left" ? "text-indent: 40px;" : "")}
  ${(props) => props.css}
`;

const ExtrasDiv = styled.div<{ position: string }>`
  ${Styles.ExtrasDiv}
  ${(props) => (props.position == "left" ? "left: 12px;" : "right: 12px;")}
`;

const Container = styled.div`
  ${Styles.Container}
`;

export const Input = React.forwardRef<React.ElementRef<"input">, InputProps>(
  (props, forwardedRef) => {
    const {
      icon,
      position = "right",
      type = "text",
      buttons = false,
      errors: rawErrors,
      css = {},
      ...rest
    } = props;

    return (
      <ShadowDom>
        <Container>
          <InputBox
            {...rest}
            type={type}
            position={position}
            ref={forwardedRef}
            isInvalid={rawErrors}
            css={css}
          />
          {icon && (
            <ExtrasDiv position={position}>
              <Icon icon={icon} size={"22px"} color="var(--sq-text-subdued)" />
            </ExtrasDiv>
          )}
          <ExtrasDiv style={{bottom:"9px"}} position={position}>{buttons}</ExtrasDiv>
        </Container>
      </ShadowDom>
    );
  }
);
