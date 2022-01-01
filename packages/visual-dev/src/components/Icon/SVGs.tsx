import * as React from "react";

export const placeholder = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M16.05 10.2C16.01 10.23 15.97 10.27 15.91 10.31C15.8 10.31 15.66 10.31 15.51 10.31C15.51 10.35 15.5 10.37 15.49 10.43C15.36 10.47 15.22 10.52 15.08 10.55C14.92 10.59 14.78 10.48 14.62 10.49C14.59 10.42 14.52 10.38 14.49 10.29C14.46 10.15 14.37 10.07 14.25 10.01C14.13 9.96 14.03 9.87 13.91 9.84C13.78 9.82 13.7 9.72 13.59 9.68C13.52 9.65 13.44 9.66 13.38 9.63C13.25 9.58 13.09 9.56 12.99 9.47C12.88 9.38 12.72 9.35 12.67 9.18C12.48 9.19 12.45 8.95 12.28 8.88C12.17 8.86 12.01 8.73 11.87 8.86C11.78 8.85 11.7 8.82 11.62 8.81C11.51 8.95 11.48 9.15 11.31 9.19C11.27 9.31 11.22 9.45 11.17 9.57C11.12 9.71 11.16 9.84 11.22 9.97C11.28 10.09 11.32 10.21 11.36 10.35C11.39 10.49 11.46 10.63 11.56 10.73C11.61 10.78 11.66 10.86 11.68 10.94C11.7 11.04 11.72 11.12 11.79 11.19C11.8 11.21 11.79 11.27 11.8 11.31C11.91 11.46 12.05 11.6 12.12 11.78C12.18 11.95 12.27 12.1 12.35 12.3C12.33 12.45 12.39 12.59 12.47 12.75C12.57 12.93 12.62 13.14 12.75 13.3C12.74 13.42 12.86 13.44 12.89 13.53C12.87 13.83 12.98 14.12 12.95 14.43C12.95 14.5 12.97 14.59 13 14.67C13.07 14.84 13.01 15.06 13.14 15.21C13.11 15.38 13.27 15.54 13.14 15.72C13.16 15.87 13.1 16.03 13.19 16.18C13.21 16.23 13.19 16.3 13.19 16.36C13.19 16.65 13.19 16.94 13.19 17.23C13.19 17.38 13.18 17.53 13.27 17.67C13.3 17.71 13.29 17.8 13.3 17.89C13.46 18.01 13.63 18.13 13.82 18.25C13.94 18.25 14.08 18.25 14.21 18.25C14.28 18.25 14.36 18.22 14.42 18.31C14.44 18.33 14.52 18.29 14.62 18.27C14.65 18.28 14.74 18.31 14.81 18.33C14.87 18.4 14.93 18.46 15.01 18.54C14.92 18.67 14.84 18.78 14.73 18.86C14.65 18.92 14.58 19.02 14.5 19.08C14.41 19.17 14.28 19.2 14.17 19.27C14.09 19.33 13.99 19.38 13.86 19.45C13.66 19.45 13.41 19.45 13.16 19.45C12.97 19.45 12.88 19.48 12.66 19.64C12.39 19.6 12.1 19.7 11.82 19.57C11.75 19.38 11.65 19.21 11.62 18.98C11.61 18.92 11.59 18.85 11.59 18.79C11.59 18.52 11.59 18.25 11.59 17.98C11.6 17.77 11.56 17.57 11.49 17.37C11.46 17.27 11.46 17.15 11.44 17.03C11.39 16.84 11.32 16.67 11.22 16.51C11.11 16.34 10.98 16.18 10.92 15.97C10.89 15.88 10.87 15.78 10.84 15.68C10.83 15.64 10.82 15.61 10.78 15.58C10.78 15.23 10.78 14.89 10.78 14.54C10.78 14.53 10.76 14.51 10.74 14.5C10.91 14.41 10.66 14.25 10.78 14.15C10.73 13.88 10.49 13.82 10.37 13.63C10.32 13.63 10.28 13.63 10.25 13.63C10.19 13.71 10.13 13.78 10.05 13.88C10.04 13.94 10.01 14.06 9.99 14.16C9.94 14.17 9.92 14.18 9.9 14.18C9.9 14.27 9.9 14.35 9.9 14.4C9.82 14.53 9.72 14.63 9.7 14.75C9.68 14.93 9.58 15.04 9.5 15.14C9.48 15.4 9.28 15.52 9.24 15.77C9.18 15.8 9.11 15.83 8.99 15.88C8.94 15.94 8.84 16.01 8.74 16.1C8.63 16.19 8.51 16.3 8.4 16.41C8.34 16.47 8.26 16.53 8.19 16.6C8.09 16.7 7.97 16.8 7.88 16.92C7.76 17.1 7.58 17.18 7.44 17.31C7.32 17.41 7.27 17.55 7.2 17.67C7.18 17.7 7.16 17.72 7.15 17.74C7.15 17.84 7.15 17.94 7.15 18.04C7.34 18.25 7.61 18.26 7.82 18.41C7.94 18.44 8.07 18.47 8.18 18.49C8.27 18.61 8.32 18.74 8.28 18.9C8.19 18.96 8.1 19.02 8.02 19.07C7.82 19.1 7.63 19.12 7.44 19.14C7.42 19.14 7.41 19.16 7.39 19.16C7.24 19.28 7.08 19.26 6.91 19.26C6.8 19.26 6.69 19.26 6.6 19.26C6.28 19.11 5.98 18.96 5.69 18.67C5.51 18.72 5.4 18.47 5.21 18.42C5.16 18.31 5.1 18.21 5.04 18.09C5.04 17.98 5.04 17.86 5.04 17.74C5.04 17.68 5.04 17.61 5.05 17.54C5.05 17.5 5.07 17.45 5.09 17.44C5.18 17.41 5.19 17.25 5.26 17.24C5.38 17.22 5.36 17.02 5.48 17.03C5.58 16.85 5.67 16.64 5.8 16.5C5.93 16.35 5.99 16.17 6.11 16.02C6.24 15.86 6.32 15.65 6.39 15.44C6.43 15.31 6.5 15.21 6.58 15.12C6.74 14.96 6.86 14.76 7.03 14.62C7.14 14.53 7.25 14.51 7.36 14.48C7.57 14.43 7.76 14.35 7.9 14.14C7.9 14.05 7.9 13.97 7.83 13.88C7.78 13.8 7.76 13.67 7.75 13.57C7.73 13.42 7.74 13.28 7.7 13.14C7.66 12.99 7.66 12.82 7.65 12.66C7.64 12.5 7.64 12.34 7.65 12.18C7.65 12.14 7.67 12.1 7.69 12.05C7.67 12 7.65 11.93 7.61 11.89C7.5 11.78 7.38 11.68 7.25 11.57C7.18 11.38 7.1 11.17 6.99 10.89C6.96 10.78 6.97 10.58 6.91 10.39C6.98 10.18 6.93 9.97 6.95 9.76C6.96 9.56 6.98 9.35 6.98 9.15C6.93 9.31 6.72 9.32 6.74 9.54C6.66 9.63 6.58 9.73 6.53 9.78C6.45 9.98 6.39 10.14 6.31 10.32C6.17 10.44 6 10.58 5.85 10.74C5.76 10.83 5.66 10.91 5.55 10.97C5.4 11.04 5.24 11.13 5.09 11.22C4.85 11.34 4.72 11.34 4.51 11.18C4.4 11.09 4.3 10.97 4.23 10.91C4.14 10.64 4.07 10.42 4 10.22C4.02 10.09 4.04 9.97 4.07 9.83C4.11 9.78 4.17 9.71 4.25 9.62C4.31 9.63 4.4 9.65 4.52 9.67C4.62 9.61 4.75 9.56 4.87 9.47C5.04 9.34 5.12 9.15 5.19 8.96C5.27 8.73 5.35 8.48 5.44 8.25C5.48 8.16 5.54 8.1 5.57 8.04C5.71 7.66 5.91 7.33 5.89 6.91C5.99 6.75 6.12 6.61 6.21 6.41C6.29 6.23 6.45 6.08 6.64 6.02C6.71 6 6.73 5.89 6.8 5.86C6.85 5.84 6.93 5.84 6.95 5.8C7.02 5.64 7.18 5.6 7.24 5.44C7.3 5.31 7.38 5.2 7.45 5.09C7.47 5.06 7.48 5.02 7.49 4.99C7.51 4.78 7.64 4.63 7.77 4.54C7.9 4.45 7.93 4.34 7.94 4.19C7.94 4.18 7.94 4.15 7.94 4.13C7.94 4.13 7.95 4.12 7.96 4.11C7.98 4.08 8 4.06 8.04 4.01C8.04 3.94 8.04 3.85 8.04 3.79C8.12 3.63 8.19 3.49 8.3 3.39C8.43 3.27 8.55 3.16 8.71 3.21C8.8 3.01 9 2.96 9.05 2.75C9.15 2.68 9.26 2.62 9.38 2.55C9.47 2.55 9.59 2.55 9.7 2.55C9.77 2.48 9.83 2.42 9.89 2.37C9.96 2.31 10.03 2.26 10.04 2.15C10.1 2.12 10.16 2.08 10.23 2.05C10.23 2.01 10.24 1.98 10.24 1.94C10.37 1.71 10.54 1.51 10.66 1.25C10.74 1.08 10.9 0.96 11.02 0.81C11.06 0.77 11.09 0.72 11.13 0.69C11.18 0.65 11.23 0.59 11.28 0.59C11.36 0.59 11.4 0.53 11.45 0.47C11.52 0.41 11.63 0.54 11.68 0.4C11.75 0.4 11.82 0.4 11.88 0.4C11.9 0.42 11.92 0.45 11.95 0.46C12.01 0.48 12.08 0.47 12.13 0.5C12.38 0.63 12.51 0.9 12.63 1.17C12.65 1.23 12.63 1.33 12.66 1.36C12.75 1.44 12.75 1.57 12.77 1.67C12.79 1.77 12.85 1.8 12.87 1.88C12.9 1.99 12.83 2.12 12.92 2.22C12.94 2.45 12.95 2.67 12.8 2.81C12.77 3.02 12.75 3.2 12.72 3.38C12.69 3.41 12.66 3.45 12.63 3.49C12.63 3.66 12.63 3.86 12.63 4.04C12.57 4.08 12.53 4.11 12.48 4.14C12.48 4.2 12.48 4.26 12.48 4.36C12.52 4.4 12.58 4.46 12.64 4.51C12.64 4.58 12.64 4.64 12.64 4.69C12.67 4.73 12.7 4.77 12.73 4.8C12.73 5.06 12.73 5.32 12.73 5.58C12.72 5.73 12.75 5.85 12.83 5.96C12.9 6.05 13 6.14 13.02 6.25C13.07 6.48 13.2 6.69 13.19 6.94C13.27 6.98 13.36 6.99 13.39 7.05C13.45 7.16 13.55 7.22 13.62 7.31C13.71 7.41 13.82 7.5 13.92 7.58C14.03 7.79 14.19 7.94 14.34 8.12C14.49 8.3 14.65 8.46 14.8 8.61C14.93 8.64 15.04 8.67 15.17 8.7C15.24 8.76 15.31 8.85 15.39 8.9C15.5 8.95 15.54 9.07 15.59 9.16C15.65 9.27 15.73 9.34 15.82 9.4C15.83 9.59 15.92 9.74 16.03 9.88C16.05 9.96 16.05 10.08 16.05 10.2L16.05 10.2Z" />
  </svg>
);

