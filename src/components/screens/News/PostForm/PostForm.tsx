import { useState, FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@/store/postsSlice';
import { Button } from '@/UI/Button/Button';
import styles from './PostForm.module.scss'; // Создайте этот файл со стилями

interface PostFormProps {
    className?: string;
}

const PostForm: FC<PostFormProps> = ({ className }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Валидация
        if (title.trim().length < 3) {
            setError('Title must be at least 3 characters long');
            return;
        }
        
        if (content.trim().length < 10) {
            setError('Content must be at least 10 characters long');
            return;
        }

        try {
            const newPost = {
                id: Date.now(),
                title: title.trim(),
                content: content.trim(),
                comments: [],
            };
            
            dispatch(addPost(newPost));
            
            // Очистка формы после успешного добавления
            setTitle('');
            setContent('');
            setError('');
        } catch (err) {
            setError('Failed to add post. Please try again.');
        }
    };

    return (
        <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className={styles.input}
                    required
                    minLength={3}
                />
            </div>

            <div className={styles.inputGroup}>
                <textarea
                    placeholder="Enter content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className={styles.textarea}
                    required
                    minLength={10}
                    rows={4}
                ></textarea>
            </div>

            <Button 
                type="submit" 
                className={styles.button}
                disabled={!title.trim() || !content.trim()}
            >
                Add Post
            </Button>
        </form>
    );
};

export default PostForm;
