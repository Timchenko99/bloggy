import { useState, useEffect } from "react";
import { IPost } from "../../../types";
import { Textarea, AccentButton, Input, ErrorText } from "../../index";

interface PostProps {
  onSubmit: (title: string, body: string) => void;
}

const PostsForm = ({ onSubmit }: PostProps) => {
  const [inputText, setInputText] = useState("");
  const [inputTextError, setInputTextError] = useState("");
  const [textAreaText, setTextAreaText] = useState("");
  const [textAreaTextError, setTextAreaError] = useState("");

  const clearInput = () => {
    setInputTextError("");
    setTextAreaError("");

    setInputText('');
    setTextAreaText('');
  }

  const validateInputs = () => {
    let error = false;
    if(inputText?.length === 0){
      error = true;
      setInputTextError("The title cannot be empty!");
    }
    if(textAreaText?.length === 0 ){
      error = true;
      setTextAreaError("The body cannot be empty!");
    }

    return error;
  }

  const onCreatePressed = () => {
    const inputsAreInvalid = validateInputs();
    if(inputsAreInvalid) return;
    
    onSubmit(inputText, textAreaText);
    clearInput();
  }

  let content;

  return (
  
    <div>
      <h4>Post Title</h4>
      <Input onChange={(e) => setInputText(e.target.value)} value={inputText}/>
      <ErrorText>{inputTextError}</ErrorText>
      <h4>Post Body</h4>
      <Textarea onChange={(e) => setTextAreaText(e.target.value)} value={textAreaText}/>
      <ErrorText>{textAreaTextError}</ErrorText>
      <AccentButton onClick={onCreatePressed}>
        CREATE
      </AccentButton>
    </div>
    
  );
};

export default PostsForm;
