import { Avatar, Button, Container, HStack, Heading, Stack, VStack,Text,Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Profile=()=>{
    const user={
        name:"Tushar",
        email:"tush@gmail.com",
        createDate: String(new Date().toISOString()),
        role: "user",
        pagesAdded:{
            status:undefined,
            number: '10',
        },
        wishlist:[
            {
                course:"sdejndcd",
                poster:"nnuufr",
            }
        ],
    }

    const removeFromPlaylistHandler= id =>{
        console.log(id);
    };

    const changeImageSubmitHandler=(e,image)=>{
        e.preventDefault();
        console.log(image)
    };

    const {isOpen,onClose,onOpen}=useDisclosure()


    return(
        <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
            <Heading m={"8"} textTransform={"uppercase"}>Profile</Heading>

            <Stack justifyContent={"flex-start"} direction={["column","row"]} alignItems={"center"} spacing={["8","16"]} padding={"8"}>

                <VStack>
                    <Avatar boxSize={"48"} />

                    <Button colorScheme="green" variant={"ghost"} onClick={onOpen}>
                        Change Photo
                    </Button>

                   
                </VStack>

                <VStack spacing={"4"} alignItems={["center","flex-start"]} >

                    <HStack>
                        <Text fontWeight={"bold"}>
                            Name: 
                        </Text>
                        <Text>{user.name}</Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={"bold"}>
                            Email: 
                        </Text>
                        <Text>{user.email}</Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={"bold"}>
                            Created On: 
                        </Text>
                        <Text>
                            {user.createDate.split("T")[0]}
                        </Text>
                    </HStack>
{user.role!=='admin' && <HStack>
    
    <Text fontWeight={"bold"}>Pages Added: </Text>
    <Text>{user.pagesAdded.number}</Text>
    {
        user.pagesAdded.number ==='0' ?(
            <Link to={"/request"}>
            <Button colorScheme="yellow">Add Page</Button>
        </Link>
    ):(
        
        <Button color="red.500" variant={"ghost"}>Logout</Button>
    )}
    </HStack>}
                  <Stack direction={["column","row"]} alignItems={"center"}>
                    <Link to={"/updateprofile"}>
                        <Button>Update Profile</Button>                        
                        </Link>                    
                    </Stack>  

                    <Stack direction={["column","row"]} alignItems={"center"}>
                    <Link to={"/changepassword"}>
                        <Button>Change Password</Button>                        
                        </Link>                    
                    </Stack>  

                </VStack>

            </Stack>

            <Heading size={"md"} my={"8"}>Whislist</Heading>
            {
                user.wishlist.length>0 && (
                    <Stack direction={["column","row"]} alignItems={"center"} flexWrap={"wrap"} p={"4"}>
                        {
                            user.wishlist.map((element)=>(
                                <VStack w={"48"} m={"2"} key={element.course}>
                                    <Image boxSize={"full"} objectFit="contain" src={element.poster} />

                                    <HStack>
                                        <Link to={'/course/${element.course}'}>
                                        <Button variant={"ghost"} colorScheme="yellow">Watch Now</Button>
                                        </Link>

                                        <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                            <RiDeleteBin7Fill/>
                                            </Button>


                                    </HStack>

                                </VStack>
                                
                            ))
                        }
                    </Stack>
                )
            }


            <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>

        </Container>

    )
};

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
    const[image,setImage]=useState("");
    const[imagePrev,setImagePrev]=useState("");



    const changeImage=(e)=>{
        const file= e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend =()=>{
            setImagePrev(reader.result);
            setImage(file);
        }
    };

    const closeHandler =()=>{
        onClose();
        setImagePrev("");
        setImage("");

    }

    return(
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'}/>
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                            <VStack spacing={"8"}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={"48"}/>
                                }
                                <Input type="file" onChange={changeImage}/>
                                <Button w={"full"} colorScheme="green" type="submit" onClick={closeHandler}>
                                    Change
                                </Button>

                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={"3"} onClick={closeHandler}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    )
}