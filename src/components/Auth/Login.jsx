import { Box, Button, Container, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    return(
               
        <Container height={"95vh"}>

            <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
                <Heading>
                    Welcome to AgroMart
                </Heading>

                <form style={{width:'100%'}}>
                    
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
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input 
                    required 
                    id="password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password"
                    type="password"
                    focusBorderColor="green.500"
                    ></Input>
                    </Box>

                    <Box>
                        <Link to={"/forgetpassword"}>
                            <Button fontSize={"sm"} variant={"link"}>Forget Password</Button>
                        </Link>
                    </Box>

                    <Button my="4" colorScheme="green" type="submit">Login</Button>

                    <Box my="4">
                        New User? <Link to={"/register"}>
                            <Button colorScheme="yellow" variant={"link"}>Sign Up </Button>{" "}
                            here
                            </Link>
                        </Box>


                </form>
            </VStack>

        </Container>
    )
};

export default Login