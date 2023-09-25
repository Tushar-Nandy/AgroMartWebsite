import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";

const ChangePassword=()=>{
    const [oldPassword,setOldPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");

    return (
        <Container py={"16"} minH={"96vh"}>

            <form>
                <Heading my={'16'} textAlign={["center",'left']} textTransform={"uppercase"}>
                    Change Password
                </Heading>
                <VStack spacing={"8"}>
                <Box my={"4"}>
                    
                    <Input 
                    required 
                    value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}
                    placeholder="Old Password"
                    type="password"
                    focusBorderColor="green.500"
                    ></Input>
                    </Box>

                    <Box my={"4"}>
                    
                    <Input 
                    required 
                    value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
                    placeholder="New Password"
                    type="password"
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

export default ChangePassword