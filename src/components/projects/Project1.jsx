import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./hindustanTimes/1_home.png";
import img2 from "./hindustanTimes/2_headlines.png";
import img3 from "./hindustanTimes/3_newsRead.png";
import img4 from "./hindustanTimes/4_footer.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [img1,img2,img3,img4];

function Project1() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid mb={10} boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>

            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide, i) => {
                        return <Image key={i} src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>Hindustan Times Website Clone</Text>
            </Box>

            <Box>
                <Text fontSize={'25px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    The comprehensive news portal covers all the latest developments on a real-time basis in the 
                    fields of politics, sports, business, lifestyle, entertainment and even local city issues, 
                    offering you a complete perspective of your world
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    REACT | REACT-ROUTER-DOM | CHAKRA UI | REACT-ICON | JSON-SERVER
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    It was an individual project, executed in 5 days.
                </Text>

                <Flex mt={3} gap={8}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/Nitesh-Samaniya/gusty-train-2478' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://hindustantimes.vercel.app/' isExternal>Live</Link>
                    </Button>
                    {/* <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/1mb3JEDWppC-UEcvFv5hy2Qx5rxx8ajz5/view?usp=sharing' isExternal>Video Presentation</Link>
                    </Button> */}
                </Flex>

            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project1