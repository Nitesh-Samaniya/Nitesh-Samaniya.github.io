import { Box, Button, Flex, Img, Input, Link, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import image from "./images/image.gif";
import { AiOutlineMail, AiOutlineMobile, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser"


function Contact() {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
      });
      const [status, setStatus] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_evyk4yl', 'template_djoyrrr', values, 'iqSdaUQUf8C_W1--5')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              fullName: '',
              email: '',
             
              message: ''
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      }
     
      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
    
      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }

      const renderAlert = () => (
        <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
          <p>Your message send successfully</p>
        </div>
      )

  return (
    <>
    <Box w='90%' p='50px'>
        <Text fontSize={['5xl','6xl']} textAlign={'center'} fontFamily={'cursive'}>Contacts</Text>
        <SimpleGrid columns={[1,1,1,2]} gap={'80px'}>
            <Box>
                <Img src={image} alt='image'/>
            </Box>

          <Box mt={'80px'}>
                

        <Box  width="80%" m="auto" >
            {status && renderAlert()}
              <form  onSubmit={handleSubmit} > 
                          <Text fontSize={"xl"} fontWeight="600">Let's Colaborate</Text>
                <br/>
          <Input value={values.fullName} required={"required"}   onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name"/>
          <br/>
          <br/>
             <Input value={values.email} required={"required"}   onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="abc@email.com"/>
            <br/>
            <br/>
          <Textarea value={values.message}  required={"required"}  onChange={handleChange} label="Your message here" name="message" placeholder="Your message please"/>
            <br/>
            <br/>
          <Button color={'teal'} type="submit"   _focus={{outline:"none"}}  value="Send" >Send Email</Button>
         
          <Box
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
        </Box>
          </Box>

        </SimpleGrid> 
    </Box>


    <SimpleGrid fontSize={'17px'} gap={"30px"}  w={['80%','85%','100%','100%']} m={"auto" }   columns={[1,2,2,4]} pl={["2%","4%","4%","6%"]} >
    <Flex gap={2}  alignItems="center">
        <Text mt={1}><AiOutlineMail /></Text>
        <Link href='nitinsamaniya97@gmail.com'>nitinsamaniya97@gmail.com</Link>
    </Flex>

    <Flex gap={2}  alignItems="center">
        <Text mt={1}><AiOutlineMobile /></Text>
        <Link href="tel:8700712372">+91 8700712372</Link>
    </Flex>

    <Flex gap={2}  alignItems="center">
        <Text mt={1}><AiFillGithub /></Text>
        <Link href='https://github.com/Nitesh-Samaniya' isExternal>GitHub</Link>
    </Flex>

    <Flex gap={2}  alignItems="center">
        <Text mt={1}><AiFillLinkedin /></Text>
        <Link href='https://www.linkedin.com/in/nitesh-samaniya-5b2563233/' isExternal>LinkedIn</Link>
    </Flex>

    </SimpleGrid>

    <Text color={'gray'} mt={'50px'} mb={3} fontFamily={'heading'} fontSize='20px' textAlign={'center'}>@2022 Nitesh Samaniya</Text>
</>
  )
}

export default Contact