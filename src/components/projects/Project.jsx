import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './project4'
import Project5 from './project5'

function Project() {
  return (
    <Box name="Project" w={"100%"} bg="#0c111b" mt={'70px'} pt={'70px'} pb={'100px'}>
        <Text color={'white'} mb={10} fontSize={['5xl','6xl']} textAlign={'center'} fontFamily={['heading','cursive']}>PROJECTS</Text>
        <Box w={'95%'} m={'auto'}> 
            <Project5 />
            <Project3 />
            <Project1 />
            <Project2 />
            <Project4 />
        </Box>
    </Box>
  )
}

export default Project