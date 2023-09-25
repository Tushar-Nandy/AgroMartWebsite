import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";


const UpdateProfile=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    return(
        <Container py={"16"} minH={"96vh"}>

        <form>
            <Heading my={'16'} textAlign={["center",'left']} textTransform={"uppercase"}>
               Update Profile
            </Heading>
            <VStack spacing={"8"}>
            <Box my={"4"}>                
                <Input 
                required 
                value={name} onChange={(e)=>setName(e.target.value)}
                placeholder="Name"
                type="text"
                focusBorderColor="green.500"
                ></Input>
                </Box>

                <Box my={"4"}>                
                <Input 
                required 
                value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                focusBorderColor="green.500"
                ></Input>
                </Box>

                <Button w={"full"} colorScheme="green" type="submit">
                    Change
                </Button>



            </VStack>
        </form>

    </Container>

    )
};

export default UpdateProfile