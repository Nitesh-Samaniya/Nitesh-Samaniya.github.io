import React from 'react'
import { Box, Button,Show, Hide,
   } from '@chakra-ui/react'
import Drawerr from './Drawer'
//w={["10%",'80%']}

function Navbar() {
  return (
    <>
        <Box w='100%'bg={"#010026"} color={'#fff'} position={'fixed'} top={0} zIndex={5}>
            <Box w={'90%'} m='auto' p={'3'} display="flex" alignItems="center" justifyContent="space-between">
                <Box fontSize='30px' fontFamily={'cursive'}>Nitesh Samaniya</Box>
                <Hide below='md'>
                    <Box display="flex" alignItems="center" gap={8} fontSize='17px'>
                        {/* <Box>Home</Box> */}
                        <Box>About Me</Box>
                        <Box>Skills</Box>
                        <Box>Projects</Box>
                        <Box>Contact</Box>
                        <Box><Button colorScheme='teal' size='xs'>Resume</Button></Box>
                    </Box>
                </Hide>
                <Show  below='md'>
                  <Drawerr/>
                </Show>
            </Box>            
        </Box>
    </>
  )
}

export default Navbar