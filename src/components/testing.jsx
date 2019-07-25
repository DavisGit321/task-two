import React, { Component } from 'react';
import axios from "axios";

class Testing extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        {post.title}
                        <p>{post.body}</p>
                    </div>
                )
            })
        ) : (
                <div>
                </div>)

        return (
            <div>{postList}</div>
        );
    }
}

export default Testing;