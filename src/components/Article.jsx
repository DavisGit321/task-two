import React, { Component } from 'react';
import Table from "./Table";
import Bullet from "./Bullet";
import axios from "axios";
class Article extends Component {
    state = {
        post: [{

        }]
    }

    componentDidMount() {
        axios.get("/rec/article.json")
            .then(res => {
                this.setState({
                    post: res.data
                })
            })

    }

    render() {
        const { post } = this.state;
        const title = post.map(post => {
            if (post.title) {
                return <React.Fragment key={post.id}>{post.title}</React.Fragment>
            }
            return null;


        })

        const body = post.map(post => {
            if (post.body) {
                return <p key={post.id}>{post.body}</p>
            }
        })

        return (
            <article>
                <div className="main2">

                    <div className="main-top">
                        <h1>{title}</h1>
                        <a className="link-uni salidz" href="">Salīdzini komercdarbību veidus ›</a>
                    </div>
                    <hr />
                    <div className="main">
                        <div className="main-text">
                            {body}
                            <ul>
                                <Bullet />
                            </ul>
                        </div>
                        <div className="main-text2">
                            <div className="box1">
                                Dibini jau tagad izmantojot <br /> e-pakalpojumu
                <a className="link-reg" href=""><div className="button1">REĢISTRĒT
                </div></a>
                            </div>
                            <Table />
                        </div>

                    </div>
                </div>
            </article>);
    }
}

export default Article;