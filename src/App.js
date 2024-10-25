// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {error ? (
                <div className="error">Failed to load posts: {error}</div>
            ) : (
                posts.map(post => (
                    <div key={post.id} className="post">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
