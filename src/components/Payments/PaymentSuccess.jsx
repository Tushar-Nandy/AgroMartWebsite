import { Box, Container, Heading, VStack, Text, Button } from "@chakra-ui/react";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentSuccess=()=>{
    return(
        <Container h={"90vh"} p={"16"}>

            <Heading my={"8"} textAlign={"center"}>
                You have pro pack
            </Heading>

            <VStack boxShadow={"lg"} pb={"16"} alignItems={"center"} borderRadius={'lg'}>
                <Box w={"full"} bg={"green.400"} p={"4"} borderRadius={" 8px 8px 0px 0px"}>
                    <Text color={"white"}>Payment Successful</Text>
                </Box>

                <Box p={"4"} >
                    <VStack textAlign={"center"} px={"8"} marginTop={"4"} spacing={"8"}>
                        <Text>
                            Congratulations on Your purchase. You'll get a mail about your purchase details.
                        </Text>
                        <Heading size={"4xl"}>
                            <RiCheckboxCircleFill/>
                        </Heading>
                    </VStack>
                </Box>

                <Link to={"/profile"}>
                    <Button variant={"ghost"}>Go to Profile</Button>
                </Link>

                <Heading size={"xs"}>
                    Reference: efurfunfunufecm,knurnfj
                </Heading>

            </VStack>

        </Container>
    )
};

export default PaymentSuccess