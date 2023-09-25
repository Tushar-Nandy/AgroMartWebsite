import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword=()=>{
    const [password,setPassword]=useState("");

    const params = useParams()

    console.log(params.token);
    return(
        <Container py={"16"} h={"90vh"}>

            <form>
                <Heading my="16" textAlign={["center","left"]} textTransform={"uppercase"}>Reset Password</Heading>
                <VStack spacing={"8"}>
                <Input
                    required 
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter New Password"
                    type="password"
                    focusBorderColor="green.500"
                    />
                    <Button type="submit" w={"full"} colorScheme="green">
                        Change Password
                    </Button>

                </VStack>
            </form>
        </Container>

    )
}

export default ResetPassword