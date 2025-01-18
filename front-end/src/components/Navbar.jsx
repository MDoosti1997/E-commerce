import { Button, Container, Flex, HStack, Text, useColorMode, } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          bgGradient='linear(to-l,rgb(40, 191, 202),rgb(17, 0, 255))'
          bgClip='text'
          fontSize={{ base: "22", sm: "28" }}
          fontWeight='bold'
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          <Link to={"/"}>Product Store  🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size="20" /> : <IoSunny size="20" />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
};

export default Navbar