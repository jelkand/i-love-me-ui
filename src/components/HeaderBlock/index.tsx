import React from 'react'
import { Box } from 'rebass'
import { ContentWrapper } from '../ContentWrapper'

interface HeaderProps {
  children?: React.ReactNode
}
export const Header = ({ children }: HeaderProps) => (
  <Box color="lightText" bg="primary" height={5}>
    <ContentWrapper>{children}</ContentWrapper>
  </Box>
)

//  fontFamily="Poppins"
