import React from 'react'
import {Button} from '../ButtonElement'
import { 
    Container, 
   
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Text2

} from './LoginpageElements'
import logo from '../../images/logo.png'
const Loginpage = () => {
    return (
        <Container>
        <FormWrap>
            <Icon to="/">    <img style={{height:"150px", width:"200px"}} src={logo}/> </Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Login to your Account</FormH1>
                    <FormInput 
                    type="email"
                    placeholder="Email"  
                  
                    />
                    <FormInput 
                    type="password"  
                    placeholder="Password"
                    />
                   
                   
                    <Button type="submit"
            
                    >Login</Button>
                    
                  
                  
                </Form>
               
                    <Text>Forget Password</Text>
            </FormContent>
        </FormWrap>
    </Container>
    )
}

export default Loginpage
