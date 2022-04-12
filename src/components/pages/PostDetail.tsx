import { useParams } from 'react-router-dom';
import { useGetPostQuery, useAddNewCommentMutation } from '../../features/api/apiSlice';
import { CommentsList, CommentsForm } from '../index';


const PostDetail = () => {
  const {id} = useParams();
  const { data: post, isFetching, isSuccess } = useGetPostQuery(id);
  const [addNewComment] = useAddNewCommentMutation();

  const handleNewComment = async (body: string) => {
    try {
      await addNewComment({postId: Number(id), body }).unwrap();
    } catch (error) {
      console.error("Failed to create comment", error)
    }
  }

  let content
  
  if (isFetching) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <CommentsForm onClick={handleNewComment}/>
        {post?.comments && <CommentsList comments={post.comments} />}
      </article>
    )
  }

  return <section>{content}</section>
}


export default PostDetail