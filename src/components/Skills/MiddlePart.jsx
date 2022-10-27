import { Box, SimpleGrid, Text, Img } from '@chakra-ui/react'
import React from 'react'

import html from "./images/frontEnd/html.jpg";
import css from "./images/frontEnd/css.jpg";
import js from "./images/frontEnd/javascript.jpg";
import react from "./images/frontEnd/react.png";
import chakra from "./images/frontEnd/chakra.jpg";
import typeScript from "./images/frontEnd/typeScript.png";

import express from "./images/backEnd/express.png";
import mongodb from "./images/backEnd/mongodb.png";
import nodejs from "./images/backEnd/nodejs.jpg";
import redux from "./images/backEnd/redux.jpg";


const frontEnd = [
    {
        img: html,
        title: "HTML",
    },
    {
        img: css,
        title: "CSS",
    },
    {
        img: js,
        title: "JAVASCRIPT",
    },
    {
        img: react,
        title: "REACT JS",
    },
    {
        img: chakra,
        title: "CHAKRA UI",
    },
    {
        img: typeScript,
        title: "TYPE SCRIPT",
    }
]

const backEnd = [
    {
        img: mongodb,
        title: 'MONGO DB'
    },
    {
        img: express,
        title: 'EXPRESS'
    },
    {
        img: nodejs,
        title: 'NODE JS'
    },
    {
        img: redux,
        title: 'REDUX'
    },
]


function MiddlePart() {
  return (
    <Box w={'90%'} m={'auto'} mt={'50px'}>
        <SimpleGrid columns={[1,1,2]} gap={'80px'}>
            <Box>
                <Text mb={5} fontSize={['2xl','4xl']} textAlign={'center'} fontFamily={'cursive'}>FRONTEND SKILLS</Text>
                <SimpleGrid columns={[2,2,2,3]}>
                    {
                        frontEnd.map((el)=>(
                            <Box ml={5} mt={5} mb={'80px'}>
                                <Img src={el.img} w={'100px'} borderRadius={'50%'} alt="tech-icon"/>
                                <Text mt={3} ml={4} fontFamily={'fantasy'} fontSize={'xl'}>{el.title}</Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>

            <Box>
                <Text mb={5} fontSize={['2xl','4xl']} textAlign={'center'} fontFamily={'cursive'}>BACKEND SKILLS</Text>
                <SimpleGrid columns={[2,2,2,3]}>
                    {
                        backEnd.map((el)=>(
                            <Box ml={5} mt={5} mb={'80px'}>
                                <Img src={el.img} w={'100px'} borderRadius={'50%'} alt="tech-icon"/>
                                <Text mt={3} ml={4} fontFamily={'fantasy'} fontSize={'xl'}>{el.title}</Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default MiddlePart