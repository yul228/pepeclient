import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import PostComponent from '@/screens/News/Post/Post';
import PostForm from '@/screens/News/PostForm/PostForm';
import { Post } from '@/types/post';
import styles from './News.module.scss';

interface NewsProps {
    initialPosts?: Post[];
}

const News: FC<NewsProps> = () => {
    const allPosts = useSelector((state: RootState) => state.posts.posts);

    return (
        <div className={styles.newsContainer}>
            <h1 className={styles.title}>Новости</h1>
            <PostForm />
            <div className={styles.postsGrid}>
                {allPosts.map((post: Post) => (
                    <PostComponent key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default News;