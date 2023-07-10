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
import { useNavigate } from 'react-router-dom';
  
  
  
  export default function Login() {

    // const Neededemail="abcd@gmail.com"
    // const Neededpw="abcd"

  const{SetisAuth, users, SetUsers} = useContext(AuthContext)
  const navigate = useNavigate()

  const [userEmail, SetuserEmail] = useState("")
  const [userPassword, SetPassword] = useState("")
  console.log(users)
 

  const HandleSignIn =()=>{

    let flag = false
        for(let i=0; i<users.length; i++){
            if(users[i]['userEmail']==userEmail && users[i]['userPassword']==userPassword){
                flag = true
                SetisAuth(true)
                alert('Login Successful')
                break;
            }
        }

        if(flag==false){
          if(userEmail=="" || userPassword==""){
            alert('Invalid Credentials')
          }
          else{
              alert('User not found, please SignUp')
              navigate("/signup")
          }
        }

    // if(userEmail===Neededemail && userPassword===Neededpw){
    //     SetisAuth(true)
    //     alert('Login Successful')
    // }
    // else{
    //     alert('Invalid Credentials')
    // }
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