export const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M15.7143 5.71429L11.4286 10L15.7143 14.2857L14.2857 15.7143L10 11.4286L5.71429 15.7143L4.28571 14.2857L8.57143 10L4.28571 5.71429L5.71429 4.28571L10 8.57143L14.2857 4.28571L15.7143 5.71429Z" />
  </svg>
);

export const add = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17 11.5H11.5V17H8.5V11.5H3V8.5H8.5V3H11.5V8.5H17V11.5Z" />
  </svg>
);

export const chevron_down = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292892 6.20711L2.5 4L10 11.5L17.5 4L19.7071 6.20711L10 15.9142L0.292892 6.20711Z"
    />
  </svg>
);

export const chevron_up = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 13.7263L2.2737 16L10 8.2737L17.7263 16L20 13.7263L10 3.7263L0 13.7263Z"
    />
  </svg>
);

export const arrow_down = (
  <svg width={10} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.146 1.483L1.25.6 5 3.6l3.75-3 1.104.883L5 5.366.146 1.483z"
      fill="#858585"
    />
  </svg>
);

export const calendar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M7.5 9.16666H5.83333V10.8333H7.5V9.16666ZM10.8333 9.16666H9.16667V10.8333H10.8333V9.16666ZM14.1667 9.16666H12.5V10.8333H14.1667V9.16666ZM15.8333 3.33333H15V1.66666H13.3333V3.33333H6.66667V1.66666H5L5 3.33333H4.16667C3.24167 3.33333 2.50833 4.08333 2.50833 5L2.5 16.6667C2.5 17.5833 3.24167 18.3333 4.16667 18.3333H15.8333C16.75 18.3333 17.5 17.5833 17.5 16.6667V5C17.5 4.08333 16.75 3.33333 15.8333 3.33333ZM15.8333 16.6667H4.16667V7.5H15.8333V16.6667Z" />
    <path d="M7.5 12.9167H5.83333V14.5833H7.5V12.9167ZM10.8333 12.9167H9.16667V14.5833H10.8333V12.9167ZM14.1667 12.9167H12.5V14.5833H14.1667V12.9167Z" />
  </svg>
);

