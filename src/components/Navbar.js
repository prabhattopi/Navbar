import { Flex, Link, Stack, Text,Button, Spacer, Box, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Box1 } from './Box1'
import { useDisclosure } from '@chakra-ui/react'
export const Navbar = (props) => {  

    const count = useRef(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Handle=()=>{
        props.setOpacity(1)
    }


    const Hand=()=>{
        props.setOpacity(0)
    }
   

  return (

   <Stack pl="3" p="3" position="sticky" height="60px" bg="pink.50" boxShadow="0 0 0 rgba(0,0,0,0.6)">
     <Flex align="center">
         <Text fontSize="20px" fontWeight="1000">Logo</Text>
         <Flex ml="40px">
         <Button onClick={Handle} colorScheme='teal' variant='none'>
    inspiration
  </Button>
         <Button onClick={Hand} colorScheme='teal' variant='none'>
    Find Work
  </Button>
         <Button colorScheme='teal' variant='none'>
   learn Design
  </Button>
         <Button colorScheme='teal' variant='none'>
    Hire Designer
  </Button>
  
 
  </Flex>
  <Spacer></Spacer>
  <Flex>
  <Button _hover={{bg:"white"}}border="none" mr="4" >
      <Link href='#' boxSizing='20' p="2">Sign In</Link>
  
  </Button>
  <Button colorScheme='teal' bg="pink.400">
    Sign Up
  </Button>
  </Flex>
     </Flex>
   </Stack>
  
   
  )
}
