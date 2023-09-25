import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { TiSocialInstagramCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import {FaLinkedin} from "react-icons/all"

const Footer=()=>{
    return(
        <Box
        padding={4}
        bg={"blackAlpha.900"}
        minH={"10vh"}>

            <Stack direction={["column","row"]}>

                <VStack alignItems={["center","flex-start"]} width={"100%"}>

                    <Heading color={"white"}>All Rights Reserved</Heading>
                    <Heading color={"green.400"} fontFamily={"body"} size={"sm"}>@Agro Mart</Heading>
                </VStack>

                <HStack spacing={["2","10"]} justifyContent={"center"} color={"white"} fontSize={"50"}>
                    
                    <a href="https://youtube.com/@reversethinking2594">
                        <TiSocialYoutubeCircular />                       
                    </a>

                    <a href="https://instagram.com/_agromart_?igshid=OGQ5ZDc2ODk2ZA">
                        <TiSocialInstagramCircular/>
                    </a>

                    <a href="https://www.linkedin.com/in/agro-mart-5104aa290">
                        <FaLinkedin/>
                    </a>

                </HStack>

            </Stack>

        </Box>
    )
}

export default Footer