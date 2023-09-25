import { Avatar, Container, Heading, Stack, VStack, Text, Button, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Founder1=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar src="" boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading size={["md","xl"]}>Tushar Nandy</Heading>
            <Text textAlign={["center","left"]}>Hi I am a student at XIE</Text>
        </VStack>
    </Stack>
)
const Founder2=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading size={["md","xl"]}>Atharv Goankar</Heading>
            <Text textAlign={["center","left"]}>Hi I am a student at XIE</Text>
        </VStack>
    </Stack>
)
const Founder3=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar src="" boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading size={["md","xl"]}>Sahil G</Heading>
            <Text textAlign={["center","left"]}>Hi I am a student at XIE</Text>
        </VStack>
    </Stack>
)
const Founder4=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
        <VStack>
            <Avatar boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading size={["md","xl"]}>Aditya Naik</Heading>
            <Text textAlign={["center","left"]}>Hi I am a student at XIE</Text>
        </VStack>
    </Stack>
)

const TandC=({termsAndConditions})=>(
    <Box>
        <Heading size={"md"} textAlign={["center","left"]} my={"4"}>
            Terms & Condtions
        </Heading>

        <Box h={"sm"} p={"4"} overflow={"scroll"}>
            <Text textAlign={["center","left"]} letterSpacing={"widest"} fontFamily={"heading"}>{termsAndConditions}</Text>
            <Heading my={"4"} size={"xs"}>Refund only applicable for cancellation within 7 days </Heading>
        </Box>
    </Box>
)

const About=()=>{
    return(
        <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>

            <Heading textAlign={["center","left"]}>About Us</Heading>
           
            <Founder1 />
            <Founder2/>
            <Founder3/>
            <Founder4 />

            <Stack m={"8"} direction={["column","row"]} alignItems={"center"}>
                <Text fontFamily={"cursive"} m={"8"} textAlign={["center","left"]}>
                    We are a Agro-Startup with the intention of helping and conecting farmers directly to the industries
                </Text>

                <Link to={"/subscribe"}>
                    <Button variant={"ghost"} colorScheme="green">Check Out Our Plan</Button>
                </Link>
            </Stack>

            <TandC termsAndConditions={'termsAndConditions'} />

            <HStack my={"4"} padding={"4"}>
                <RiSecurePaymentFill />
                <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"}>Payment is secured by RazorPay</Heading>
            </HStack>

        </Container>
    )
};

export default About