import React from 'react';
import styled from 'styled-components';
import { Heading2, purple, white, Input, Button, green, red, titleFont } from '../styles/commonComp';
import  loadingGif  from '../images/loading-gif.gif';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const LoginCard = styled.div`
  padding: 2rem;
  width: 40rem;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${white};
  border-radius: 1.5rem;
  box-shadow: 1.1rem 1.1rem 2.2rem -0.4rem rgba(103,48,236,0.34);
  border: 1px solid rgba(103,48,236,0.34);
  `;

const LoginHeading = styled(Heading2)`
  color: ${purple};
`;

const LoginForm = styled.form`
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  span {
    color: ${red};
    font-size: 1.6rem;
  }
`;

const LoginButton = styled(Button)`
  background-color: ${green};
  color: ${white};
`;

const LoadingImg = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const Wrapper2 = styled.div`
  width: 100%;
  p {
    font-family: ${titleFont};
    font-size: 1.5rem;
  }
`;

const SignupBtn = styled(Link)`
  text-decoration: none;
  color: ${white};
  font-size: 1.4rem;
  font-family: ${titleFont};
  padding: 0.4rem 1rem;
  background-color: ${green};
  border-radius: 0.4rem;
  margin-left: 2.5rem;
`;

const Login = () => {
  return (
    <>
      <Wrapper className='d-flex'>
        <LoginCard className='d-flex' >
          <LoginHeading>Login</LoginHeading>

          <LoginForm className='d-flex' >
            <Input type="email" id='email' placeholder='@email.com' />
            <Input type="password" id='password' placeholder='password' />

            {/* <span><strong>Error !!!&nbsp;&nbsp;&nbsp;</strong>Lorem ipsum dolor sit amet. </span> */}

            <LoginButton type="submit"><LoadingImg src={loadingGif} alt="" style={{display: "none"}} /> Login</LoginButton>
          </LoginForm>

          <Wrapper2 className='d-flex' >
            <p>Not Registered Yet ? </p>
            <SignupBtn to='/signup'>Sign up</SignupBtn>
          </Wrapper2>


        </LoginCard>
      </Wrapper>
    </>
  )
}

export default Login