import React from 'react';
import styled from 'styled-components';
import { black, Button, Input, PageHeading, purple, titleFont, white } from '../styles/commonComp';
import { mobile1 } from '../styles/Responsive';


const CreateBlogForm = styled.form`
    width: 70%;
    background-color: ${white};
    border-radius: 1.2rem;
    box-shadow: 1rem 1rem 2rem -0.4rem rgba(103,48,236,0.34);
    margin: 1.5rem auto;
    padding: 3rem;
    flex-direction: column;
    gap: 4rem;

    .input {
        width: 100%;
    }
    ${mobile1({width: '90%'})}
`;

const Label = styled.label`
    /* border: 2px solid blue; */
    font-size: 1.8rem;
    width: 100%;
    font-family: ${titleFont};
    color: ${black};
    display: block;
    margin-bottom: 0.5rem ;
    ${mobile1({marginBottom: '0.8rem'})}
`;

const FileInput = styled(Input)`
  
  &::-webkit-file-upload-button {
    background-color: transparent;
    border: 0;
    color: ${white};
    border: 0.1rem solid ${purple};
    margin-right: 2.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    visibility: hidden;
    position: relative;
  }

  &::before {
    position: absolute;
    content: "Avatar 👤";
    width: 7.5rem;
    height: 2rem;
    border: 0.1rem solid ${purple};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;


const CreateBlog = () => {
    return (
        <>
            <PageHeading>Create Blog</PageHeading>
            <CreateBlogForm className='d-flex'>

                <div  className='input'>
                    <Label htmlFor="title">Title of blog: </Label>
                    <Input type="text" placeholder='Title...' id="title" />
                </div>

                <div className='input'>
                    <Label htmlFor="content">Content of blog: </Label>
                    <Input as={"textarea"} placeholder='Content...' id="content" cols="30" rows="5"></Input>
                </div>

                <FileInput placeholder='Add an Avatar' type={'file'} id='file-input' accept="image/*"></FileInput>

                <Button type='submit'>Publish</Button>

            </CreateBlogForm>
        </>
    )
}

export default CreateBlog