import React, { useCallback, useRef } from 'react'
import {  FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useHistory, Link} from 'react-router-dom';
import * as Yup from 'yup';


import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from "../../components/Input"
import Button from "../../components/Button"

import { Container, Content, AnimationContainer} from './styles'

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  
  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try{ 

        formRef.current?.setErrors({});
        
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail Required').email('E-mail Invalid'),
          password: Yup.string().required('Password Required ')
        });

        await schema.validate(data, {
          abortEarly: false
        })
         
        await signIn({ email: data.email, password: data.password});

        history.push('/test');
      }catch(err){
        if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication Error',
          description: 'There was an error signing in, check your credentials.'
        })
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h1>
            Tog.Design
          </h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Sign In</h1>

            <Input name='email' icon={FiMail} placeholder="E-mail" />

            <Input name='password' icon={FiLock} type='password' placeholder='Password' />

            <Link to='/teste'>Forgot you password?</Link> 

            <Button type='submit'>SignIn</Button>

          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );

};

export default SignIn;