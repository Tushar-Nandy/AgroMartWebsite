import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");



    return(
        <Container h={"92vh"}>

            <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
                <Heading>Contact Us</Heading>

                <form style={{width:'100%'}}>

                <Box my={"4"}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input 
                    required 
                    id="name" 
                    value={name} onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter Your Name"
                    type="text"
                    focusBorderColor="green.500"
                    ></Input>
                    </Box>
                    
                    <Box my={"4"}>
                    <FormLabel htmlFor="email">Email Id</FormLabel>
                    <Input 
                    required 
                    id="email" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    placeholder="abc@gmail.com"
                    type="email"
                    focusBorderColor="green.500"
                    ></Input>
                    </Box>

                    <Box my={"4"}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                    required 
                    id="message" 
                    value={message} onChange={(e)=>setMessage(e.target.value)}
                    placeholder="Enter the message"
                    focusBorderColor="green.500"
                    ></Textarea>
                    </Box>

                    <Button my="4" colorScheme="green" type="submit">Submit</Button>

                    <Box my="4">
                        Request for Uploading your Produce? <Link to={"/request"}>
                            <Button colorScheme="yellow" variant={"link"}>Click </Button>{" "}
                            here
                            </Link>
                        </Box>            


                </form>

            </VStack>

        </Container>
    )
};

export default Contact