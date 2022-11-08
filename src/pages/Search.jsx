import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase-config';
import { Input, lightPurple, PageHeading } from '../styles/commonComp';
import { mobile1 } from '../styles/Responsive';
import infinityGif from '../images/infinity-gif.gif';


const Wrapper = styled.div`
    width: 70%;
    margin: 1.5rem auto;
    background-color: ${lightPurple};
    border-radius: 1.2rem;
    margin: 1.5rem auto;
    padding: 3rem;
    flex-direction: column;
    gap: 1.5rem;
    ${mobile1({ width: '90%' })}
`;

const SearchBox = styled(Input)`
    padding: 1rem;
`;


const Wrapper2 = styled.div`
    margin-top: 2rem;
    width: 100%;
    gap: 2rem;
    flex-direction: column;
`;

const Search = () => {

    const [users, setUsers] = useState([]);
    const currentUser = useContext(AuthContext);
    const colRef = collection(db, "users");
    const [search, setSearch] = useState("");

    //! Realtime Read of todos
    useEffect(() => {
        const unsub = onSnapshot(colRef, snapshot => {
            setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        });

        return () => {
            unsub();
        }

        // eslint-disable-next-line
    }, [])



    return (
        <>
            <PageHeading>Search for a user</PageHeading>
            <Wrapper className='d-flex'>
                <SearchBox type="text" placeholder='Search..' value={search} onChange={e => setSearch(e.target.value)} />

                {
                    !users.length ? <img src={infinityGif} alt="" className='loading-img' /> :
                        <Wrapper2 className='d-flex' >
                            {
                                users.filter((e) => e.displayName.toLowerCase().includes(search.toLowerCase())).map((ele) => {
                                    return (
                                        ele.id !== currentUser.uid && <ProfileCard key={ele.id} displayName={ele.displayName} photoURL={ele.photoURL} email={ele.email} userID={ele.uid} />
                                    )
                                })
                            }
                        </Wrapper2>
                }

            </Wrapper>
        </>
    )
}

export default Search