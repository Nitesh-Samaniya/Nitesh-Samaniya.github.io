import { useDisclosure ,DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    Drawer
} from '@chakra-ui/react'
import React from 'react'
import resume from "./Resume/Nitesh_Samaniya_Resume.pdf"
import { Link } from "react-scroll"



const Drawerr = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    
  return (
    <>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      Open
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent height="90% !important">
        <DrawerCloseButton mt={2} color={'#fff'}/>
        <DrawerHeader bg={'#010026'} color={'#fff'}>MERN STACK DEVELOPER</DrawerHeader>

        <DrawerBody bg="#0c111b" color={'#fff'}>
          <Text cursor={'pointer'} fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}><Link to='About' spy={true} smooth={true}>About Me</Link></Text>
          <Text cursor={'pointer'} fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}><Link to='Skill' spy={true} smooth={true}>Skills</Link></Text>
          <Text cursor={'pointer'} fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}><Link to='Project' spy={true} smooth={true}>Projects</Link></Text>
          <Text cursor={'pointer'} fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}><Link to='Contact' spy={true} smooth={true}>Contact</Link></Text>
        </DrawerBody>

        <DrawerFooter h={'60px'}>
          {/* <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button> */}
          <a href={resume} download><Button colorScheme='teal'>Resume</Button></a>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Drawerr
