import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const fileUploadCss ={
    cursor:"pointer",marginLeft:"-5%",
    width:"110%",
    bordee:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white"

}

const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss
}

const Register=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [imagePrev,setImagePrev]=useState("");
    const [image,setImage]=useState("");

    const changeImageHandler=(e)=>{
        const file= e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend =()=>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    return(
               
        <Container height={"100vh"}>

            <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
                <Heading textTransform={"uppercase"}>
                    Registration
                </Heading>

                <form style={{width:'100%'}}>

                    <Box my={"4"} display={"flex"} justifyContent={"center"}>
                        <Avatar src={imagePrev} size={"2xl"}/>
                    </Box>
                    
                <Box my={"4"}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input 
                    required 
                    id="name" 
                    value={name} onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter Your Name"
                    type="text"
                    focusBorderColor="green.500"
                    ></Input>
                    </Box>

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

                    <Box my={"4"}>
                    <FormLabel htmlFor="chooseAvatar">Enter Your Profile Picture</FormLabel>
                    <Input 
                    accept="image/*"
                    required 
                    id="chooseAvatar"             
                    type="file"
                    focusBorderColor="green.500"
                    css={{fileUploadStyle}}
                    onChange={changeImageHandler}
                    ></Input>
                    </Box>

                    <Button my="4" colorScheme="green" type="submit">Sign Up</Button>

                    <Box my="4">
                        Already Registered? <Link to={"/login"}>
                            <Button colorScheme="yellow" variant={"link"}>Login </Button>{" "}
                            here
                            </Link>
                        </Box>


                </form>
            </VStack>

        </Container>
    )
};

export default Register