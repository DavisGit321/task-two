import React, { Component } from 'react';
import axios from "axios";

class Bullet extends Component {
    state = {
        bullet: []
    }

    componentDidMount() {
        axios.get("/rec/bullet.json")
            .then(res => {
                this.setState({
                    bullet: res.data
                })
            })

    }

    render() {
        const { bullet } = this.state;
        const bulletList = bullet.map(bul => {
            return bul.bullet
        })

        return (
            bulletList.map((bul) => (
                bul.map((bull, index) => {
                    return <li key={index}>{bull}</li>
                })

            ))

        );
    }
}

export default Bullet;


