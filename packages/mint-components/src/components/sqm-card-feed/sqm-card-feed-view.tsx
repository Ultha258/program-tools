import { h, VNode } from "@stencil/core";
import "@appnest/masonry-layout";
import jss from "jss";
import preset from "jss-preset-default";

export interface CardFeedViewProps {
  width: number;
  gap: number;
}
export function CardFeedView(props: CardFeedViewProps, children: VNode) {
  const style = {
    Container: {
      columnGap: props.gap + "px",
      columnWidth: props.width + "px",
      "& > div": {
        //   display: "inline-block!important",
        marginBottom: "24px",
      },
    },
  };

  jss.setup(preset());
  const sheet = jss.createStyleSheet(style);
  const styleString = sheet.toString();

  console.log(props);

  const vanillaStyle = `
	::slotted(*){
		// display: block!important;
		margin-bottom: ${props.gap}px;
	}
  `;

  return (
    <div>
      <style type="text/css">
        {styleString}
        {/* {vanillaStyle} */}
      </style>
      {/* <masonry-layout gap={props.gap}>
        {children}
      </masonry-layout> */}
      <div class={sheet.classes.Container}>{children}</div>
    </div>
  );
}
