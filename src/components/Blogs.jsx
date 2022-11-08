import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase-config';
import BlogCard from './BlogCard';
import infinityGif from '../images/infinity-gif.gif';

const Wrapper = styled.div`
    flex-direction: column;
    gap: 3.5rem;
    min-height: 85vh;
    width: 85%;
    margin: 0 auto;
    padding: 3rem;
`;

const Blogs = () => {

    const colRef = collection(db, "blogs");
    const [blogs, setBlogs] = useState([]);

    //! Realtime Read of blogs
    useEffect(() => {

        const unsub = onSnapshot(colRef, snapshot => {
            setBlogs(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        });

        return () => {
            unsub();
        }

        // eslint-disable-next-line
    }, []);

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