export const block = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 10C16 13.3137 13.3137 16 10 16C8.77379 16 7.63349 15.6322 6.68343 15.0008L15.0008 6.68343C15.6322 7.63349 16 8.77379 16 10ZM5.22378 13.632L13.632 5.22378C12.6238 4.45591 11.3651 4 10 4C6.68629 4 4 6.68629 4 10C4 11.3651 4.45591 12.6238 5.22378 13.632ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
    />
  </svg>
);

export const edit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M12.7888 4.6621L15.3384 7.21167C16.4136 6.1119 16.4538 5.14014 15.6571 4.3434C14.8604 3.54666 13.9584 3.45508 12.7888 4.6621Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8328 5.61819L14.3823 8.16775L7.21166 15.3384L4.3434 15.6571L4.6621 12.7888L11.8328 5.61819ZM12.9482 8.00841L11.9921 7.05232L5.93688 13.1075L6.89297 14.0636L12.9482 8.00841Z"
    />
    <path d="M12.7888 4.6621L15.3384 7.21167C16.4136 6.1119 16.4538 5.14014 15.6571 4.3434C14.8604 3.54666 13.9584 3.45508 12.7888 4.6621Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8328 5.61819L14.3823 8.16775L7.21166 15.3384L4.3434 15.6571L4.6621 12.7888L11.8328 5.61819ZM12.9482 8.00841L11.9921 7.05232L5.93688 13.1075L6.89297 14.0636L12.9482 8.00841Z"
    />
  </svg>
);

