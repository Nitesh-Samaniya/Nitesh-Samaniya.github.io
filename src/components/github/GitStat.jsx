import { Box, SimpleGrid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function GitStat() {
  return (
    <Box bg="#0c111b" color={'#fff'} pt={'30px'} pb={'50px'}>
    <Text mb={'40px'} fontSize={['5xl','6xl']} textAlign={'center'} fontFamily={'cursive'}>GITHUB STATS</Text>
    <Box  width={['95%','80%','65%']} m='auto' mb={'50px'} mt={'80px'}>
    <GitHubCalendar username="Nitesh-Samaniya"  />
    </Box>
    {/* <Flex width={"90%"} >
        
         
         
    </Flex> */}
    <SimpleGrid columns={[1,2,2,3]} w='90%' m={'auto'} gap={5} mb={'90px'}>
   
    <Box>
    <Image src="https://github-readme-stats.vercel.app/api?username=Nitesh-Samaniya&include_all_commits=false&count_private=true" ></Image>
    </Box> 
    <Box>
    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Nitesh-Samaniya" ></Image>
    </Box>
    <Box>
    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nitesh-Samaniya&include_all_commits=false&count_private=true&layout=compact" ></Image>
    </Box>
    </SimpleGrid>
    </Box>
  )
}

export default GitStat