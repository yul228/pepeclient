import { toggleFilters, toggleMenu } from '@/store/reducers/toggleSlice';
import { setPage } from '@/store/reducers/paginationSlice';
import { setSearch, setVisible } from '@/store/reducers/searchSlice';
import { addPost, addComment, setPosts } from '@/store/postsSlice';

export {
	toggleMenu,
	setSearch,

	setPage,
	
	toggleFilters,
	setVisible,
	
	addPost,       
    addComment,    
    setPosts,
};