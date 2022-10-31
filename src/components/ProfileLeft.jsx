import React from 'react';
import styled from 'styled-components';
import { black, darkPurple, Heading4, Input, titleFont, white } from '../styles/commonComp';
import { BsFillPencilFill } from "react-icons/bs";
import ProfileCard from '../components/ProfileCard';
import { mobile1 } from '../styles/Responsive';

const LeftBox = styled.div`
    width: 32%;
    height: inherit;
    border: 0;
    border-right: 0.2rem solid ${darkPurple};
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    ${mobile1({ position: 'absolute', width: '100%', backgroundColor: `${darkPurple}`, left: '-100%', height: '95vh', top: '0'})}
`;

const UserInfo = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 1.5rem;
    height: 21rem;
    ${mobile1({gap: '2rem', height: '25rem', marginBottom: '2rem'})}
`;

const UserNameBox = styled.div`
    width: 100%;
    gap: 1.5rem;
`;

const Image = styled.img`
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 1rem;
    border: 0.1rem solid ${darkPurple};
`;

const UserName = styled(Heading4)`
    font-size: 2.3rem;
    max-width: 85%;
    max-height: 2.8rem;
    overflow: hidden;
    text-align: center;
    ${mobile1({color: `${white}`})}
`;

const EditBtn = styled.button`
    width: 10%;
    height: 2.8rem;
    cursor: pointer;
    color: ${black};
    background-color: #ffc107;
    border: 0;
    border-radius: 0.7rem;
    .edit-icon {
        font-size: 1.6rem;
    }
`;

const UserId = styled.h5`
    color: #494949;
    font-family: ${titleFont};
    font-size: 1.7rem;
    font-weight: lighter;
    margin-bottom: 0.5rem;
    ${mobile1({color: `${white}`})}
`;

const SearchBox = styled.div`
    height: calc(90vh - 25rem);
    padding: 1rem;
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0.8rem;
    }
  
    &::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: ${darkPurple};
        border: 0.2rem solid #f9e7fe;
    }
`;

const FollowingCard = styled.div`
    margin: 1.5rem 0;
`;


const ProfileLeft = ({ openLeft }) => {
    return (
        <>
            <LeftBox className={`${openLeft ? 'open-left': ''}`} >
                <UserInfo className='d-flex'>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVQbGLNBDlWf1LNwHcaQ4DYUkXC9IXnTr5A&usqp=CAU" alt="profile-image" />
                    <UserNameBox className='d-flex'>
                        <UserName>Ayush </UserName>
                        <EditBtn><BsFillPencilFill className='edit-icon' /></EditBtn>
                    </UserNameBox>
                    <UserId>ayushhathiwan@gmail.cpm</UserId>
                </UserInfo>


                <Input type="text" placeholder='Search Following...' style={{ width: '95%', margin: '0 auto', display: 'block' }} />
                <SearchBox >
                    <FollowingCard><ProfileCard followingCard={true} /></FollowingCard>
                    <FollowingCard><ProfileCard followingCard={true} /></FollowingCard>
                    <FollowingCard><ProfileCard followingCard={true} /></FollowingCard>
                    <FollowingCard><ProfileCard followingCard={true} /></FollowingCard>
                </SearchBox>

            </LeftBox>
        </>
    )
}

export default ProfileLeft