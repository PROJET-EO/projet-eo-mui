import { Stack, Typography, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { User } from './types/user';
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from './utils/userYupSchema';
import { addErrorIntoField } from './utils/addErrorIntoField';

const signUp = () => {
    const [valid, setValid] = useState<boolean>(false);

    const form = useForm<User>({
        defaultValues:{
            name:"", 
            email:"", 
            password:"", 
            bioTEXT:""
        },
        resolver:yupResolver(userSchema),
    });

    const { register, handleSubmit, formState, reset } = form;
    const { isSubmitSuccessful, errors } = formState;

    const onSubmit = (values:User) => {
        console.log("Submitted" ,values);
    }

    // reset values on submission
    useEffect(() => {
        isSubmitSuccessful && reset(); 
    }, [isSubmitSuccessful, reset])
    



  return (
    <Stack
        width="100%"
        height="550px"     
        alignItems="center"   
    >
        <Stack 
            mt="10%"
            alignItems="center"
            boxShadow="1px 1px 5px grey"
            p={5}
            borderRadius="2%"
            bgcolor="white"
        >
            <Typography marginBottom={2} variant="h6" color="primary">Create an account</Typography>
            <form 
                action="singUp"
                noValidate
                onSubmit={handleSubmit(onSubmit)}    
            >
                <Stack 
                    mb="8%"
                    mt="2%"
                    flexDirection="row"
                >
                    <Stack
                        flexDirection="column"
                        spacing={2}   
                        mr={1}
                    >
                        <TextField 
                            label="Name" 
                            type="text"
                            size="small"
                            error={valid}
                            placeholder="Roussel Rakoto"
                            helperText={errors.name?.message}
                            {...register("name", {
                                minLength:{
                                    value:4,
                                    message:"Password should at least 8 caracter"
                                }
                            })}
                        ></TextField>
                        <TextField 
                            label="Email" 
                            type="email"
                            size="small"
                            error={valid}
                            placeholder="hei.roussel.2@gmail.com"
                            helperText={errors.email?.message}
                            {...register("email", {
                                validate: (fieldEnterValue) => {
                                    return fieldEnterValue.slice(0,3).localeCompare("hei") === 0 || "Email should start with hei."
                                }
                            })}
                        >
                        </TextField>
                    </Stack>

                    <Stack
                        flexDirection="column"
                        spacing={2}
                        ml={1}
                    >
                        <TextField 
                            label="Password" 
                            type="password"
                            size="small"
                            error={valid}
                            placeholder="Do not share"
                            helperText={errors.password?.message}
                            {...register("password")}
                        >

                        </TextField>
                        <TextField 
                            label="Bio" 
                            type="text"
                            size="small"
                            error={valid}
                            placeholder="Nothing but coding"
                            helperText={errors.bioTEXT?.message}
                            {...register("bioTEXT")}
                        >
                        </TextField>
                    </Stack>
                </Stack>
            <Button 
                type="submit"
                variant="contained"
                size="small"
                sx={{ width:"80%", marginBottom:"5%", marginLeft:"10%" }}
            >
                SIGN UP
            </Button>
            <Typography>
                Already have an account.<Link> Log in? </Link>
            </Typography>
            </form>
        </Stack>
    </Stack>
  )
}

export default signUp;