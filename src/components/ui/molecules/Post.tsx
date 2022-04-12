import { EditFilled, DeleteFilled } from "@ant-design/icons";
import styled from "styled-components";
import { IPost } from "../../../types";
import { Button, Divider, TitleStyled, StyledLink, Card } from "../../index";
import { useDeletePostMutation } from '../../../features/api/apiSlice'
import { useNavigate } from "react-router-dom";

interface PostProps {
  post: IPost;
}

export const Post = ({ post }: PostProps) => {
    const [deltePost] =  useDeletePostMutation();
    const navigate = useNavigate();
  
    return (
    <Card>
      <StyledDiv>
        <StyledLink to={`/details/${post.id}`}>
          <TitleStyled>{post.title}</TitleStyled>
        </StyledLink>

        <p>{post.body}</p>
        <Divider />
        <Button onClick={() => navigate(`/edit/${post.id}`)}>
          <EditFilled />
          EDIT
        </Button>
        <Button onClick={() => deltePost(post.id)}>
            <DeleteFilled />
            DELETE
        </Button>
      </StyledDiv>
    </Card>
  );
};

const StyledDiv = styled.div`
  margin-block: 1.7rem;
`;