export const checkmark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.115 5.64007C15.5505 5.97974 15.6282 6.60813 15.2885 7.0436L9.71707 14.1865C9.54081 14.4124 9.27607 14.5519 8.99002 14.5695C8.70397 14.5872 8.42411 14.4812 8.22146 14.2785L4.79289 10.85C4.40237 10.4594 4.40237 9.82628 4.79289 9.43575C5.18342 9.04523 5.81658 9.04523 6.20711 9.43575L8.8358 12.0644L13.7115 5.81354C14.0512 5.37806 14.6796 5.3004 15.115 5.64007Z"
    />
  </svg>
);

export const checkmark_circle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.115 5.64007C15.5505 5.97974 15.6282 6.60813 15.2885 7.0436L9.71707 14.1865C9.54081 14.4124 9.27607 14.5519 8.99002 14.5695C8.70397 14.5872 8.42411 14.4812 8.22146 14.2785L4.79289 10.85C4.40237 10.4594 4.40237 9.82628 4.79289 9.43575C5.18342 9.04523 5.81658 9.04523 6.20711 9.43575L8.8358 12.0644L13.7115 5.81354C14.0512 5.37806 14.6796 5.3004 15.115 5.64007Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2.75C6.77208 2.75 3.75 5.77208 3.75 9.5C3.75 13.2279 6.77208 16.25 10.5 16.25C14.2279 16.25 17.25 13.2279 17.25 9.5C17.25 5.77208 14.2279 2.75 10.5 2.75ZM2.25 9.5C2.25 4.94365 5.94365 1.25 10.5 1.25C15.0563 1.25 18.75 4.94365 18.75 9.5C18.75 14.0563 15.0563 17.75 10.5 17.75C5.94365 17.75 2.25 14.0563 2.25 9.5Z"
    />
  </svg>
);

export const actions = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 9.5C6 10.3284 5.32843 11 4.5 11C3.67157 11 3 10.3284 3 9.5C3 8.67157 3.67157 8 4.5 8C5.32843 8 6 8.67157 6 9.5ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
    />
  </svg>
);

