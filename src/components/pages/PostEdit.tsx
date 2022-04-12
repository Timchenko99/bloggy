import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery, useEditPostMutation } from '../../features/api/apiSlice'
import { EditForm } from '../index'

const PostEdit = () => {
  const { id } = useParams();
  const { data: post, isFetching, isSuccess } = useGetPostQuery(id);
  const [editPost] = useEditPostMutation();
  const navigate = useNavigate();

  const handlePostUpdate = async (title: string, body: string) => {
    try {
        if(post){
          await editPost({id: post.id, title, body}).unwrap();
        }
        navigate("/");
    } catch (error) {
        console.error("Cannot update post!", error);
    }
  }

  let content

  if(post && isSuccess){
    content = <EditForm title={post.title} body={post.body} onSubmit={handlePostUpdate} />;
  }else{
    content = <p>Loading...</p>
  }
  return (
    <>
      {content}
    </>
  )
}

export default PostEdit
