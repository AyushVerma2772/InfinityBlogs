import React from 'react';
import styled from 'styled-components';
import { darkPurple, Heading3, lightPurple } from '../styles/commonComp';
import BlogCard from './BlogCard';
import { FaUserCheck } from "react-icons/fa";
import { mobile1 } from '../styles/Responsive';


const RightBox = styled.div`
    width: 68%;
    height: inherit;
    ${mobile1({ width: '100%', height: '97vh', position: 'absolute', top: '0', left: '0' })}
`;

const Header = styled.header`
    height: 6rem;
    padding-left: 4rem;
    border-bottom: 0.2rem solid ${darkPurple};
    justify-content: flex-start;
    gap: 1.5rem;

    h3 {
        text-align: left;
        color: ${darkPurple};
        ${mobile1({ paddingLeft: '4rem', borderLeft: `0.2rem solid ${darkPurple}` })}
        z-index: 2;
    }

    .following-icon {
        font-size: 3rem;
        color: ${lightPurple};
        z-index: 99 ;
        cursor: pointer;
        display: none;
        ${mobile1({ display: 'block' })}
    }

    
`;

const BlogsContainer = styled.div`
    width: 100%;
    z-index: 2;
    height: calc(90vh - 6rem);
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.8rem;
    }
  
    &::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: ${darkPurple};
        border: 0.2rem solid #dafcfc;
    }

    ${mobile1({ width: '85%', margin: '0 auto' })}
`;

const Wrapper = styled.div`
    margin: 3.5rem 0;
`;


const ProfileRight = ({ setOpenLeft, openLeft }) => {


    return (
        <>
            <RightBox>
                <Header className='d-flex' >
                    <FaUserCheck className='following-icon' onClick={e => setOpenLeft(!openLeft)} />
                    <Heading3>Your Blogs</Heading3>
                </Header>

                <BlogsContainer >
                    <Wrapper className='d-flex'><BlogCard profileBlog={true} /></Wrapper>
                    <Wrapper className='d-flex'><BlogCard profileBlog={true} /></Wrapper>
                    <Wrapper className='d-flex'><BlogCard profileBlog={true} /></Wrapper>
                    <Wrapper className='d-flex'><BlogCard profileBlog={true} /></Wrapper>
                    <Wrapper className='d-flex'><BlogCard profileBlog={true} /></Wrapper>
                </BlogsContainer>
            </RightBox>
        </>
    )
}

export default ProfileRight