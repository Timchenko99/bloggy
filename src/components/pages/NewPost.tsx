import { useAddNewPostMutation } from '../../features/api/apiSlice'
import { PostsForm, Card } from '../index'

const NewPost = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation()

  const handleNewPost = async (title: string, body: string) => {
    try {
      await addNewPost({title, body }).unwrap();
    } catch (error) {
      console.error("Failed to create post", error)
    }
  }

  return (
    <Card>
      <PostsForm onSubmit={handleNewPost}/>
    </Card>
  )
}

export default NewPost