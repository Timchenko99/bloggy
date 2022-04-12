import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../types";
import { Textarea, AccentButton, Input, ErrorText } from "../../index";
import { Button } from "../atoms/buttons";

interface EditProps {
    title: string;
    body: string;
  onSubmit: (title: string, body: string) => void;
}

const EditForm = ({ onSubmit, title, body }: EditProps) => {
  const [inputText, setInputText] = useState(title);
  const [inputTextError, setInputTextError] = useState("");
  const [textAreaText, setTextAreaText] = useState(body);
  const [textAreaTextError, setTextAreaError] = useState("");

  const navigate = useNavigate();
  
  const onCancelPressed = () => {
      navigate("/");
  }

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

  const onEditPressed = () => {
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
      <AccentButton onClick={onEditPressed}>
        APPLY
      </AccentButton>
        <Button onClick={()=> navigate('/')}>CANCEL</Button>
    </div>
    
  );
};

export default EditForm;
