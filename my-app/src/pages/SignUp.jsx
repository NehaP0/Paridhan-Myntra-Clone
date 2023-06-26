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
  

  
  
  
  export default function SignUp() {


    const{users, SetUsers} = useContext(AuthContext)
    // users, SetUsers
    const navigate = useNavigate()
    console.log(users)

  const [userEmail, SetuserEmail] = useState("")
  const [userPassword, SetPassword] = useState("")


 

  const HandleSignUp =()=>{
        let flag = false
        for(let i=0; i<users.length; i++){
            if(users[i]['userEmail']==userEmail && users[i]['userPassword']==userPassword){
                flag = true
                alert("User already exists, please Login")
                navigate("/login")
                break;
            }
        }

        if(flag==false){
            if(userEmail!=="" && userPassword==""){
                alert("Please fill all the details")
            }
            else{
                let obj={userEmail, userPassword}
                SetUsers([...users, obj])
                alert("SignUp Successfull, please Login")
                navigate("/login")
            }
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
            <Heading fontSize={'4xl'}>Sign Up</Heading>
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
                <Button onClick={()=>HandleSignUp()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign Up
                </Button>
                <Text fontSize={'lg'} color={'gray.600'}>
                    Already have an account? <Link color={'blue.400'} onClick={()=>navigate("/login")}>Log in</Link> 
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }