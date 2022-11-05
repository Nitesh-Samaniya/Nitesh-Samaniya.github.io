import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./sportsJam/home.png";
import img2 from "./sportsJam/home2.png";
import img3 from "./sportsJam/products.png";
import img4 from "./sportsJam/cart.png";
import img5 from "./sportsJam/billing.png";
import img6 from "./sportsJam/payment.png";



import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import {FaGithub,FaLink} from "react-icons/fa"

const slides = [img1,img2,img3,img4,img5,img6];

function Project4() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid mt={10} mb={10} boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>
            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide) => {
                        return <Image src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>SportsJam Clone</Text>
            </Box>
            <Box>
                <Text fontSize={'25px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>SportsJam is India's leading Online Sports & Fitness
                    application that provides sports equipment.
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    HTML | CSS | JavaScript 
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={['heading','cursive']} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>A collaborative project built by a team of 6, 
                    executed in 5 days. I built Cart page.
                </Text>

                <Flex mt={3} gap={[3,8]}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/sachin59/teamproject1-sportsjam' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://imaginative-centaur-1ce704.netlify.app/' isExternal>Live</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/1_SWbIPfU0rJ6PIqu1VdDxnoTDTD92YPx/view?usp=sharing' isExternal>Video Presentation</Link>
                    </Button>
                </Flex>
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project4