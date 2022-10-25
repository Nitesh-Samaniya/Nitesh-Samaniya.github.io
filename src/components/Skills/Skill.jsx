import { Box } from '@chakra-ui/react'
import React from 'react'
import MiddlePart from './MiddlePart'
import TechStack from './TechStack'
import Tools from './Tools'

function Skill() {
  return (
    <Box>
        <TechStack />
        <MiddlePart />
        <Tools />
    </Box>
  )
}

export default Skill