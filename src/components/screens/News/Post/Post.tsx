import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addComment } from '@/store/postsSlice';
import { Button } from '@/UI/Button/Button';
import styles from './Post.module.scss';

interface Comment {
  id: number;
  text: string;
  name: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface PostProps {
  post: Post;
}

const Post = ({ post }: PostProps) => {
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      text: commentText,
      name: 'Anonymous',
    };
    dispatch(addComment({ postId: post.id, comment: newComment }));
    setCommentText('');
  };

  return (
    <div className={styles['post-container']}>
      <div className={styles['post-header']}>
        <h2>{post.title}</h2>
      </div>
      <p className={styles['post-content']}>{post.content}</p>
      <div className={styles['comments-section']}>
        <h3>Comments</h3>
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>
              <span>{comment.text}</span> - <span>{comment.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={handleCommentSubmit}
        className={styles['comment-form']}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <Button type="submit">Comment</Button>
      </form>
    </div>
  );
};

export default Post;
