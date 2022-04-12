import { IComment } from '../../../types'
import { Card } from '../../index'

interface CommentProps {
  comment: IComment;
}

const Comment = ({comment}: CommentProps) => {
  return (
      <Card>
        <p>{comment.body}</p>
      </Card>
  )
}

export default Comment