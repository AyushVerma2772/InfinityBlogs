import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileLeft from '../components/ProfileLeft';
import ProfileRight from '../components/ProfileRight';
import { mobile1 } from '../styles/Responsive';

const Wrapper = styled.div`
    max-width: 100%;
    height: 90vh;
    ${mobile1({ position: 'relative' })}
`;

const Profile = () => {

    const [openLeft, setOpenLeft] = useState(false);

    return (
        <>
            <Wrapper className='d-flex'>
                <ProfileLeft openLeft={openLeft} />
                <ProfileRight setOpenLeft={setOpenLeft} openLeft={openLeft} />
            </Wrapper>
        </>
    )
}

export default Profile