import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./blossom/blossom_home.png";
import img2 from "./blossom/blossom_home2.png";
import img3 from "./blossom/blossom_divHover.png";
import img4 from "./blossom/blossom_static.png";
import img5 from "./blossom/blossom_product_page.png";
import img6 from "./blossom/blossom_loading.png";
import img7 from "./blossom/blossom_specific.png";
import img8 from "./blossom/blossom_checkout.png";
import img9 from "./blossom/blossom_orderPlaced.png";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [img1,img2,img3,img4, img6, img5, img7, img8, img9];

function Project5() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid mb={10} boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>

            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide, i) => {
                        return <Image key={i} src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>SkinStore Website Clone</Text>
            </Box>

            <Box>
                <Text fontSize={'25px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    Blossom is a clone of SkinStore which is an e-commerce
                    website that caters to clinical skincare and luxury spa
                    products.
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    REACT | REACT-ROUTER-DOM | CHAKRA UI | REACT-ICON | JSON-SERVER
                </Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'} mt={1}>
                    MONGO DB | Node JS | EXPRESS
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                A collaborative project built by a team of 4, 
                    executed in 5 days. I built full backend.
                </Text>

                <Flex mt={3} gap={[3,8]}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/NandlalShah955/Skin-Store-Clone' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://blossom-two.vercel.app/' isExternal>Live</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/128jVVwKv2TntuZ8ulj2n_6N74kg6HkAO/view?usp=sharing' isExternal>Video Presentation</Link>
                    </Button>
                </Flex>

            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project5