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
          <Text fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}>Skills</Text>
          <Text fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}>About Me</Text>
          <Text fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}>Projects</Text>
          <Text fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}>Contact</Text>
          <Text fontSize={'2xl'} fontFamily={'cursive'} borderBottom={'1px solid gray'} mb={3}>About Me</Text>
        </DrawerBody>

        <DrawerFooter h={'60px'}>
          {/* <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button> */}
          <Button colorScheme='teal'>Resume</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Drawerr
