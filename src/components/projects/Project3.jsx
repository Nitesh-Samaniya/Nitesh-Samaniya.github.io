import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./nykaa/1_home.png";
import img2 from "./nykaa/2_product.png";
import img3 from "./nykaa/3_product_detail.png";
import img4 from "./nykaa/4_cart.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import {FaGithub,FaLink} from "react-icons/fa"

const slides = [img1,img2,img3,img4];

function Project3() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid mb={10} boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>
            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide) => {
                        return <Image src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>Nykaa Website Clone</Text>
            </Box>
            <Box>
                <Text fontSize={'25px'} fontFamily={'cursive'} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>Nykaa is an Indian e-commerce company. It sells beauty, wellness and fashion products
                    across websites, mobile apps and 100+ offline stores.
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={'cursive'} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    REACT | REACT-ROUTER-DOM | CHAKRA UI | REACT-ICON | JSON-SERVER
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={'cursive'} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>It was an individual project , whole website was built by me.</Text>

                <Flex mt={3} gap={8}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/Nitesh-Samaniya/orange-holiday-5937' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://nykaa-project-silk.vercel.app' isExternal>Live</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/1e1vquGV-Ja-AbceNaMH_mB5-tn7NJqLU/view?usp=sharing' isExternal>Video Presentation</Link>
                    </Button>
                </Flex>
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project3