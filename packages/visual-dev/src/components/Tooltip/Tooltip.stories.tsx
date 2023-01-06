import React, { useState } from "react";
import { directions, TooltipView } from ".";
import { Button } from "../Button";
import styled from "styled-components";
import { InputView } from "../Input";

export default {
  title: "Components / Tooltip",
  component: TooltipView,
};

const StoryFrame = styled.div`
  width: 900px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonFrame = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 30px;
  width: 30%;
`;

export const Functional = () => {
  let timeout: ReturnType<typeof setTimeout>;
  const [delay, setDelay] = useState(150);
  const [enabled, setEnable] = useState(false);

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setEnable(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setEnable(false);
  };

  const [direction, setDirection] = useState("top");

  return (
    <StoryFrame>
      <TooltipView
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        showTooltip={enabled}
        direction={direction as directions}
        text="A tooltip that explains something in detail"
      >
        <Button buttonType="primary"> Hover </Button>
      </TooltipView>
      <div style={{ position: "absolute", left: "90%", bottom: "50%" }}>
        <span style={{ fontFamily: "Helvetica" }}>Delay:</span>
        <InputView
          value={delay}
          type="number"
          onChange={(e: { target: { value: string } }) =>
            setDelay(Number(e.target.value))
          }
          min="0"
          max="5000"
          customContainerCSS="width: 75px;"
        />
      </div>
      <ButtonFrame>
        <Button buttonType="secondary" onClick={() => setDirection("top")}>
          Top
        </Button>
        <Button buttonType="secondary" onClick={() => setDirection("left")}>
          Left
        </Button>
        <Button buttonType="secondary" onClick={() => setDirection("bottom")}>
          Bottom
        </Button>
        <Button buttonType="secondary" onClick={() => setDirection("right")}>
          Right
        </Button>
      </ButtonFrame>
    </StoryFrame>
  );
};

export const Top = () => (
  <div style={{ padding: "70px 0px 0px 100px" }}>
    <TooltipView
      showTooltip={true}
      direction="top"
      text="A tooltip that explains something in detail"
    />
  </div>
);

export const Left = () => (
  <div style={{ padding: "25px 0px 40px 195px" }}>
    <TooltipView
      showTooltip={true}
      direction="left"
      text="A tooltip that explains something in detail"
    />
  </div>
);

export const Bottom = () => (
  <div style={{ padding: "0px 0px 100px 100px" }}>
    <TooltipView
      showTooltip={true}
      direction="bottom"
      text="A tooltip that explains something in detail"
    />
  </div>
);

export const Right = () => (
  <div style={{ padding: "25px 0px 40px 8px" }}>
    <TooltipView
      showTooltip={true}
      direction="right"
      text="A tooltip that explains something in detail"
    />
  </div>
);

export const LongTooltip = () => (
  <div style={{ padding: "25px 0px 40px 8px" }}>
    <TooltipView
      showTooltip={true}
      direction="right"
      maxWidth="400px"
      text="A tooltip that explains something in detail. This is a longer tooltip."
    />
  </div>
);

export const CustomCSS = () => (
  <div style={{ padding: "25px 0px 40px 8px" }}>
    <TooltipView
      showTooltip={true}
      direction="right"
      customCSS="font-size: 20px"
      text="A tooltip that explains something in detail. This is a longer tooltip."
    />
  </div>
);
