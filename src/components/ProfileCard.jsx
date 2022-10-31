import React from 'react';
import styled from 'styled-components';
import { Button, Heading4, purple, titleFont, white } from '../styles/commonComp';
import { mobile1 } from '../styles/Responsive';


const ProfileCard = ({ followingCard }) => {

    const Wrapper = styled.div`
        width: ${followingCard ? '95%' : '83%'};
        background-color: ${white};
        padding: 1rem;
        box-shadow: 0.8rem 0.8rem 1.6rem -0.4rem #3c3c3c56;
        margin: 0 auto;
        border-radius: 1rem;
        justify-content: space-between;
        border: 2px solid red;
        ${mobile1({width: '95%'})}
    `;

    const UserInfo = styled.div`
        width: 70%;
        justify-content: flex-start;
        gap: ${followingCard ? '1.5rem': '2.5rem'};
    `;

    const Image = styled.img`
        width: ${followingCard ? '5rem': '6rem'};;
        height: ${followingCard ? '5rem': '6rem'};;
        object-fit: cover;
        border-radius: 50%;
    `;

    const Wrapper2 = styled.div`
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
        overflow: hidden;
    `;

    const Username = styled(Heading4)`
        font-size: ${followingCard ? '1.6rem': '2rem'};;
        text-align: left;
    `;

    const UserId = styled.h5`
        color: gray;
        font-family: ${titleFont};
        font-size: ${followingCard ? '1.4rem': '1.6rem'};
        font-weight: lighter;
    `;

    const FollowBtn = styled(Button)`   
        width: 20%;
        background-color: ${purple};
        gap: ${followingCard ? '0.5rem': '1rem'};;
        font-size: ${followingCard ? '1.4rem': '1.8rem'};;
    `;

    return (
        <>
            <Wrapper className='d-flex'>

                <UserInfo className='d-flex' style={{ width: '70%' }} >
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVQbGLNBDlWf1LNwHcaQ4DYUkXC9IXnTr5A&usqp=CAU" alt="profile-image" />

                    <Wrapper2 className='d-flex'>
                        <Username>Ayush Verma</Username>
                        <UserId>ayush@gmail.com</UserId>
                    </Wrapper2>
                </UserInfo>

                <FollowBtn className='d-flex'>Follow</FollowBtn>

            </Wrapper>
        </>
    )
}

export default ProfileCard