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
                <div className="bod2-text"><a className="link-type4" href="" > {row.text} </a>
                    <br />{row.year}
                </div>
            )
        })

        return (<React.Fragment>{rowList}</React.Fragment>);
    }
}

export default Akti;

/*
                        <div className="bod2-text"><a className="link-type4" href="" > Noteikumi par valsts nodevu, kas tiek iemaksātā valstī.</a>
                            <br />2018. gada 1. septembrī
                    </div>
                        <div className="bod2-text"><a className="link-type4" href="" >
                            </a>
                            <br />
                            </div>
*/