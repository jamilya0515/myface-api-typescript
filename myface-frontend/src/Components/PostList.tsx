import { useEffect, useState } from 'react';


type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    profileImageUrl: string,
    coverImageUrl: string
}

type Post = {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: User
}

type PostList = {
    results: Array<Post>;
};


function PostList() {
    const [postListData, setPostListData] = useState<PostList>();
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(result => setPostListData(result));
    }, []);

    if (!postListData) {
        //add a more useful error message that checks 200 status
        return <div>Waiting for data!</div>
        }
    else {
        return <div>
        <h1>This is the post page</h1> 
        {postListData?.results[0].postedBy.email}
        </div>
        } 
}

export default PostList;

