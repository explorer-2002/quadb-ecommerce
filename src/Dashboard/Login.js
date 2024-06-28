import styled from "styled-components";

import {useForm} from 'react-hook-form'
import { loginUser } from '../apis/apiUser';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../User/userSlice";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function Login() {
    const navigate = useNavigate()

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch()

    async function onSubmit(data){
        // mutate({...data,image:data.image[0]})
        console.log(data)
        const res = await loginUser(data);

        console.log(res);

        if(res.name){
            toast.success("login successful");
            dispatch(addUser(res))
            navigate("/products")
        }

        else{
          console.log("There was an error")
        }
    }

    if(localStorage.getItem('token'))
      navigate("/products")

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <Input type="email" placeholder="Email" {...register("email",{
                required:"This field is mandatory"
          }) } />

          <Input type="password" placeholder="Password" {...register("password",{
                required:"This field is mandatory"
          }) } />

          <Button type="submit">Login</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  )
}

export default Login;
