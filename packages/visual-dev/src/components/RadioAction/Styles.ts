import { css } from "styled-components";

export const RadioLabelStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: var(--sq-spacing-large);
  user-select: none;
  cursor: pointer;
  color: var(--sq-text);
  font-family: var(--sq-font-family-sans);
  font-weight: var(--sq-font-weight-regular);
  font-size: var(--sq-font-size-regular);
  line-height: var(--sq-line-height-regular);
`;
export const RadioInputStyle = css`
  display: none;

  &:checked + div {
    border-color: var(--sq-action-primary);
  }

  &:checked + div::after {
    transform: scale(1);
  }
`;
export const RadioButtonStyle = css`
  margin-top: 2px;
  width: 14px;
  height: 14px;
  border: 1px solid var(--sq-text);
  border-radius: 50%;
  margin-right: var(--sq-spacing-large);
  box-sizing: border-box;
  padding: 2px;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    display: block;
    background: var(--sq-action-primary);
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.15s;
  }
`;
export const RadioTextStyle = css`
  flex-direction: column;
`;
export const RadioTwoColumn = css`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: var(--sq-spacing-small);
`;
