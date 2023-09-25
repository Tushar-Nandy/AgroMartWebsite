import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import introVideo from "../../assets/videos/Ms.Marvel.S01E01.Hindi.1X.mp4";

const CoursePage=()=>{
    const [lectureNumber,setLectureNumber]=useState(0);
    const lectures=[{
        _id:"assds",
        title:"Sample",
        description:"cnucd nrhbecfc njenc",
        video:{
            url: 'duenue'
        }
    },
    {
        _id:"ssds",
        title:"Sample1",
        description:"cnswwd edeucd nrhbecfc njenc",
        video:{
            url: 'dudenue'
        }},
        {
            _id:"assd3e3ds",
            title:"Sample3",
            description:"cnd 4rucd nrhbecfc njenc",
            video:{
                url: '4duenue'
            }}]


    return(
       <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
        <Box>
        <video
        width={"100%"}
            autoPlay={false}
            controls 
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            >

            </video>

            <Heading m={"4"} size={"xs"}> {lectureNumber+1} {lectures[lectureNumber].title}</Heading>
            <Heading m={"4"} size={"md"}> Description</Heading>
            <Text m={"4"}>{lectures[lectureNumber].description}</Text>
        </Box>
        <VStack>
            {
                lectures.map((element,index)=>(
                    <button 
                    onClick={()=> setLectureNumber(index)}
                    key={element._id}
                    style={{
                        width:"100%",
                        padding:"1rem",
                        textAlign: "center",
                        margin:0,
                        borderBottom: "1px solid rgba(0,0,0,0.2)"
                    }}>
                        <Text noOfLines={1}>
                            #{index+1} {element.title}
                        </Text>
                    </button>
                ))
            }
        </VStack>
       </Grid>
    )
}

export default CoursePage