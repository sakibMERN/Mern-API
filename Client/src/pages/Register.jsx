import { Box, Typography, TextField, Button } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
     //Navigation
     const navigate = useNavigate();

     //state
     const [input, setInput] = useState({
          username:"",
          email:"",
          password:"",
     });

     // handel input change
     const handelChange = (e) =>{
          setInput((prevState)=>({
               ...prevState,
               [e.target.name]: e.target.value
          }));
     };

     const handeleSubmit = async (e) =>{
          e.preventDefault();
          
          try {
               
               const data =await axios.post('http://localhost:8080/api/v1/user/register',{username:input.username, email:input.email, password:input.password});

               if(data.data.success){
                    alert ('User register successfully')
               }
               navigate("/login");
          
          } catch (error) {
               console.log(error);
          }
          

     }

     return (
          <>
               <form onSubmit={handeleSubmit}>
                    <Box 
                         maxWidth={450} 
                         display="flex" 
                         flexDirection={"column"} 
                         alignItems={"center"} 
                         justifyContent={"center"} 
                         margin="auto" 
                         marginTop="5"
                         boxShadow="10px 10px 20px #ccc"
                         padding={3}
                         borderRadius={5}
                         >
                         <Typography variant='h4' padding={3} textAlign={"center"} textTransform={"uppercase"} >
                              Register
                         </Typography>

                         <TextField 
                              placeholder='name' 
                              name='username' 
                              type='text'
                              value={input.username}
                              margin='dense'
                              fullWidth
                              required
                              onChange={handelChange}
                         />
                         <TextField 
                              placeholder='email' 
                              name='email' 
                              type='email'
                              value={input.email}
                              margin='dense'
                              fullWidth
                              required
                              onChange={handelChange}
                         />
                         <TextField 
                              placeholder='password' 
                              name='password'
                              type='password'
                              value={input.password} 
                              margin='dense'
                              fullWidth
                              required
                              onChange={handelChange}
                         />
                         
                         <Button type='submit' variant='contained' color='primary' sx={{borderRadius: 3, marginTop: 2}}>
                              Submit
                         </Button>
                         <Box sx={{marginTop: 1,}}>
                         <h4>
                              Already Registered ?
                              <Button onClick={()=> navigate("/login")} color='warning'  sx={{borderRadius: 3,}}>
                                   Please Login
                              </Button>
                         </h4>
                         </Box>
                         
                    </Box>
               </form>
          </>
     );
};

export default Register;