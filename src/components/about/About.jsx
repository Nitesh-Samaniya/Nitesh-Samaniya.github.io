import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import profile from "./Images/profile8.jpg"

import React from 'react'
//border={'1px solid red'}
function Home() {
  return (
    <>
    
    <Box name="About" w={"100%"} bg="#0c111b" color={'#fff'} mt={'70px'} pt={'70px'} pb={'100px'}>

    <SimpleGrid columns={[1,1,1,2]} w={['95%','90%','90%','80%',]} m="auto">

      <Box>
        <Image
          ml={[1,10,10,10]}
          borderRadius='full'
          boxSize='350px'
          src={profile}
          alt='Dan Abramov'
        />
      </Box>

      <Box mt={[1,10,10,10]}>
        <Text color={'red'} fontFamily={'monospace'} fontSize={['2xl','3xl','3xl','3xl']}>Hi, I'm Nitesh Samaniya</Text>
        <Text mb={'30px'} fontFamily={'monospace'} fontSize={['3xl','4xl','4xl','4xl']}>FULL STACK WEB DEVELOPER</Text>
        <Text color={'gray'}>Frontend Developer with high level of problem solving skills. 
              I have experience of 1200+ hours of coding and solved 100+ DSA questions. 
              Frontend Developer with high level of problem solving skills.
        </Text>
      </Box>

      </SimpleGrid>

    </Box>
  </>
  )
}

export default Home