import { Flex, Link, Stack, Text,Button, Spacer,} from '@chakra-ui/react'



export const Navbar = (props) => {  



    const Handle=()=>{
        props.setOpacity(1)
    }


    const Hand=()=>{
        props.setOpacity(0)
    }
    const Handlei=()=>{
      props.setOpacity(1)
      
    }
    const Handlei2=()=>{
      props.setOpacity(0)

    }
  

  return (

   <Stack pl="3" p="3" position="sticky" height="60px" bg="pink.50">
     <Flex align="center">
         <Text fontSize="20px" fontWeight="1000">Logo</Text>
         <Flex ml="40px">
         <Button onMouseEnter={Handlei} onMouseLeave={Handlei2} onClick={Handle} colorScheme='teal' variant='none'>
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
