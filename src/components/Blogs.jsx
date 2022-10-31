import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const Wrapper = styled.div`
    flex-direction: column;
    gap: 3.5rem;
    min-height: 85vh;
    width: 85%;
    margin: 0 auto;
    padding: 3rem;
`;

const Blogs = () => {
    return (
        <>
            <Wrapper className='d-flex' >
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Wrapper>
        </>
    )
}

export default Blogs