export const chevron_left = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3598 17.4349L14.6402 15.8984L7.56205 10L14.6402 4.10155L13.3598 2.56511L4.43795 10L13.3598 17.4349Z"
    />
  </svg>
);

export const chevron_right = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.64019 17.4349L5.35982 15.8984L12.438 10L5.35982 4.10155L6.64019 2.56511L15.5621 10L6.64019 17.4349Z"
    />
  </svg>
);

export const mail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.87263L12.2514 3.57895H16.3333V6.75021L18 8.19252V18H2V8.19252L3.66667 6.75021V3.57895H7.7486L10 1.87263ZM9.40418 3.57895H10.5958L10 3.12738L9.40418 3.57895ZM3.66667 8.07267L3.2618 8.42303L3.66667 8.77708V8.07267ZM4.66667 9.65157L8.10445 12.6579H11.8955L15.3333 9.65157V4.57895H4.66667V9.65157ZM16.3333 8.77708L16.7382 8.42303L16.3333 8.07267V8.77708ZM17 9.52252L12.8619 13.1412L17 16.4584V9.52252ZM16.0769 17L11.9077 13.6579H8.09233L3.92314 17H16.0769ZM3 16.4584V9.52252L7.13806 13.1412L3 16.4584ZM13.75 5.94737V6.94737H6.25V5.94737H13.75ZM6.25 8.52632V7.52632H13.75V8.52632H6.25ZM13.75 9.10527V10.1053H6.25V9.10527H13.75Z"
    />
  </svg>
);

export const action = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11.5 1L11 8H15L8.5 19L9 11.5H5L11.5 1Z" />
  </svg>
);

export const arrow_dropdown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M.5.5h13L7 7.5.5.5z" />
  </svg>
);

export const help = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.1 15.4H10.9V13.6H9.1V15.4ZM10 1C5.032 1 1 5.032 1 10C1 14.968 5.032 19 10 19C14.968 19 19 14.968 19 10C19 5.032 14.968 1 10 1ZM10 17.2C6.031 17.2 2.8 13.969 2.8 10C2.8 6.031 6.031 2.8 10 2.8C13.969 2.8 17.2 6.031 17.2 10C17.2 13.969 13.969 17.2 10 17.2ZM10 4.6C8.011 4.6 6.4 6.211 6.4 8.2H8.2C8.2 7.21 9.01 6.4 10 6.4C10.99 6.4 11.8 7.21 11.8 8.2C11.8 10 9.1 9.775 9.1 12.7H10.9C10.9 10.675 13.6 10.45 13.6 8.2C13.6 6.211 11.989 4.6 10 4.6Z" />
  </svg>
);

export const loading = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 1C11.78 1 13.5201 1.52784 15.0001 2.51677C16.4802 3.50571 17.6337 4.91131 18.3149 6.55585C18.9961 8.20038 19.1743 10.01 18.8271 11.7558C18.4798 13.5016 17.6226 15.1053 16.364 16.364C15.1053 17.6226 13.5016 18.4798 11.7558 18.8271C10.01 19.1743 8.20039 18.9961 6.55585 18.3149C4.91132 17.6337 3.50571 16.4802 2.51678 15.0001C1.52784 13.5201 1 11.78 1 10L4.05828 10C4.05828 11.1752 4.40676 12.3239 5.05964 13.301C5.71253 14.2782 6.6405 15.0397 7.72621 15.4894C8.81191 15.9391 10.0066 16.0568 11.1592 15.8275C12.3118 15.5983 13.3705 15.0324 14.2014 14.2014C15.0324 13.3705 15.5983 12.3118 15.8276 11.1592C16.0568 10.0066 15.9391 8.81191 15.4894 7.7262C15.0397 6.64049 14.2782 5.71253 13.301 5.05964C12.3239 4.40676 11.1752 4.05828 10 4.05828V1Z" />
  </svg>
);

