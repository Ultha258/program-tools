import * as React from "react";
import styled, { CSSProp } from "styled-components";
import * as Styles from "./Styles";
import { Icon } from "../Icon";
import { UseSelectReturnValue } from "downshift";

type SelectProps<ItemType> = OptionProps<ItemType> &
  React.ComponentProps<"button">;

export interface OptionProps<ItemType> {
  functional: UseSelectReturnValue<ItemType>;
  disabled?: boolean;
  errors?: any;
  items: Array<any>;
  css?: CSSProp;
}

const SelectInput = styled.button<{
  disabled: boolean | undefined;
  errors: any;
}>`
  ${Styles.SelectInputStyle}
  ${(props) => props.disabled && "background: var(--sq-surface-input-disabled)"}
  ${(props) =>
    props.errors &&
    "border-color: var(--sq-border-critical); background: var(--sq-surface-critical-subdued);"}
`;

const SelectedValue = styled.span`
  ${Styles.SelectedValue}
`;

const IconDiv = styled.div`
  ${Styles.IconStyle}
`;

const ItemContainer = styled.ul<{
  errors: any;
}>`
  ${Styles.ItemContainer}
  ${(props) =>
    props.errors &&
    "border-color: var(--sq-border-critical); background-color: var(--sq-surface-critical-subdued);"}
`;

const Item = styled("li")`
  ${Styles.Item}
`;

// Redeclare forwardRef for use with generic prop types.
declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

const SelectInner = <ItemType,>(
  props: SelectProps<ItemType>,
  ref: React.Ref<HTMLInputElement>
) => {
  const {
    css = {},
    disabled = false,
    errors = false,
    functional,
    items,
    ...rest
  } = props;

  return (
    <div>
      <SelectInput
        {...rest}
        disabled={disabled}
        ref={ref}
        errors={errors}
        css={css}
        {...functional.getToggleButtonProps()}
      >
        <SelectedValue>{"" || functional.selectedItem}</SelectedValue>
        {functional.isOpen ? (
          <IconDiv>
            <Icon
              icon={"chevron_up"}
              size={"small"}
              color={
                errors ? "var(--sq-border-critical)" : "var(--sq-text-subdued)"
              }
            />
          </IconDiv>
        ) : (
          <IconDiv>
            <Icon
              icon={"chevron_down"}
              size={"small"}
              color={
                errors ? "var(--sq-border-critical)" : "var(--sq-text-subdued)"
              }
            />
          </IconDiv>
        )}
      </SelectInput>
      <ItemContainer errors={errors} {...functional.getMenuProps()}>
        {functional.isOpen &&
          items.map((item, index) => (
            <Item
              key={`${item}${index}`}
              style={
                functional.highlightedIndex === index
                  ? { backgroundColor: "var(--sq-surface-hover)" }
                  : {}
              }
              {...functional.getItemProps({ item, index })}
            >
              {item}
            </Item>
          ))}
      </ItemContainer>
    </div>
  );
};

export const Select = React.forwardRef(SelectInner);
