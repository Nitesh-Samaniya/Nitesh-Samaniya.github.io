import React from 'react'
import { Box, Button,Show, Hide,
   } from '@chakra-ui/react'
import Drawerr from './Drawer'
import { Link } from "react-scroll"
import resume from "./Resume/Nitesh_Samaniya_Resume.pdf"
//w={["10%",'80%']}

function Navbar() {
  return (
    <>
        <Box w='100%'bg={"#010026"} color={'#fff'} position={'fixed'} top={0} zIndex={5}>
            <Box w={'90%'} m='auto' p={'3'} display="flex" alignItems="center" justifyContent="space-between">
                <Box fontSize={['27px','30px','30px','30px']} fontFamily={['heading','cursive','cursive','cursive']} cursor={'pointer'}><Link to='About' spy={true} smooth={true}>Nitesh Samaniya</Link></Box>
                <Hide below='md'>
                    <Box display="flex" alignItems="center" gap={8} fontSize='17px'>
                        {/* <Box>Home</Box> */}
                        <Box cursor={'pointer'}><Link to='About' spy={true} smooth={true}>About Me</Link></Box>
                        <Box cursor={'pointer'}><Link to='Skill' spy={true} smooth={true}>Skills</Link></Box>
                        <Box cursor={'pointer'}><Link to='Project' spy={true} smooth={true}>Projects</Link></Box>
                        <Box cursor={'pointer'}><Link to='Contact' spy={true} smooth={true}>Contact</Link></Box>
                        <Box><a href={resume} download><Button colorScheme='teal' size='xs'>Resume</Button></a></Box>
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