import * as React from 'react'
import styled, { CSSProp } from 'styled-components'

import * as Styles from './Styles'

type SwitchProps = OptionProps & StyleProps & React.ComponentProps<'div'>

interface OptionProps {
  checked: boolean
  color?: 'success' | 'critical'
  onSwitchChange?: () => void
}

interface StyleProps {
  css?: CSSProp
}

const SwitchBox = styled.div<Required<StyleProps>>`
  ${Styles.wrapper}
  ${(props) => props.css}
`

const SwitchButton = styled.label`
  ${Styles.base}
`

const SwitchBackground = styled.input<Required<{ color: string }>>`
  ${Styles.off}
  &:checked + ${SwitchButton} {
    ${(props) => Styles[props.color]}
    ${Styles.on}
  }
`

export const Switch = React.forwardRef<React.ElementRef<'div'>, SwitchProps>((props, forwardedRef) => {
  const { id, color = 'success', checked, onSwitchChange, css = {}, ...rest } = props

  return (
    <SwitchBox {...rest} ref={forwardedRef} css={css}>
      <SwitchBackground color={color} id={id} type='checkbox' checked={checked} onChange={onSwitchChange} />
      <SwitchButton htmlFor={id} />
    </SwitchBox>
  )
})
