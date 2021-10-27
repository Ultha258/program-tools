import React, { useState } from "react"
import { Tooltip } from "../Tooltip"
import { PrimaryButton, SecondaryButton } from "../Button"
import styled from "styled-components"
import { Input } from "../Input"

export default {
  title: "Components / Tooltip",
  component: Tooltip,
}

const StoryFrame = styled.div`
  width: 900px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonFrame = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 30px;
  width: 30%;
`

export const Functional = () => {
  let timeout: ReturnType<typeof setTimeout>
  const [delay, setDelay] = useState(150)
  const [enabled, setEnable] = useState(false)

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setEnable(true)
    }, delay)
  }

  const hideTooltip = () => {
    clearInterval(timeout)
    setEnable(false)
  }

  const [direction, setDirection] = useState("top")

  return (
    <StoryFrame>
      <Tooltip onMouseEnter={showTooltip} onMouseLeave={hideTooltip} showTooltip={enabled} direction={direction} text="A tooltip that explains something in detail">
        <PrimaryButton> Hover </PrimaryButton>
      </Tooltip>
      <div style={{ position: "absolute", left: "90%", bottom: "50%" }}>
        <span style={{ fontFamily: "Helvetica" }}>Delay:</span>
        <Input value={delay} type="number" onChange={(e) => setDelay(Number(e.target.value))} min="0" max="5000" css="width: 75px;" />
      </div>
      <ButtonFrame>
        <SecondaryButton onClick={() => setDirection("top")}>Top</SecondaryButton>
        <SecondaryButton onClick={() => setDirection("left")}>Left</SecondaryButton>
        <SecondaryButton onClick={() => setDirection("bottom")}>Bottom</SecondaryButton>
        <SecondaryButton onClick={() => setDirection("right")}>Right</SecondaryButton>
      </ButtonFrame>
    </StoryFrame>
  )
}

export const Top = () => (
  <div style={{ padding: "70px 0px 0px 100px" }}>
    <Tooltip showTooltip={true} direction="top" text="A tooltip that explains something in detail" />
  </div>
)

export const Left = () => (
  <div style={{ padding: "25px 0px 40px 195px" }}>
    <Tooltip showTooltip={true} direction="left" text="A tooltip that explains something in detail" />
  </div>
)

export const Bottom = () => (
  <div style={{ padding: "0px 0px 100px 100px" }}>
    <Tooltip showTooltip={true} direction="bottom" text="A tooltip that explains something in detail" />
  </div>
)

export const Right = () => (
  <div style={{ padding: "25px 0px 40px 8px" }}>
    <Tooltip showTooltip={true} direction="right" text="A tooltip that explains something in detail" />
  </div>
)
