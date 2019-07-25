import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down: ["Reģistrācija",
                "Uzņēmumi",
                "Dalībnieki",
                "Licence"]
        };
        this.buttonIndex = 1;
    }
    onDib = () => {
        this.buttonIndex = 1;
        const dib = ["Reģistrācija",
            "Uzņēmumi",
            "Dalībnieki",
            "Licence"];
        this.setState({ down: dib });

    }

    onIzm = () => {
        this.buttonIndex = 2;
        const izm = ["Kaut kas",
            "Kaut kas cits",
            "Vēl kaut kas",
        ];
        this.setState({ down: izm });

    }

    tableRight() {
        return (
            this.state.down.map(point => (
                <a key={point} className="table-link" href="">
                    <div className="table-right-text">
                        <div >{point}</div>
                        <div className="table-right-arrow">›</div>
                    </div>
                </a>
            ))
        );
    }

    render() {
        return (
            <div className="table">
                <div className="table-left">
                    <button
                        className={`button-table ${this.buttonIndex === 1 ? "buttonActive" : ""}`}
                        onClick={this.onDib}
                    >
                        Dibināšana {this.buttonIndex === 1 ? <div className="triangle"></div> : ""}
                        {this.buttonIndex === 1 ? <div className="triangle2"></div> : ""}
                    </button>

                    <button
                        className={`button-table ${this.buttonIndex === 2 ? "buttonActive" : ""}`}
                        onClick={this.onIzm}
                    >
                        Izmaiņas un citas lietas {this.buttonIndex === 2 ? <div className="triangle"></div> : ""}
                        {this.buttonIndex === 2 ? <div className="triangle2"></div> : ""}

                    </button>

                </div>

                <div className="table-right">
                    {this.tableRight()}

                </div>
            </div >
        );
    }
}

export default Table;