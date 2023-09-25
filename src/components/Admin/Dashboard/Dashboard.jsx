import { Box, Grid, HStack, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";


const Databox=({title,qty,qtyPerecentage,profit})=>(
    <Box w={["full","20%"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} padding={"8"} borderRadius={"lg"}>
        <Text>
            {title}
        </Text>
        
        <HStack padding={"2"}>
        
            <Text fontSize={"2xl"} fontWeight={"bold"}>{qty}</Text>
            <Text>
                {qtyPerecentage}%
            </Text>
            {
                profit?<RiArrowUpLine color="green"/>:
                <RiArrowDownLine color="red"/>
            }

        </HStack>
        
        <Text opacity={0.6}>Since Last Month</Text>
        
    </Box>
)

const Bar=({title,value,profit})=>(
    <Box py={4} px={["0","20"]}>
        <Heading size={"sm"} mb={"2"}>{title}</Heading>
        <HStack width={"full"} alignItems={"center"}>
            <Text>{profit? 0:value}</Text>
            <Progress w={"full"} value={profit?value:0} colorScheme="purple"/>
            <Text>{value>100?value:"100%"}</Text>
        </HStack>
    </Box>
)


const Dashboard=()=>{
    
    return(
       <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>

        <Box
        boxSize={"border-box"}
        py={"16"}
        px={["4","0"]}>  
        <Text opacity={"0.5"} textAlign={"center"}>Last Change was on {String(new Date()).split("G")[0]}</Text>

        <Heading ml={["0","16"]} mb={"16"} textAlign={["center","left"]}>Dashboard</Heading>

        <Stack direction={["column","row"]} minH={"24"} justifyContent={"space-evenly"}>
            <Databox title="Views" qty={123} qtyPerecentage={30} profit={true}/>
            <Databox title="Users" qty={23} qtyPerecentage={70} profit={true}/>
            <Databox title="Subscription" qty={13} qtyPerecentage={20} profit={true}/>
            
        </Stack>
        <Box m={["0","16"]} borderRadius={"lg"} p={["0","16"]} mt={["4","16"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>

            <Heading textAlign={["center","left"]} size={"md"} pt={["8","0"]} ml={["0","16"]}>
                Views Graph
            </Heading>

            {/*Line Graph Here */}

        </Box>
        
        <Grid templateColumns={["1fr","2fr 1fr"]}>

            <Box padding={"4"}>
                <Heading textAlign={["center","left"]} size={"md"} my={8} ml={[0,16]}>Progress Bar</Heading>

                <Box>

                    <Bar title="Views" value={30} profit={true}/>
                    <Bar title="Users" value={70} profit={true}/>
                    <Bar title="Subscription" value={20} profit={false}/>
                </Box>
            </Box>

            <Box padding={[0,16]} boxSizing="border-box" py={4}>
                <Heading textAlign={"center"} size={"md"} mb={4}>
                    Users
                </Heading>

                

            </Box>
        </Grid>

        </Box>
        <Sidebar />

       </Grid>
    )
};

export default Dashboard