export const gift = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0013 3.54434C13.483 3.18548 13.9087 3.17853 14.1522 3.29163C14.3661 3.39091 14.6755 3.69684 14.6755 4.52787C14.6755 5.14692 14.2496 5.62574 13.6107 5.99945C13.306 6.1777 12.9947 6.30502 12.7559 6.38801C12.6377 6.42906 12.5404 6.45817 12.4747 6.47655L12.4383 6.48653L11.0813 6.56611C11.6928 4.89337 12.1013 4.21474 13.0013 3.54434ZM11.5 8.1308V9.80075H14.9947L15.2685 9.80075L15.7447 9.80075H16.2713V8.1308H11.5ZM8.50001 9.80075H5.00532L4.73155 9.80075L4.25532 9.80075H3.72873V8.1308H8.50001V9.80075ZM8.50001 11.3007V16.7746H5.00532V11.3007H8.50001ZM11.5 16.7746V11.3007H14.9947V16.7746H11.5ZM16.1755 4.52787C16.1755 5.44445 15.7589 6.13236 15.2496 6.6308H17.0213H17.7713V7.3808V10.5508V11.3008H17.0213H16.4947V17.5246V18.2746H15.7447H4.25532H3.50532V17.5246V11.3008H2.97873H2.22873V10.5508V7.3808V6.6308H2.97873H5.61594C4.90803 6.21424 4.14362 5.49588 4.14362 4.33262C4.14362 3.199 4.62092 2.30117 5.48903 1.91365C6.31861 1.54333 7.27645 1.74639 8.0337 2.28872C9.04474 3.01282 9.57295 3.80374 10.0813 5.00882C10.5806 3.8562 11.1278 3.06953 12.1051 2.34143C12.9 1.7493 13.9105 1.52557 14.7839 1.93113C15.6871 2.3505 16.1755 3.31257 16.1755 4.52787ZM6.10047 3.28337C6.32221 3.18439 6.71605 3.19005 7.1603 3.50822C7.9527 4.07573 8.33303 4.64467 8.86116 5.99498L7.87365 5.85486L7.87198 5.8546L7.85597 5.85203C7.84042 5.84946 7.81544 5.84516 7.78239 5.83888C7.71612 5.82631 7.61838 5.80601 7.49987 5.77624C7.25987 5.71596 6.94926 5.62045 6.64662 5.4794C5.99243 5.17452 5.64362 4.79682 5.64362 4.33262C5.64362 3.61464 5.91727 3.36515 6.10047 3.28337Z"
    />
  </svg>
);

export const copy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M4.5 6C4.5 4.89543 5.39543 4 6.5 4H10.5C11.6046 4 12.5 4.89543 12.5 6V11C12.5 12.1046 11.6046 13 10.5 13H6.5C5.39543 13 4.5 12.1046 4.5 11V6Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 5.2H6.5C6.05817 5.2 5.7 5.55817 5.7 6V11C5.7 11.4418 6.05817 11.8 6.5 11.8H10.5C10.9418 11.8 11.3 11.4418 11.3 11V6C11.3 5.55817 10.9418 5.2 10.5 5.2ZM6.5 4C5.39543 4 4.5 4.89543 4.5 6V11C4.5 12.1046 5.39543 13 6.5 13H10.5C11.6046 13 12.5 12.1046 12.5 11V6C12.5 4.89543 11.6046 4 10.5 4H6.5Z"
    />
    <g filter="url(#filter0_d)">
      <path
        d="M7.5 9C7.5 7.89543 8.39543 7 9.5 7H13.5C14.6046 7 15.5 7.89543 15.5 9V14C15.5 15.1046 14.6046 16 13.5 16H9.5C8.39543 16 7.5 15.1046 7.5 14V9Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter1_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 8.2H9.5C9.05817 8.2 8.7 8.55817 8.7 9V14C8.7 14.4418 9.05817 14.8 9.5 14.8H13.5C13.9418 14.8 14.3 14.4418 14.3 14V9C14.3 8.55817 13.9418 8.2 13.5 8.2ZM9.5 7C8.39543 7 7.5 7.89543 7.5 9V14C7.5 15.1046 8.39543 16 9.5 16H13.5C14.6046 16 15.5 15.1046 15.5 14V9C15.5 7.89543 14.6046 7 13.5 7H9.5Z"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="6.5"
        y="6"
        width="9"
        height="10"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x="6.5"
        y="6"
        width="9"
        height="10"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const alert = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.1 12.7H10.9V14.5H9.1V12.7ZM9.1 5.5H10.9V10.9H9.1V5.5ZM9.991 1C5.023 1 1 5.032 1 10C1 14.968 5.023 19 9.991 19C14.968 19 19 14.968 19 10C19 5.032 14.968 1 9.991 1ZM10 17.2C6.022 17.2 2.8 13.978 2.8 10C2.8 6.022 6.022 2.8 10 2.8C13.978 2.8 17.2 6.022 17.2 10C17.2 13.978 13.978 17.2 10 17.2Z" />
  </svg>
);

