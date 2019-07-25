import React, { Component } from 'react';
import axios from "axios";
import date from "./date1.png"

class Aktuatlitates extends Component {
    state = {
        row: []
    }

    componentDidMount() {
        axios.get("/rec/row.json")
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
                <div className="row-type" key={row.id}>
                    <div className="bod1-pic"><img src={date} width="38" /></div>
                    <div className="bod1-text"><a className="link-type1" href="" >{row.text}</a></div>
                </div>
            )
        })
        return (<React.Fragment>{rowList}</React.Fragment>);
    }
}

export default Aktuatlitates;

/*
                        <div className="row-type">
                            <div className="bod1-pic"><img src={date} width="38" /></div>
                            <div className="bod1-text"><a className="link-type1" href="" > E-pakalpojumu ceļvedis esošajiem un
                topošajiem uzņēmējiem, kas ir gandrīz sagatavoti</a></div>
                        </div>

                        <div className="row-type">
                            <div className="bod1-pic"><img src={date} width="38" /></div>
                            <div className="bod1-text"><a className="link-type1" href="">
                                Novērtē tīmekļa darbību</a></div>
                        </div>
                        */