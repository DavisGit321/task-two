import React, { Component } from 'react';

class Section extends Component {
    state = {
        sect: [
            "Reģistrē",
            "Saņem",
            "Veidlapas",
            "Specializēta",
            "Jaunumi",
            "Kontakti"

        ]
    }
    render() {
        return (
            this.state.sect.map(sec => (
                <div key={sec} className="option"><a className="link-opt" href="">{sec}</a></div>
            ))
        );
    }
}

export default Section;

/*
        <div className="option"><a className="link-opt" href="">Reģistrē</a></div>
        <div className="option"><a className="link-opt" href="">Saņem info</a></div>
        <div className="option"><a className="link-opt" href="">Veidlapas</a></div>
        <div className="option"><a className="link-opt" href="">Specializēta informācija</a></div>
        <div className="option"><a className="link-opt" href="">Jaunumi</a></div>
        <div className="option"><a className="link-opt" href="">Kontakti</a></div>
        */