import React, { useState } from "react";
import {Button, Container, HStack, Heading, Image, Input,Link,Stack,Text, VStack} from "@chakra-ui/react"

const Course =({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lecture})=>{
    return(
        <VStack className="course" alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize={"60"} objectFit={"contain"}/>
            <Heading textAlign={["center","left"]} maxW={'200px'} fontFamily={"sans-serif"} size={"sm"} noOfLines={3}> {title}</Heading>
            <Text noOfLines={2}>{description}</Text>

            <HStack>
            <Text fontWeight={"bold"} textTransform={"uppercase"}>Creator: </Text>
            <Text fontFamily={"body"} textTransform={"uppercase"}>{creator}</Text>
            </HStack>

            <Heading textAlign={"center"} size={"xs"}>Lectures: {lecture} </Heading>
            <Heading size={"xs"}>Views: {views} </Heading>

            <Stack direction={["column","row"]} alignItems={"center"}>

                <Link to={"/course/${id}"}>
                    <Button colorScheme="green">Watch Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme="green" onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>

            </Stack>
        </VStack>
    )
}

const Courses = ()=>{
const [keyword, setKeyword]=useState("");
const [category, setCategory]= useState("");

const addToPlaylistHandler=()=>{
    console.log("Added to playlist");
}

const categories=[
    "Web Development","Artificial Inteligence", "Data Structure and Algorithms", "App Development", "Game Development", "Data Science"
]

    return (
       <Container minH={"95vh"} maxW={"container.lg"} paddingY={8}>

        <Heading margin={8} color={"green.200"}>Shop</Heading>

        <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Search a Course..." type={"text"} focusBorderColor={"blue.100"} />

        <HStack overflow={"auto"} paddingY={8} >
            {
                categories.map((item,index)=>(
                    <Button key={index} minW={60} onClick={()=>setCategory(item)}>
               <Text children={item}/>
            </Button>
                ))
            }
            
        </HStack>

        <Stack
        direction={["column","row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start","space-evenly"]}
        alignItems={["center","flex-start"]}
        >
            <Course 
            title={"Sample"}
            description={"Sample"}
            views={23}
            imageSrc={"https://cdn.pixabay.com/photo/2018/06/25/14/27/background-image-3497025_1280.jpg"}
            id={"sample"}
            creator={"Sample_Boy"}
            lecture={2}
            addToPlaylistHandler={addToPlaylistHandler}
            />


        </Stack>


       </Container>
    )
}

export default Courses