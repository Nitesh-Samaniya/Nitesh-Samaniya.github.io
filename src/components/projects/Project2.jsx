import { Box, Flex, Image, SimpleGrid, Text, Button, Link } from '@chakra-ui/react'
import React from 'react'
import img1 from "./internTheory/1_home.png";
import img2 from "./internTheory/2_course.png";
import img3 from "./internTheory/3_job.png";
import img4 from "./internTheory/4_login.png";
import img5 from "./internTheory/5_contact.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [img1,img2,img3,img4,img5];

function Project2() {
  return (
    <Box data-aos="zoom-in-up">
        <SimpleGrid boxShadow='inner' p='6' rounded='md' bg='white' columns={[1,1,1,2]} w="100%"  gap={10}>

            <Box>
                <Carousel autoPlay infiniteLoop>
                    {slides.map((slide) => {
                        return <Image src={slide} height="auto" width="800px" />;
                    })}
                </Carousel>
                <Text textAlign={'center'} mt={'-20px'} fontSize={'20px'} fontWeight={'medium'}>Inter Theory Website Clone</Text>
            </Box>

            <Box>
                <Text fontSize={'25px'} fontFamily={'cursive'} fontWeight={'semibold'}>About Project</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>Intern Theory provides Online Courses to find internships for
                    students in different cities in India with top brands.
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={'cursive'} fontWeight={'semibold'}>Tech-Stack</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>
                    HTML | CSS | JAVASCRIPT
                </Text>

                <Text mt={3} fontSize={'24px'} fontFamily={'cursive'} fontWeight={'semibold'}>Role</Text>
                <Text fontStyle={'oblique'} fontSize={'17px'} color={'gray'}>A collaborative project built by a team of 6, executed in 5 days.
                    I built Login/Signup functionaity and Contact page. 
                </Text>

                <Flex mt={3} gap={8}>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://github.com/PankajkandpalL/Project_Intern_theory' isExternal>Source Code</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://imaginative-lebkuchen-c86683.netlify.app/' isExternal>Live</Link>
                    </Button>
                    <Button colorScheme='teal' variant={'outline'} size='sm'>
                        <Link href='https://drive.google.com/file/d/1ak0gAfR46aSH_XDebx-aLJ4-iNgquv3K/view?usp=sharing' isExternal>Video Presentation</Link>
                    </Button>
                </Flex>

            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default Project2