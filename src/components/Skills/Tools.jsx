import { Box, Text, Img, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'

import git from "./images/tools/git.jpg";
import github from "./images/tools/github.png";
import heroku from "./images/tools/heroku.png";
import netlify from "./images/tools/netlify.png";
import vercel from "./images/tools/vercel.jpg";
import npm from "./images/tools/npm.png";
import json from "./images/tools/json.png";
import postman from "./images/tools/postman.jpg";

import Aos from 'aos';
import 'aos/dist/aos.css'

const tools = [
    {
        img: git,
        title: "GIT"
    },
    {
        img: github,
        title: "GITHUB"
    },
    {
        img: heroku,
        title: "HEROKU"
    },
    {
        img: netlify,
        title: "NETLIFY"
    },
    {
        img: vercel,
        title: "VERCEL"
    },
    {
        img: npm,
        title: "NPM"
    },
    {
        img: json,
        title: "JSON-SERVER"
    },
    {
        img: postman,
        title: "POSTMAN"
    },
]

function Tools() {

    useEffect(() => {
        Aos.init();
      }, [])

  return (
    <Box w={['85%','75%']} m='auto'>
        <Text mb={'40px'} fontSize={'4xl'} textAlign={'center'} fontFamily={['heading','cursive']}>TOOLS</Text>
        {/* <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"> */}

            <SimpleGrid columns={[2,2,3,4]} gap={10}>
                {
                    tools.map((el, i)=> (
                        <div data-aos="zoom-in-up" key={i}>
                            <Box ml={5} mt={5} mb={'40px'}>
                                <Img src={el.img} w={'110px'} borderRadius={'50%'} alt="tech-icon"/>
                                <Text mt={3} ml={6} fontFamily={'fantasy'} fontSize={['18px','xl']}>{el.title}</Text>
                            </Box>
                        </div>
                    ))
                }
            </SimpleGrid>

        {/* </div> */}
    </Box>
  )
}

export default Tools;