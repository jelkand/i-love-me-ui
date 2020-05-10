import React from 'react'
import { Box } from 'rebass'

interface ContentWrapperProps {
  children?: React.ReactNode
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => (
  <Box width={[7, 8, 8]} mx="auto" my="0">
    {children}
  </Box>
)
