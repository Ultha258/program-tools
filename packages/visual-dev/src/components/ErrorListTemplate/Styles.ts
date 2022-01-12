import { css } from "styled-components";

export const Container = css`
  font-size: var(--sq-font-size-regular);
  font-weight: var(--sq-font-weight-regular);
  line-height: var(--sq-line-height-button-medium);
  font-family: var(--sq-font-family-sans);
`;

export const Errors = css`
  color: var(--sq-on-surface-critical);
  margin: var(--sq-spacing-small) 0;
  padding-left: var(--sq-spacing-medium);
  & > * {
    margin: var(--sq-spacing-small) 0 0 !important;
  }
`;

export const ErrorItem = css``;
