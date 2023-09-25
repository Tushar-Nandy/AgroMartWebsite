import React from "react";
import {ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from "@chakra-ui/react";
import {RiDashboardLine, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";
import { Link } from "react-router-dom";


const LinkButton = ({url='/', title="Home", onClose})=>
(
    <Link onClick={onClose} to={url}>
                            <Button variant={"ghost"}>{title}</Button>
                        </Link>
)

const Header=()=>{
    const {isOpen, onOpen, onClose} = useDisclosure();
const isAuthenticated=false;
const user={
    role: "admin",
};
const logoutHandler = ()=>{
    console.log("Logout");
    onClose();
}

    return(
        <>
        <ColorModeSwitcher />

        <Button colorScheme="green" width={12} height={12} rounded={"full"} position={"fixed"} top={6} left={6} onClick={onOpen} zIndex={"overlay"}>
            <RiMenu5Fill />
        </Button>

        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>

            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth={"1px"}>AgroMart</DrawerHeader>
                <DrawerBody>
                    <VStack
                    spacing={2}
                    alignItems={"flex-start"}>
                       <LinkButton onClose={onClose} url='/' title="Home" />
                       <LinkButton onClose={onClose} url='/courses' title="Shop" />
                       <LinkButton onClose={onClose} url='/request' title="Request" />
                       <LinkButton onClose={onClose} url='/contact' title="Contact" />
                       <LinkButton onClose={onClose} url='/about' title="About" />

                       <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
                          {isAuthenticated?(<>
                          <VStack>
                            <HStack>
                                <Link onClick={onClose} to={"/profile"}>
                                    <Button colorScheme="green" variant={"ghost"}>
                                        Profile
                                    </Button>
                                </Link>
                                <Button variant={"ghost"} onClick={logoutHandler}>
                                    <RiLogoutBoxLine />
                                    Logout
                                </Button>
                            </HStack>
                            
                            {
                                user && user.role==="admin" && <Link onClick={onClose} to={"/admin/dashboard"}>
                                    <Button colorScheme="purple" variant={"ghost"}>
                                        <RiDashboardLine style={{margin:"15px"}}/>
                                        Dashboard
                                    </Button>
                                </Link>
                            }

                            </VStack>
                            </>)
                            :
                            (<>
                          <Link onClick={onClose} to={"/login"}>
                            <Button colorScheme="green">Login</Button>
                          </Link>
                          <p>OR</p>
                          <Link onClick={onClose} to={"/register"} >
                            <Button colorScheme="green">Register</Button>
                            </Link>
                          </>)}
                       </HStack>
                    </VStack>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
        </>
    )
}

export default Header;


