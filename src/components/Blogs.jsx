import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import infinityGif from '../images/infinity-gif.gif';
import { useContext } from 'react';
import { BlogsContext } from '../context/BlogsContext';

const Wrapper = styled.div`
    flex-direction: column;
    gap: 3.5rem;
    min-height: 85vh;
    width: 85%;
    margin: 0 auto;
    padding: 3rem;
`;

const Blogs = () => {

    const blogs = useContext(BlogsContext);

    return (
        <>
            {!blogs.length ? <img src={infinityGif} alt="" className='loading-img' />
            :   <Wrapper className='d-flex' >
                    {

                        blogs.map((ele) => {
                            return (
                                <BlogCard key={ele.id} title={ele.title} content={ele.content} image={ele.image} adminName={ele.adminName} adminID={ele.adminID} date={ele.date}
                                    likes={ele.likes} docID={ele.id} />
                            )
                        })
                    }
                </Wrapper>}
        </>
    )
}

export default Blogs