import * as React from "react";
import styled, { CSSProp } from "styled-components";
import { IconKey, Icon } from "../Icon";
import { loadingAnimation } from "./Animations";
import * as Styles from "./Styles";

type ButtonProps = OptionProps & StyleProps & React.ComponentProps<"button">;

interface OptionProps {
  icon?: IconKey;
  left?: boolean;
  right?: boolean;
  children?: React.ReactElement | string;
}

interface StyleProps {
  pill?: boolean;
  loading?: boolean;
  critical?: boolean;
  success?: boolean;
  size?: "small" | "medium" | "large";
  css?: CSSProp;
}

const Button = styled.button<Required<StyleProps>>`
  ${Styles.base}
  ${Styles.secondary}
  ${(props) => props.pill && Styles.pill}
  ${(props) => props.size == "small" && Styles.small}
  ${(props) => props.size == "medium" && Styles.medium}
  ${(props) => props.size == "large" && Styles.large}
  ${(props) => props.critical && Styles.secondary_critical}
  ${(props) => props.success && Styles.secondary_success}
  ${(props) => props.loading && Styles.secondary_loading}
  ${(props) => props.css}
`;
export const SecondaryButton = React.forwardRef<
  React.ElementRef<"button">,
  ButtonProps
>((props, forwardedRef) => {
  let {
    pill = false,
    loading = false,
    critical = false,
    success = false,
    icon,
    left = true,
    right = false,
    size = "medium",
    children,
    css = {},
    ...rest
  } = props;
  if (right) left = false;

  return (
    <Button
      {...rest}
      pill={pill}
      loading={loading}
      critical={critical}
      success={success}
      size={size}
      ref={forwardedRef}
      css={css}
    >
      {left && icon && <Icon icon={icon} size={Styles.icon_size[size]} />}
      <span> {children} </span>
      {right && icon && <Icon icon={icon} size={Styles.icon_size[size]} />}
      {loading && (
        <>
          {children && (
            <span style={{ padding: Styles.anim_padding[size] }}></span>
          )}
          {loadingAnimation(
            Styles.loading_anim[size],
            "var(--sq-action-secondary-border)"
          )}
        </>
      )}
    </Button>
  );
});
