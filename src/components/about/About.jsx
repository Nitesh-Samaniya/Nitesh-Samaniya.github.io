import { Box, Image, SimpleGrid, Text, Button } from '@chakra-ui/react'
// import profile from "./Images/profile8.jpg"
import profile from "./Images/profile.JPG"
import resume from "../navbar/Resume/Nitesh_Samaniya_Resume.pdf"



import React from 'react'
//border={'1px solid red'}
function Home() {
  return (
    <>
    
    <Box name="About" w={"100%"} bg="#0c111b" color={'#fff'} mt={'70px'} pt={'70px'} pb={'100px'}>

    <SimpleGrid columns={[1,1,1,2]} w={['95%','90%','90%','90%']} m="auto">

      <Box>
        <Image
          ml={[1,10,10,10]}
          borderRadius={['180PX','200px','200px','200px']}
          boxSize={['330','400px','400px','400px']}
          src={profile}
          alt='Dan Abramov'
        />
      </Box>

      <Box mt={[1,10,10,10]}>
        <Text color={'red'} fontFamily={'monospace'} fontSize={['2xl','3xl','3xl','3xl']}>Hi, I'm Nitesh Samaniya</Text>
        <Text mb={'30px'} fontFamily={'monospace'} fontSize={['23px','4xl','4xl','4xl']}>FULL STACK WEB DEVELOPER</Text>
        <Text color={'gray'}>Full Stack Web Developer with high level of problem solving skills. 
              I have experience of 1200+ hours of coding and solved 100+ DSA questions. 
              Frontend Developer with high level of problem solving skills.
        </Text>
        <Box>
          <a href={resume} download><Button colorScheme='teal' size='md' mt={5}>Download Resume</Button></a>
        </Box>
      </Box>

      </SimpleGrid>

    </Box>
  </>
  )
}

export default Home