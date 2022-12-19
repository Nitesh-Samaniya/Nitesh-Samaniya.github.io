import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import mongo from "./images/techStack/mongodb.png"
import express from "./images/techStack/express.png"
import react from "./images/techStack/react.png"
import node from "./images/techStack/nodejs.png"
import dsa from "./images/techStack/dsa.jpg"

import { motion } from "framer-motion"

import Aos from 'aos';
import 'aos/dist/aos.css'

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

    useEffect(() => {
        Aos.init();
    }, [])

    const transition = {
        duration: 1,
        type: "spring",
    };

  return (
    <Box w={'80%'} m={'auto'} pt={'80px'}>
        <Text fontSize={['5xl','6xl']} textAlign={'center'} fontFamily={['heading','cursive']}>TECH-STACK</Text>
        
        <Box>
        
                <SimpleGrid columns={[2,2,3,5]} gap={6}>
                    {
                        tech.map((el,i)=> (
                            <Box ml={5} mt={5} mb={'80px'} key={i}>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={transition}
                                >
                                    <Img src={el.img} w={'110px'} borderRadius={'50%'} alt="tech-icon"/>
                                    <Text mt={3} ml={4} fontFamily={'fantasy'} fontSize={['17px','xl']}>{el.title}</Text>
                                </motion.div>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            
        </Box>
    </Box>
  )
}

export default TechStack