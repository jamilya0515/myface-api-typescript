import { useEffect, useState } from 'react';

type Post = [
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    userId: number 
]

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    profileImageUrl: string,
    coverImageUrl: string,
    posts: Post;
}

type UserList = {
    results: Array<User>;
}

function UserList() {
    const [userListData, setUserListData] = useState<UserList>();
    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(result => setUserListData(result));
    }, []);

    if (!userListData) {
        //add a more useful error message that checks 200 status
        return <div>Waiting for user data!</div>
        }

    else {
            return  <div>
            <h1>This is the user page</h1>
            <ul>
            {userListData.results.map(user => (
                <li><div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                    <img src={user.profileImageUrl} alt="User profile image" />
                    <p>Posted by: {user.email}</p>
                </div>
                </li>))}
            </ul>
            </div>
            }
}

export default UserList;