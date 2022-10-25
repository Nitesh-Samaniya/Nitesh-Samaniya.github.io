import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import mongo from "./images/techStack/mongodb.png"
import express from "./images/techStack/express.png"
import react from "./images/techStack/react.png"
import node from "./images/techStack/nodejs.png"
import dsa from "./images/techStack/dsa.jpg"

const tech = [
    {
        img: mongo,
        title: "MONGO DB",
    },
    {
        img: express,
        title: "EXPRESS",
    },
    {
        img: react,
        title: "REACT",
    },
    {
        img: node,
        title: "NODE JS",
    },
    {
        img: dsa,
        title: "DSA",
    },
]


function TechStack() {
  return (
    <Box w={'80%'} m={'auto'} pt={'80px'}>
        <Text fontSize={['5xl','6xl']} textAlign={'center'} fontFamily={'cursive'}>TECH-STACK</Text>
        
        <Box>
            <SimpleGrid columns={[2,2,3,5]} gap={6}>
                {
                    tech.map((el)=> (
                        <Box ml={5} mt={5} mb={'80px'}>
                            <Img src={el.img} w={'110px'} borderRadius={'50%'} alt="tech-icon"/>
                            <Text mt={3} ml={4} fontFamily={'fantasy'} fontSize={'xl'}>{el.title}</Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default TechStack