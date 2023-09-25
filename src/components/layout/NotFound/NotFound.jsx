import { Container, Heading, VStack, Button } from "@chakra-ui/react";
import React from "react";
import {RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound=()=>{
    return(
        <Container h={"90vh"}>

        
        
        <VStack justifyContent={"center"} h={"full"} spacing={"4"}>   
        <Heading my={"8"} textAlign={"center"}>
            Page Not Found
            
        </Heading>
        <Heading  justifyContent={"center"}>
        <RiErrorWarningFill size={"7rem"} />
        </Heading>
 

            <Link to={"/"}>
                <Button variant={"ghost"} color={"blue.200"}>Go to Home</Button>
            </Link>

        </VStack>

    </Container>
    )
};

export default NotFound