import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Posts(props) {
    const [posts, setPosts] = useState ('');
    useEffect(() => {
        axios.get('http:localhost:3400/posts')
        .then(res => {
            console.log('RES: ', res);
        
        setPosts(res.data.posts);
        })
    })
    return(
        <div>
            <h1> Posts </h1>
        </div>
    );
}

export default Posts;