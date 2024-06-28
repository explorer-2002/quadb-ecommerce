import {toast} from 'react-hot-toast';
import styled from "styled-components";
import {useForm} from 'react-hook-form'

import { useNavigate } from 'react-router-dom';
import { createUser } from '../apis/apiUser';

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

function Signup() {

    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate()

    function onSubmit(data){
        // mutate({...data,image:data.image[0]})
        console.log(data)
        const res = createUser(data);

        if(res){
            toast.success("User successfully created");
            navigate("/login")
        }

    }

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Username" id="name" {...register("name",{
                required:"This field is mandatory"
          }) } />

          <Input type="email" placeholder="Email" id="email" {...register("email",{
                required:"This field is mandatory"
          }) } />

          <Input type="password" placeholder="Password" id="password" {...register("password",{
                required:"This field is mandatory"
          }) } />

          <Button type="submit">Sign Up</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  )
}

export default Signup
