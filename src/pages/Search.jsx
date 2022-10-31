import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import {  darkPurple, Input, lightPurple, PageHeading, paraFont } from '../styles/commonComp';
import { mobile1 } from '../styles/Responsive';

const Wrapper = styled.div`
    width: 70%;
    margin: 1.5rem auto;
    background-color: ${lightPurple};
    border-radius: 1.2rem;
    margin: 1.5rem auto;
    padding: 3rem;
    flex-direction: column;
    gap: 1.5rem;
    border: 2px solid blue;
    ${mobile1({width: '90%'})}
`;

const SearchBox = styled(Input)`
    padding: 1rem;
`;

const Results = styled.span`
    font-family: ${paraFont};
    font-size: 1.5rem;
    color: ${darkPurple};
    align-self: flex-start;
`;

const Wrapper2 = styled.div`
    width: 100%;
    gap: 2rem;
    flex-direction: column;
`;

const Search = () => {
    return (
        <>  
            <PageHeading>Search for a user</PageHeading>
            <Wrapper className='d-flex'>
                <SearchBox type="text" placeholder='Search..' />
                <Results>12 Result found</Results>

                <Wrapper2 className='d-flex' >
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </Wrapper2>

            </Wrapper>
        </>
    )
}

export default Search