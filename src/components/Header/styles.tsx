import styled from 'styled-components'
import { color, ColorProps, fontFamily, FontFamilyProps } from 'styled-system'

export const HeaderWrapper = styled.div<ColorProps & FontFamilyProps>`
  ${color}
  ${fontFamily}
`
