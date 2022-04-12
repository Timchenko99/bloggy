import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Textarea, AccentButton, ErrorText } from '../../index'
import { Button } from '../atoms/buttons';


interface CommentsFromProps {
  onClick: (body: string) => void;
}

const CommentsForm = ({onClick}: CommentsFromProps) => {
  const [textAreaText, setTextAreaText] = useState("");
  const [textAreaTextError, setTextAreaTextError] = useState("");

  const navigate = useNavigate();


  const onPostPressed = () => {
    if(textAreaText.length === 0 ){
      setTextAreaTextError('The body cannot be empty!');
      return;
    }
    onClick(textAreaText);
    setTextAreaTextError('');
    setTextAreaText('');
  }

  return (
    <div>
      <h3>Comments</h3>
      <Textarea onChange={(e) => setTextAreaText(e.target.value)}/>
      <ErrorText>{textAreaTextError}</ErrorText>
      <AccentButton onClick={onPostPressed}>POST</AccentButton>
      <Button onClick={() => navigate("/")}>CANCEL</Button>
    </div>
  )
}

export default CommentsForm