import * as React from 'react'
import styled, { CSSProp } from 'styled-components'
import * as Styles from './Styles'
import { IconKey, Icon } from '../Icon'

type BadgeProps = OptionProps & StyleProps & React.ComponentProps<'div'>

interface OptionProps {
  icon?: IconKey
}

interface StyleProps {
  status: 'info' | 'success' | 'active' | 'critical' | 'warning'
  css?: CSSProp
}

const BadgeStyled = styled.div<StyleProps>`
  ${Styles.base}
  ${(props) => Styles[props.status]}
  ${(props) => props.css}
`

export const Badge = React.forwardRef<React.ElementRef<'div'>, BadgeProps>((props, forwardedRef) => {
  const { status, icon, children, css = {}, ...rest } = props

  return (
    <BadgeStyled {...rest} status={status} ref={forwardedRef} css={css}>
      {icon && <Icon icon={icon} color='inherit' size='var(--sq-icon-size-badge)' style={{ marginRight: 5 }} />}
      {children}
    </BadgeStyled>
  )
})
