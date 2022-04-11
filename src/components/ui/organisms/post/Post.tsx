import React from 'react'
import { TitleStyled } from '../../../index';


interface PostProps {
    title: string;
    body: string;
}

export const Post = ({title, body}: PostProps) => {
    return (
        <div>
            <TitleStyled>{title}</TitleStyled>
            <p>{body}</p>
        </div>
    );
}
