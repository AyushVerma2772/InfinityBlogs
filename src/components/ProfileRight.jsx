import React from 'react';
import styled from 'styled-components';
import { darkPurple, Heading3 } from '../styles/commonComp';
import BlogCard from './BlogCard';
import { FaUserCheck } from "react-icons/fa";
import { mobile1 } from '../styles/Responsive';
import infinityGif from '../images/infinity-gif.gif';
import { useContext } from 'react';
import { BlogsContext } from '../context/BlogsContext';

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
        color: ${darkPurple};
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
    ${mobile1({ height: 'calc(97vh - 6rem)' })}
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.8rem;
        /* display: none; */
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


const ProfileRight = (props) => {

    const { setOpenLeft, openLeft, userID } = props;
    const blogs = useContext(BlogsContext);

    return (
        <>
            <RightBox>
                <Header className='d-flex' >
                    <FaUserCheck className='following-icon' onClick={e => setOpenLeft(!openLeft)} />
                    <Heading3>Your Blogs</Heading3>
                </Header>

                {
                    !blogs.length ? <img src={infinityGif} alt="" className='loading-img' /> :
                        <BlogsContainer >
                            {
                                blogs.map((ele) => {
                                    return (
                                        ele.adminID === userID && <Wrapper key={ele.id} className='d-flex'>
                                            <BlogCard profileBlog={true}  title={ele.title} content={ele.content} image={ele.image} adminName={ele.adminName} adminID={ele.adminID} date={ele.date}
                                                likes={ele.likes} docID={ele.id} />
                                        </Wrapper>

                                    )
                                })
                            }

                        </BlogsContainer>
                }
            </RightBox>
        </>
    )
}

export default ProfileRight