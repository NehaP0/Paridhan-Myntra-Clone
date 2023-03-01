import React from 'react'
import { useState, useContext } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { AuthContext } from '../Contexts/AuthContext';

  
  
  
  export default function Login() {

    const Neededemail="abcd@gmail.com"
    const Neededpw="abcd"

    const{SetisAuth} = useContext(AuthContext)

  const [userEmail, SetuserEmail] = useState("")
  const [userPassword, SetPassword] = useState("")


 

  const HandleSignIn =()=>{
    console.log(userEmail, userPassword)

    if(userEmail===Neededemail && userPassword===Neededpw){
        SetisAuth(true)
        alert('Login Successful')
    }
    else{
        alert('Invalid Credentials')
    }
  }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>SetuserEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>SetPassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button onClick={()=>HandleSignIn()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }