import { Box, Button, HStack, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import vg from "../assets/images/logo.jpg";
import {CgGoogle} from "react-icons/cg";
import{GrAmazon, GiFoodTruck, GiDominoTiles} from "react-icons/all"
import introVideo from "../assets/videos/Ms.Marvel.S01E01.Hindi.1X.mp4";

const Home=()=>{
    return <section className="home">

        <div className="container">
            <Stack
            direction={["column","row"]}
            height={"100%"}
            justifyContent={["center", "flex-end"]}
            alignItems={"center"}
            spacing={["16","56"]}
            >

                <VStack width={"full"} alignItems={["center","flex-end"]} spacing={"8"}>
                    <Heading size={'2xl'}>
                        Learn From the Expert
                        </Heading> 
                        <text textAlign={["center","left"]} fontFamily="cursive">
                            Find Valueable Content at Resonable Price
                        </text>
                        <Link to='/courses'>
                            <Button size={'lg'} colorScheme="green">
                                Explore Now</Button>
                        </Link>
                    
                </VStack>

                <Image boxSize={"md"} src={vg} objectFit={"contain"} className="vector-graphics"></Image>


            </Stack>
        </div>

        <Box padding={'8'} bg={"blackAlpha.800"}>

            <Heading textAlign={"center"} fontFamily={"body"} color={"green.200"}>Our Brands</Heading>

            <HStack className="brandsBanner" justifyContent={'space-evenly'} marginTop='8'>

            <CgGoogle/>
            <GiDominoTiles/>
            <GiFoodTruck/>
            <GrAmazon/>

        </HStack>
        </Box>

        <div className="container2">
            <video
            autoPlay={false}
            controls 
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            >

            </video>
        </div>

        
    </section>
};

export default Home;