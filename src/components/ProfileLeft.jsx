import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { black, darkPurple, Heading4, Input, lightPurple, titleFont, white } from '../styles/commonComp';
import { BsFillPencilFill } from "react-icons/bs";
import ProfileCard from '../components/ProfileCard';
import { mobile1 } from '../styles/Responsive';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';
import infinityGif from '../images/infinity-gif.gif';
import { updateProfile } from 'firebase/auth';

const LeftBox = styled.div`
    width: 32%;
    height: inherit;
    border: 0;
    border-right: 0.2rem solid ${darkPurple};
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    ${mobile1({ position: 'absolute', width: '100%', backgroundColor: `${lightPurple}`, left: '-100%', height: '97vh', top: '0' })}
`;

const UserInfo = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 1.5rem;
    height: 21rem;
    ${mobile1({ gap: '2rem', height: '30rem', marginBottom: '2rem' })}
`;

const UserNameBox = styled.div`
    width: 100%;
    gap: 1.5rem;
    ${mobile1({ height: '5rem' })}
`;

const Image = styled.img`
    width: 12rem;
    height: 12rem;
    object-fit: fill;
    border-radius: 1rem;
    border: 0.1rem solid ${darkPurple};
    ${mobile1({ height: '13rem', width: '13rem' })}
`;

const UserName = styled(Heading4)`
    font-size: 2.3rem;
    max-width: 85%;
    overflow: hidden;
    text-align: center;
    ${mobile1({ color: `${white}`, fontSize: '2.8rem' })}
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
    ${mobile1({ height: '3.5rem' })}
`;

const UserId = styled.h5`
    color: #494949;
    font-family: ${titleFont};
    font-size: 1.7rem;
    font-weight: lighter;
    margin-bottom: 0.5rem;
    ${mobile1({ color: `${white}` })}
    ${mobile1({ fontSize: '2rem' })}
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
    ${mobile1({ margin: '2.3rem 0' })}
`;


const ProfileLeft = (props) => {
    const { openLeft, userID } = props;
    const currentUser = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const colRef = collection(db, "users");
    const [userData, setUserData] = useState(null)
    const docRef = doc(db, "users", userID);
    const [search, setSearch] = useState("");

    //! Fetching data of  userID data
    useEffect(() => {
        
        const unsub = onSnapshot(docRef, (doc) => {
            // console.log(doc.data().following);
            setUserData(doc.data());
        });

        return () => {
            unsub();
        }
        // eslint-disable-next-line
    }, [userID]);


    //! Fetching data of all users
    useEffect(() => {
        const unsub = onSnapshot(colRef, snapshot => {
            setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        });

        return () => {
            unsub();
        }

        // eslint-disable-next-line
    }, [])

    //! edit name

    const handleEdit = async () => {
        const newName = prompt("Enter new name");

        if (newName) {
            await updateProfile(currentUser, {
                displayName: newName
            })  
            window.location.reload();
        }

        else {
            alert("Name can'nt be empty")
        }
    }




    return (
        <>
            <LeftBox className={`${openLeft ? 'open-left' : ''}`} >
                {
                    !userData ? <img src={infinityGif} alt="" className='loading-img' />  :

                <>
                    <UserInfo className='d-flex'>
                        <Image src={userData?.photoURL} alt="profile-image" />
                        <UserNameBox className='d-flex'>
                            <UserName>{currentUser.displayName}</UserName>

                            {currentUser.uid === userData?.uid && <EditBtn><BsFillPencilFill className='edit-icon' onClick={handleEdit} /></EditBtn>}

                        </UserNameBox>
                        <UserId>{userData?.email}</UserId>
                    </UserInfo>

                    <Input type="text" placeholder='Search Following...' style={{ width: '95%', margin: '0 auto', display: 'block' }} value={search} onChange={e => setSearch(e.target.value)}  />

                    <SearchBox >

                        {
                            users.filter((e) => e.displayName.toLowerCase().includes(search.toLowerCase())).map((ele) => {
                                return (
                                    userData.following.includes(ele.uid) &&
                                    <FollowingCard key={ele.id}>
                                        <ProfileCard followingCard={true} displayName={ele.displayName} photoURL={ele.photoURL} email={ele.email} userID={ele.uid} />
                                    </FollowingCard>
                                )
                            })

                        }

                    </SearchBox>
                </>
                }

            </LeftBox>
        </>
    )
}

export default ProfileLeft