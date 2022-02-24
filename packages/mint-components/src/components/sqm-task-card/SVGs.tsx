import { h } from "@stencil/core";

export const checkmark_circle = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.81818 10C1.81818 5.48131 5.48131 1.81818 10 1.81818C14.5187 1.81818 18.1818 5.48131 18.1818 10C18.1818 14.5187 14.5187 18.1818 10 18.1818C5.48131 18.1818 1.81818 14.5187 1.81818 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM15.7692 6.96189C16.1398 6.48683 16.0551 5.80132 15.58 5.43077C15.1049 5.06022 14.4194 5.14495 14.0489 5.62001L8.72994 12.4391L5.86229 9.5715C5.43627 9.14548 4.74554 9.14548 4.31952 9.5715C3.89349 9.99752 3.89349 10.6882 4.31952 11.1143L8.05976 14.8545C8.28083 15.0756 8.58613 15.1912 8.89818 15.172C9.21023 15.1528 9.49905 15.0006 9.69133 14.7541L15.7692 6.96189Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const checkmark_filled = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.65 6.19231C15.0459 6.5011 15.1165 7.07236 14.8077 7.46825L9.74277 13.9617C9.58254 14.1672 9.34186 14.294 9.08182 14.31C8.82178 14.326 8.56736 14.2297 8.38314 14.0454L5.26627 10.9286C4.91124 10.5735 4.91124 9.99794 5.26627 9.64292C5.62129 9.2879 6.19689 9.2879 6.55191 9.64292L8.94162 12.0326L13.3741 6.35001C13.6828 5.95412 14.2541 5.88352 14.65 6.19231Z"
        fill="white"
      />
    </svg>
  );
};

export const arrow_left_right = () => {
  return (
    <svg width={11} height={12} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.265 2.789a.346.346 0 000-.489L8.066.101a.346.346 0 10-.489.489l1.61 1.609H2.073a.691.691 0 00-.69.691v1.728a.346.346 0 00.69 0V2.89h7.114L7.577 4.5a.346.346 0 10.49.488l2.198-2.2zM.101 9.21a.346.346 0 000 .489l2.2 2.199a.346.346 0 00.488-.489l-1.61-1.609h7.114c.382 0 .691-.31.691-.691V7.382a.346.346 0 00-.691 0V9.11H1.18L2.789 7.5a.346.346 0 10-.489-.488l-2.199 2.2z"
        fill="currentColor"
      />
    </svg>
  );
};
