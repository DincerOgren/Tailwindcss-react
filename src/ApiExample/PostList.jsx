import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from './store/actions/postActions';


function PostList() {

    const dispatch = useDispatch();
    const { post, loading ,error } = useSelector(state => state.posts);

    useEffect(()=>{
        dispatch(fetchPosts());


    },[dispatch])

    if (loading){
        return <p> Loading... </p>
    }

    if (error){
        return <p> Error: {error}</p>
    }

    return (
        <div >
            <h2>Posts </h2>
             <ul>
                {post.map((pst)=>(
                    <li key = {pst.id}> 
                        <strong>{pst.title}</strong>
                        <p>{pst.body}</p>
                    </li>
                ))}
             </ul>
        </div>
    )
}

export default PostList