export const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4368 14.2523C11.2327 15.1877 9.70753 15.7466 8.04847 15.7466C4.15571 15.7466 1 12.6693 1 8.87331C1 5.07729 4.15571 2 8.04847 2C11.9412 2 15.0969 5.07729 15.0969 8.87331C15.0969 10.2065 14.7077 11.4511 14.0339 12.5049L19 17.3475L17.3054 19L12.4368 14.2523ZM12.7005 8.87331C12.7005 11.3787 10.6177 13.4097 8.04847 13.4097C5.47924 13.4097 3.39648 11.3787 3.39648 8.87331C3.39648 6.36794 5.47924 4.33693 8.04847 4.33693C10.6177 4.33693 12.7005 6.36794 12.7005 8.87331Z"
    />
  </svg>
);

export const filter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.09105 1.57584C1.24975 1.22446 1.59014 1 1.9643 1H18.0357C18.4099 1 18.7502 1.22446 18.9089 1.57584C19.0677 1.92723 19.016 2.3421 18.7765 2.64018L12.5714 10.3621V18C12.5714 18.3603 12.3846 18.6927 12.0822 18.8702C11.7799 19.0477 11.4089 19.0429 11.111 18.8575L7.89674 16.8575C7.60629 16.6768 7.42857 16.3513 7.42857 16V10.3621L1.22351 2.64018C0.983981 2.3421 0.932349 1.92723 1.09105 1.57584ZM4.02308 3L9.13364 9.35982C9.27806 9.53953 9.35714 9.76606 9.35714 10V15.4338L10.6429 16.2338V10C10.6429 9.76606 10.7219 9.53953 10.8664 9.35982L15.9769 3H4.02308Z"
    />
  </svg>
);

export const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0062 1L10.0195 1.00032C11.1598 1.02766 12.2369 1.17939 12.9702 1.93223C13.5511 2.52858 13.7903 3.37149 13.8646 4.39629H18V6.03265H16.3538V16.5455C16.3538 17.9011 15.2587 19 13.9077 19H6.09231C4.74133 19 3.64615 17.9011 3.64615 16.5455V6.03265H2V4.39629H6.13398C6.20369 3.39764 6.42785 2.55695 6.99072 1.9545C7.71754 1.17656 8.80295 1.01038 9.99299 1.00011L10.0062 1ZM7.77037 4.39629H12.228C12.1584 3.62569 11.9894 3.26637 11.804 3.07602C11.568 2.83373 11.1117 2.66458 9.99378 2.63653C8.85434 2.64775 8.40555 2.83271 8.18043 3.07366C7.99526 3.27185 7.83594 3.63859 7.77037 4.39629ZM5.27692 6.03265V16.5455C5.27692 16.9973 5.64198 17.3636 6.09231 17.3636H13.9077C14.358 17.3636 14.7231 16.9973 14.7231 16.5455V6.03265H5.27692Z"
    />
  </svg>
);

export const info = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM11.6667 6C11.6667 6.92048 10.9205 7.66667 9.99999 7.66667C9.07951 7.66667 8.33332 6.92048 8.33332 6C8.33332 5.07953 9.07951 4.33333 9.99999 4.33333C10.9205 4.33333 11.6667 5.07953 11.6667 6ZM7.66667 8.66667V9.33334H8.33334C8.66667 9.33334 8.99946 9.62276 9 10.3333V14.3333C9 14.6667 8.66667 14.6667 8.33334 14.6667H7.66667V15.3333H13V14.6667H12.3333C12 14.6667 11.6667 14.6667 11.6667 14.3333V8.33334L7.66667 8.66667Z"
    />
  </svg>
);

