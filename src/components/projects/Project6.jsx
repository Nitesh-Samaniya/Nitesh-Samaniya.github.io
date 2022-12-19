import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./glamour/home.png";
import img2 from "./glamour/category.png";
import img3 from "./glamour/product.png";
import img4 from "./glamour/cart.png";
import img5 from "./glamour/category.png";
import img6 from "./glamour/checkout.png";
import img7 from "./glamour/payment.png";
import img8 from "./glamour/addProduct.png";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import {FaGithub,FaLink} from "react-icons/fa"

const slides = [img1,img2,img3,img4,img5,img6, img7, img8];

function Project6() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid mt={10} mb={10} boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>
            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide, i) => {
                        return <Image key={i} src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>MyGlamn Clone</Text>
            </Box>
            <Box>
                <Text fontSize={'25px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    Glamour is an Indian e-commerce company that sells cosmetics and personal care products.
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    REACT | REACT-ROUTER-DOM | CHAKRA UI | REDUX | JSON-SERVER
                </Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'} mt={1}>
                    MONGO DB | Node JS | EXPRESS
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>A collaborative project built by a team of 5, 
                    executed in 6 days. I built full backend and add product page for seller.
                </Text>

                <Flex mt={3} gap={[3,8]}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/Shridhar1998/Glamour' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://glamour-ashy.vercel.app/' isExternal>Live</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/1w4-yzGhrdenoP8VAc9yWG7c7IyGWQeEb/view' isExternal>Video Presentation</Link>
                    </Button>
                </Flex>
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project6