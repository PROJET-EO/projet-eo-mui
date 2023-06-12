import { Button, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormValues } from './type/loginFormValues';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValuesYupSchema } from './utils/LoginValueYupSchema';
import { heiColor } from '@/common/ui/heiColor';

export const styles = (theme:any) => ({
    multilineColor:{
        color:'red'
    }
});

const LogIn = () => {
    const form = useForm<LoginFormValues>({
        defaultValues: {
            email:"",
            password:""
        },
        resolver: yupResolver(loginValuesYupSchema)
    });
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isValid } = formState;

    // redirection
    const router = useRouter();

    const onSubmit = async (data:{}) => {
        console.log("connected");
    };
    
    // reset values on submission
    useEffect(() => {
      isSubmitSuccessful && reset(); 
    }, [isSubmitSuccessful, reset])


    return (    
        <Stack alignItems="center" margin="auto"  height="570px" bgcolor={heiColor.blue} >
            <Stack 
                mt="10%"
                alignItems="center"
                boxShadow={`1px 1px 5px ${heiColor.yellow}`}
                p={5}
                borderRadius="2%"
                width="15%"
                bgcolor="white"
            >
                <Typography marginBottom={2} variant="h6" width="100%" textAlign="center"   color={heiColor.blue} >PROJET_EO</Typography>
                <form 
                    action="logIn"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <Stack
                        spacing={2}    
                        mb="8%"
                    >
                        <TextField
                            type="email"
                            label="Email" 
                            size="small"
                            placeholder="hei.roussel.2@gmail.com"
                            helperText={errors.email?.message}
                            {...register("email", {
                                validate: (fieldEnterValue) => {
                                    return fieldEnterValue.slice(0,3).localeCompare("hei") === 0 || "Email should start with hei."
                                }
                            })}
                            sx={{ input:{ color:heiColor.blue } }}
                        >

                        </TextField>
                        <TextField  
                            label="Password" 
                            type="password"
                            size="small"
                            placeholder="chat-app"
                            helperText={
                                errors.password?.message
                            }
                            {...register("password")}
                        >
                        </TextField>
                    </Stack>
                    <Button 
                        color='primary'
                        type="submit"
                        variant="contained"
                        size="small"
                        sx={{ width:"80%", marginBottom:"5", marginLeft:"10%"}}
                    >
                        LOG IN
                    </Button>
                </form>
            </Stack>
        </Stack>
    )
}

export default LogIn;