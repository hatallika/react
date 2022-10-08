import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/reducers/postsReducer/postsReducer";
import Posts from "../components/Posts";
import {getLoadingPosts, getLoadingPostsError, getPostSelector} from "../redux/selectors";

const PostsPage = () => {
    const loading = useSelector(getLoadingPosts);
    const error = useSelector(getLoadingPostsError);

    const posts = useSelector(getPostSelector);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    if(error){
        return <div>

                <h3>Error</h3>
                <span>Ошибка: {error}</span>
                <button onClick={()=>dispatch(getPosts())}>Retry</button>

        </div>
    }


    if(loading){
        return <div>Идет загрузка...</div>
    }

    return (
        <>
            <h2>Posts</h2>
            {posts.map(post => <div key={post.id}>
                <Posts post={post}/>
            </div>)}

        </>
    );
};

export default PostsPage;