export const settings = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.04593 3.36044C8.03608 3.42609 8.05095 3.48904 8.08303 3.54061C7.62837 3.67395 7.19347 3.85351 6.78375 4.07385C6.76912 4.01697 6.73563 3.96431 6.68405 3.92618L4.94928 2.64397C4.84313 2.56551 4.69555 2.57651 4.60221 2.66985L2.66424 4.60782C2.57091 4.70116 2.5599 4.84873 2.63836 4.95488L3.92058 6.68965C3.95333 6.73396 3.9968 6.76492 4.04446 6.78204C3.81981 7.18849 3.63557 7.62038 3.49714 8.0723C3.45531 8.05589 3.4086 8.04982 3.36045 8.05704L1.22711 8.37704C1.09657 8.39662 1 8.50876 1 8.64076V11.3815C1 11.5135 1.09657 11.6256 1.22711 11.6452L3.36045 11.9652C3.39732 11.9707 3.43334 11.9684 3.46697 11.9597C3.59709 12.4096 3.77241 12.8402 3.9877 13.2464C3.96254 13.2631 3.93973 13.2844 3.92059 13.3103L2.63837 15.0451C2.55991 15.1513 2.57091 15.2988 2.66425 15.3922L4.60222 17.3301C4.69556 17.4235 4.84314 17.4345 4.94929 17.356L6.68406 16.0738C6.70155 16.0609 6.71697 16.0463 6.73027 16.0304C7.14375 16.2576 7.5834 16.443 8.04357 16.581C8.04224 16.6001 8.04295 16.6197 8.04593 16.6396L8.36593 18.7729C8.38551 18.9034 8.49765 19 8.62965 19H11.3704C11.5024 19 11.6145 18.9034 11.6341 18.7729L11.9541 16.6396C11.957 16.6197 11.9578 16.6001 11.9564 16.581C12.4166 16.443 12.8562 16.2576 13.2697 16.0304C13.283 16.0463 13.2984 16.0609 13.3159 16.0738L15.0507 17.356C15.1568 17.4345 15.3044 17.4235 15.3978 17.3301L17.3357 15.3922C17.4291 15.2988 17.4401 15.1513 17.3616 15.0451L16.0794 13.3103C16.0603 13.2845 16.0375 13.2631 16.0123 13.2464C16.2309 12.834 16.4083 12.3963 16.539 11.939C16.5709 11.9465 16.6049 11.9482 16.6396 11.943L18.7729 11.623C18.9034 11.6034 19 11.4912 19 11.3592V8.61855C19 8.48655 18.9034 8.37441 18.7729 8.35483L16.6396 8.03483C16.5891 8.02725 16.5401 8.0343 16.4968 8.05257C16.3591 7.6078 16.1769 7.18257 15.9555 6.78204C16.0032 6.76491 16.0467 6.73396 16.0794 6.68965L17.3616 4.95488C17.4401 4.84873 17.4291 4.70116 17.3357 4.60782L15.3978 2.66985C15.3044 2.57651 15.1569 2.56551 15.0507 2.64397L13.3159 3.92618C13.2644 3.96431 13.2309 4.01697 13.2162 4.07384C12.8065 3.8535 12.3716 3.67395 11.917 3.54061C11.9491 3.48904 11.9639 3.42609 11.9541 3.36044L11.6341 1.22711C11.6145 1.09657 11.5024 1 11.3704 1H8.62965C8.49765 1 8.38551 1.09657 8.36593 1.22711L8.04593 3.36044ZM10 13.1333C11.6937 13.1333 13.0667 11.7603 13.0667 10.0667C13.0667 8.37299 11.6937 7 10 7C8.30632 7 6.93333 8.37299 6.93333 10.0667C6.93333 11.7603 8.30632 13.1333 10 13.1333Z"
    />
  </svg>
);

export const leftward_arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.265 2.344a1.174 1.174 0 010 1.66L5.008 8.261h12.818a1.174 1.174 0 010 2.348H5.008l4.648 4.648a1.174 1.174 0 11-1.66 1.66l-6.652-6.652a1.174 1.174 0 010-1.66l6.26-6.261a1.174 1.174 0 011.66 0z"
    />
  </svg>
);

export const avatar = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="none">
    <mask
      id="prefix__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={32}
      height={32}
    >
      <circle cx={19} cy={19} r={16} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="url(#prefix__pattern0)" d="M2 2h34v34H2z" />
    </g>
    <circle cx={19} cy={19} r={16.5} stroke="#003B45" />
    <circle cx={19} cy={19} r={18} stroke="#E2E2E2" strokeWidth={2} />
    <defs>
      <pattern
        id="prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#prefix__image0" transform="scale(.00472)" />
      </pattern>
      <image
        id="prefix__image0"
        width={212}
        height={212}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const visibility = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
  </svg>
);
