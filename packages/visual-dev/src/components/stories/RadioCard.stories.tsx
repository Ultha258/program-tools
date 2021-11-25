import React, { useState } from "react"
import { RadioCard, RadioCardGroup } from "../RadioCard"

export default {
  title: "Components / RadioCard",
  component: RadioCard,
}

export const Functional = () => {
  const options = {
    title: "A title for this option",
    text: "This is a default radio group button. Toggle it by clicking. This is a test with very long text.",
  }
  const [value, setValue] = useState(0)
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={value == 1} onChange={void 0} onClick={() => setValue(1)} />
      <RadioCard options={{title: "Test", text:"Test string."}} value={value == 2} onChange={void 0} onClick={() => setValue(2)} />
      <RadioCard options={options} value={value == 3} onChange={void 0} onClick={() => setValue(3)} />
    </RadioCardGroup>
  )
}

export const radioCard = () => {
  const options = {
    title: "A title for this option",
    text: "This is a default radio group button. It is unselected.",
  }
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={false} onChange={void 0} />
    </RadioCardGroup>
  )
}

export const radioCardChecked = () => {
  const options = {
    title: "A title for this option",
    text: "This is a selected radio group button.",
  }
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={true} onChange={void 0} />
    </RadioCardGroup>
  )
}

export const radioCardIcon = () => {
  const options = {
    title: "A title for this option",
    text: "This is a selected radio group button.",
  }
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={false} onChange={void 0} icon="alert" />
    </RadioCardGroup>
  )
}

export const radioCardNoTitle = () => {
  const options = {
    text: "This is a selected radio group button.",
  }
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={false} onChange={void 0} />
    </RadioCardGroup>
  )
}

export const radioCardNoText = () => {
  const options = {
    title: "A title for this option",
  }
  return (
    <RadioCardGroup>
      <RadioCard options={options} value={false} onChange={void 0} />
    </RadioCardGroup>
  )
}
