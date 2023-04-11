import * as React from "react";
import styled, { CSSProp } from "styled-components";
import * as Styles from "./Styles";
import { IconKey, IconView } from "../Icon";

type BadgeProps = OptionProps &
  StyleProps &
  Partial<React.ComponentProps<"div">>;

export interface OptionProps {
  /**
   * Key of the icon to display in the badge
   */
  icon?: IconKey;
}

export interface StyleProps {
  /**
   * Badge variant, defines badge colour
   */
  status: "default_style" | "success" | "critical" | "warning" | "info";
  /**
   * Display the badge with the pill style with rounded sides
   */
  pill?: boolean;
  /**
   * Change the badge size (default is "medium")
   */
  size?: "medium" | "small";
  /**
   * Custom CSS applied to badge
   */
  customCSS?: CSSProp;
}

const BadgeDiv = styled.div<StyleProps>`
  ${Styles.base}
  ${(props) => Styles[props.status]}
  border-radius: ${(props) =>
    props.pill
      ? "var(--sq-spacing-xxx-large);"
      : "var(--sq-spacing-xx-small);"};
  ${(props) => props.size === "small" && Styles.small}
  ${(props) =>
    props.pill &&
    props.size === "small" &&
    "padding: var(--sq-spacing-xxx-small) var(--sq-spacing-x-small);"}
  ${(props) => props.customCSS}
`;

export const BadgeView = React.forwardRef<React.ElementRef<"div">, BadgeProps>(
  (props, forwardedRef) => {
    const {
      status,
      pill = false,
      size = "medium",
      icon,
      children,
      customCSS = {},
      ...rest
    } = props;

    return (
      <BadgeDiv
        {...rest}
        status={status}
        pill={pill}
        size={size}
        ref={forwardedRef}
        customCSS={customCSS}
      >
        {icon && (
          <IconView
            icon={icon}
            color="inherit"
            size={
              size === "small"
                ? "var(--sq-icon-size-small)"
                : "var(--sq-icon-size-badge)"
            }
            customCSS="+ span { margin-left: var(--sq-spacing-x-small); }"
          />
        )}
        {children && <span>{children}</span>}
      </BadgeDiv>
    );
  }
);

/**
 * @deprecated use {@link BadgeView} instead
 */
export const Badge = BadgeView;
