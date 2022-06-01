import { Box, Text,Button,Flex } from '@chakra-ui/react'
import React,{useState} from 'react'

export const Box1 = (props) => {
 
  return (
   <Box ml="60px" bg="pink.50" width="400px" heigth="300px" mt="20px" opacity={props.Opacity}>
     <Button colorScheme='teal' variant='ghost' width="fit-content" height="fit-content" mb="3">
       <Flex direction="column" alignItems="center"textAlign="center">
     <Text fontSize="22px" mt="2">Explore Design Work</Text>
    
     <Text fontSize="15px" mt="1.5">Trending Design To Insipire You</Text>
     </Flex>
  </Button>
     <Button colorScheme='teal' variant='ghost' width="fit-content" height="fit-content">
       <Flex direction="column" alignItems="center"textAlign="center">
     <Text fontSize="22px" mt="2">Explore Design Work</Text>
    
     <Text fontSize="15px" mt="1.5">Trending Design To Insipire You</Text>
     </Flex>
  </Button>
   </Box>
  )
}
