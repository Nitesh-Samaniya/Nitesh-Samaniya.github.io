import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const detail = [
    {hour: '1200+', title: "Hours of Coding"},
    {hour: '100+', title: "GitHub Commits"},
    {hour: '5+', title: "Projects Done"},
    {hour: '110+', title: "Hours of Soft Skill"},
]

function Hours() {
  return (
    <Box w={'100%'} bg="#0c111b" p={10}>
        <SimpleGrid columns={[1,2,2,4]} gap={6} w={['70%','85%']} m='auto'>
            {
                detail.map((el,i)=>(
                    <Box key={i} bg={'white'} borderRadius={'30%'} textAlign={'center'} p={5}>
                        <Text ml={2} color={'red'} fontSize={'4xl'}>{el.hour}</Text>
                        <Text color={'teal'} fontFamily={'cursive'} fontSize={'23px'}>{el.title}</Text>
                    </Box>
                ))
            }
        </SimpleGrid>
    </Box>
  )
}

export default Hours