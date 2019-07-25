import React, { Component } from 'react';
import axios from "axios";

class Akti extends Component {
    state = {
        row: []
    }

    componentDidMount() {
        axios.get("/rec/akti.json")
            .then(res => {
                this.setState({
                    row: res.data
                })
            })

    }

    render() {
        const { row } = this.state;
        const rowList = row.map(row => {
            return (
                <div className="bod2-text" key={row.id}><a className="link-type4" href="" > {row.text} </a>
                    <br />{row.year}
                </div>
            )
        })

        return (<React.Fragment>{rowList}</React.Fragment>);
    }
}

export default Akti;
