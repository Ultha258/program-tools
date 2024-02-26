import { h } from "@stencil/core";

type PoweredByProps = {
  color?: string;
  width?: number;
  height?: number;
};

export function PoweredByImg({
  color = "#A6A6A6",
  width = 47,
  height = 16,
}: PoweredByProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 47 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.97774 2.6488C7.86476 2.6488 7.74514 2.66867 7.6388 2.71503C7.53247 2.76139 7.43278 2.82099 7.35303 2.90709C7.27328 2.98656 7.20682 3.0859 7.1603 3.19186C7.11378 3.29782 7.09384 3.41703 7.10049 3.52961C7.12043 3.74816 7.22011 3.96008 7.37962 4.10578C7.54576 4.2581 7.75843 4.33757 7.97774 4.33757C8.19706 4.33757 8.41637 4.25148 8.57587 4.10578C8.74202 3.95346 8.8417 3.74816 8.855 3.52961C8.855 3.4104 8.83506 3.29782 8.79518 3.19186C8.74866 3.0859 8.68885 2.98656 8.60245 2.90709C8.5227 2.82761 8.42302 2.76139 8.31668 2.71503C8.21035 2.66867 8.09737 2.6488 7.97774 2.6488Z"
        fill={color}
      />
      <path
        d="M8.62902 5.62897H7.33972V11.8807H8.62902V5.62897Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7034 6.57601C15.1686 5.89388 15.9528 5.50977 16.9164 5.50977C18.4849 5.50977 19.5415 6.52303 19.5283 8.03298V11.8741H18.219V8.37074C18.219 7.35085 17.6807 6.76806 16.7303 6.76806C15.78 6.76806 15.1154 7.43695 15.1154 8.3906V11.8741H13.7995V8.37074C13.7995 7.35085 13.2612 6.76806 12.3108 6.76806C11.3605 6.76806 10.6959 7.43695 10.6959 8.3906V11.8741H9.39331V5.6356H10.7092V6.17865C11.3073 5.60911 12.0782 5.51639 12.5169 5.51639C13.4606 5.50977 14.2514 5.9005 14.7034 6.57601Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.5623 5.50977C22.7847 5.50977 22.1135 5.7548 21.6018 6.20514V5.62897H20.2992V14.3245H21.6018V11.2516C22.1069 11.7152 22.7847 11.9536 23.5623 11.9536C25.3434 11.9536 26.6859 10.5628 26.6859 8.72836C26.6859 6.90052 25.3434 5.50977 23.5623 5.50977ZM23.4427 10.7284C22.3395 10.7284 21.5353 9.88732 21.5353 8.7416C21.5353 7.60251 22.3328 6.75482 23.4427 6.75482C24.5459 6.75482 25.3501 7.58927 25.3501 8.7416C25.3501 9.90056 24.5526 10.7284 23.4427 10.7284Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.603 10.7482C44.9752 10.7482 45.3872 10.6025 45.7328 10.3708L45.8524 10.2979L46.4904 11.3045L46.3841 11.384C45.8458 11.788 45.1878 11.9999 44.5166 11.9999C43.101 11.9999 42.3168 11.1588 42.3168 9.62902V6.85415H41.0408V5.62896H42.3168V3.75476H43.6327V5.62234H46.1249V6.8409H43.6327V9.60253C43.6327 10.3376 43.9783 10.7482 44.603 10.7482Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.033 15.1987C34.9533 15.1987 34.8735 15.2252 34.8071 15.2649C34.7406 15.3113 34.6874 15.3709 34.6609 15.4437C34.6276 15.5166 34.621 15.596 34.6409 15.6755C34.6542 15.755 34.6941 15.8278 34.7539 15.8808C34.8137 15.9404 34.8802 15.9735 34.9599 15.9934C35.0397 16.0066 35.1194 16 35.1925 15.9735C35.2656 15.9404 35.3321 15.894 35.372 15.8278C35.4185 15.7616 35.4384 15.6821 35.4384 15.6027C35.4384 15.4967 35.3985 15.3907 35.3188 15.3179C35.239 15.2384 35.1394 15.1987 35.033 15.1987Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.2528 13.351C37.6382 13.351 37.9772 13.4966 38.2031 13.7549L38.2297 13.788L37.8974 14.1324L37.8642 14.0993C37.7844 14.0132 37.6914 13.947 37.5851 13.9006C37.4787 13.8543 37.3657 13.8278 37.2461 13.8344C36.7876 13.8344 36.4553 14.192 36.4553 14.6689C36.4553 15.1523 36.7876 15.5099 37.2461 15.5099C37.4787 15.5033 37.7047 15.4106 37.8708 15.245L37.9041 15.2119L38.2231 15.5695L38.1965 15.596C37.9572 15.8543 37.6249 15.9868 37.2461 15.9868C36.4818 15.9868 35.9302 15.4371 35.9302 14.6755C35.9435 13.9006 36.4885 13.351 37.2528 13.351Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.2833 13.351C39.5123 13.351 38.9341 13.9139 38.9341 14.6622C38.9341 15.4106 39.5123 15.9735 40.2833 15.9735C41.0542 15.9735 41.6257 15.4106 41.6257 14.6622C41.6324 13.9205 41.0542 13.351 40.2833 13.351ZM40.2833 15.5099C39.8114 15.5099 39.4592 15.1589 39.4592 14.6689C39.4592 14.1788 39.8048 13.8344 40.2833 13.8344C40.7551 13.8344 41.1073 14.192 41.1073 14.6689C41.1073 15.1457 40.7618 15.5099 40.2833 15.5099Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.012 14.4966C46.012 14.0794 45.786 13.8277 45.3806 13.8277C44.9752 13.8277 44.7027 14.1125 44.6762 14.5099V15.9867H44.1711V14.49C44.1711 14.0728 43.9451 13.8211 43.5397 13.8211C43.2141 13.8211 42.8618 14.033 42.8618 14.5032V15.9801H42.3568V13.3906H42.8618V13.6092L43.0014 13.5165C43.1875 13.3973 43.4068 13.3376 43.6328 13.3376C43.985 13.3376 44.2841 13.4635 44.4768 13.6953L44.5432 13.7747L44.6097 13.6953C44.7958 13.4635 45.1015 13.3376 45.4537 13.3376C46.0851 13.3376 46.5237 13.7549 46.5237 14.3509V15.9734H46.0186V14.4966H46.012Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5209 5.63556V6.22498C32.0092 5.76139 31.3446 5.51636 30.567 5.51636C28.786 5.51636 27.4501 6.91373 27.4501 8.76144C27.4501 10.6092 28.7926 12.0065 30.567 12.0065C31.3446 12.0065 32.0092 11.7615 32.5209 11.2913V11.8807H33.8368V5.63556H32.5209ZM30.6867 10.7482C29.5835 10.7482 28.7727 9.90053 28.7727 8.75482C28.7727 7.6091 29.5702 6.75479 30.6867 6.75479C31.8032 6.75479 32.5874 7.58924 32.5874 8.75482C32.5874 9.91378 31.7899 10.7482 30.6867 10.7482Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.831 6.75482C38.3959 6.75482 38.8811 6.96674 39.3264 7.38397L39.4327 7.48993L40.29 6.59588L40.2036 6.49654C39.6454 5.86076 38.8146 5.50977 37.8643 5.50977C35.9702 5.50977 34.6011 6.88065 34.6011 8.75485C34.6011 10.629 35.9702 11.9999 37.8643 11.9999C38.8013 11.9999 39.6387 11.6489 40.2036 11.0198L40.29 10.9271L39.4659 10.0131L39.3596 10.1191C38.9276 10.5363 38.3893 10.7615 37.8443 10.7615C36.7544 10.7615 35.9503 9.91381 35.9503 8.76809C35.9436 7.61576 36.7278 6.75482 37.831 6.75482Z"
        fill={color}
      />
      <path
        d="M8.62902 5.62897H7.33972V11.8807H8.62902V5.62897Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7034 6.57601C15.1686 5.89388 15.9528 5.50977 16.9164 5.50977C18.4849 5.50977 19.5415 6.52303 19.5283 8.03298V11.8741H18.219V8.37074C18.219 7.35085 17.6807 6.76806 16.7303 6.76806C15.78 6.76806 15.1154 7.43695 15.1154 8.3906V11.8741H13.7995V8.37074C13.7995 7.35085 13.2612 6.76806 12.3108 6.76806C11.3605 6.76806 10.6959 7.43695 10.6959 8.3906V11.8741H9.39331V5.6356H10.7092V6.17865C11.3073 5.60911 12.0782 5.51639 12.5169 5.51639C13.4606 5.50977 14.2514 5.9005 14.7034 6.57601Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.5623 5.50977C22.7847 5.50977 22.1135 5.7548 21.6018 6.20514V5.62897H20.2992V14.3245H21.6018V11.2516C22.1069 11.7152 22.7847 11.9536 23.5623 11.9536C25.3434 11.9536 26.6859 10.5628 26.6859 8.72836C26.6859 6.90052 25.3434 5.50977 23.5623 5.50977ZM23.4427 10.7284C22.3395 10.7284 21.5353 9.88732 21.5353 8.7416C21.5353 7.60251 22.3328 6.75482 23.4427 6.75482C24.5459 6.75482 25.3501 7.58927 25.3501 8.7416C25.3501 9.90056 24.5526 10.7284 23.4427 10.7284Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.603 10.7482C44.9752 10.7482 45.3872 10.6025 45.7328 10.3708L45.8524 10.2979L46.4904 11.3045L46.3841 11.384C45.8458 11.788 45.1878 11.9999 44.5166 11.9999C43.101 11.9999 42.3168 11.1588 42.3168 9.62902V6.85415H41.0408V5.62896H42.3168V3.75476H43.6327V5.62234H46.1249V6.8409H43.6327V9.60253C43.6327 10.3376 43.9783 10.7482 44.603 10.7482Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5209 5.63556V6.22498C32.0092 5.76139 31.3446 5.51636 30.567 5.51636C28.786 5.51636 27.4501 6.91373 27.4501 8.76144C27.4501 10.6092 28.7926 12.0065 30.567 12.0065C31.3446 12.0065 32.0092 11.7615 32.5209 11.2913V11.8807H33.8368V5.63556H32.5209ZM30.6867 10.7482C29.5835 10.7482 28.7727 9.90053 28.7727 8.75482C28.7727 7.6091 29.5702 6.75479 30.6867 6.75479C31.8032 6.75479 32.5874 7.58924 32.5874 8.75482C32.5874 9.91378 31.7899 10.7482 30.6867 10.7482Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.831 6.75482C38.3959 6.75482 38.8811 6.96674 39.3264 7.38397L39.4327 7.48993L40.29 6.59588L40.2036 6.49654C39.6454 5.86076 38.8146 5.50977 37.8643 5.50977C35.9702 5.50977 34.6011 6.88065 34.6011 8.75485C34.6011 10.629 35.9702 11.9999 37.8643 11.9999C38.8013 11.9999 39.6387 11.6489 40.2036 11.0198L40.29 10.9271L39.4659 10.0131L39.3596 10.1191C38.9276 10.5363 38.3893 10.7615 37.8443 10.7615C36.7544 10.7615 35.9503 9.91381 35.9503 8.76809C35.9436 7.61576 36.7278 6.75482 37.831 6.75482Z"
        fill={color}
      />
      <path
        d="M2.19582 7.11906C2.57463 7.11906 2.95345 7.20515 3.29239 7.36409C3.63797 7.52304 3.94368 7.75483 4.18958 8.0396C4.31585 7.7482 4.38896 7.43694 4.38896 7.12568C4.38896 6.84091 4.32914 6.55613 4.22281 6.29785C4.10983 6.03295 3.95033 5.79453 3.74431 5.59585C3.53828 5.39718 3.29903 5.23823 3.0332 5.12565C2.76736 5.01969 2.48159 4.96008 2.19582 4.96008C1.91005 4.96008 1.62428 5.01306 1.35844 5.12565C1.09261 5.23161 0.84671 5.39718 0.647334 5.59585C0.441312 5.79453 0.281812 6.03295 0.168832 6.29785C0.0558524 6.56276 0.00268555 6.84091 0.00268555 7.12568C0.00933141 7.44356 0.07579 7.75483 0.202061 8.0396C0.447958 7.7482 0.753668 7.52304 1.09261 7.36409C1.43819 7.19853 1.81701 7.11243 2.19582 7.11906Z"
        fill={color}
      />
      <path
        d="M4.38898 9.70848C4.38898 9.27801 4.26271 8.86078 4.01681 8.50316C3.77756 8.14554 3.43198 7.86739 3.03323 7.70182C2.63447 7.53626 2.1892 7.49652 1.76386 7.57599C1.33853 7.66209 0.946424 7.86739 0.640714 8.17203C0.335004 8.47667 0.122336 8.86078 0.0425859 9.28463C-0.0438103 9.70847 0.00271076 10.1389 0.168857 10.5363C0.335004 10.9337 0.61413 11.2714 0.979653 11.5098C1.33853 11.7482 1.76386 11.8741 2.20249 11.8741C2.78068 11.8674 3.33894 11.6423 3.75098 11.2317C4.16302 10.8211 4.38898 10.2846 4.38898 9.70848Z"
        fill={color}
      />
      <path
        d="M4.38898 2.17198C4.38898 1.74151 4.26271 1.32428 4.01681 0.96666C3.77756 0.609039 3.43862 0.330889 3.03323 0.165324C2.63447 -0.000241928 2.1892 -0.0399777 1.76386 0.0394938C1.33853 0.125588 0.946424 0.330889 0.640714 0.635529C0.335004 0.94017 0.122336 1.32428 0.0425859 1.74813C-0.0438103 2.17198 0.00271076 2.60245 0.168857 2.9998C0.335004 3.39716 0.61413 3.73491 0.979653 3.97333C1.33853 4.21174 1.76386 4.33757 2.20249 4.33757C2.78733 4.33757 3.34558 4.10578 3.75762 3.7018C4.15638 3.29782 4.38898 2.74152 4.38898 2.17198Z"
        fill={color}
      />
    </svg>
  );
}
