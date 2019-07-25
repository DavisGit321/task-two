import React from 'react';
import Aktualitates from "./aktualitates"
import Akti from "./akti";

const Bottom = () => {
    return (
        <section>
            <div className="bot">
                <div className="bod1">
                    <div className="bod-title">Aktualitātes</div>
                    <div className="bod-all">
                        <Aktualitates />

                        <a className="link-uni" href=""> Viss pārējais ›</a>
                    </div>
                </div>
                <div className="bod2">
                    <div className="bod-title">Normatīvie akti</div>
                    <div className="bod-all">

                        <Akti />

                    </div>
                    <a className="link-uni" href=""> Komerclikums</a>

                </div>

            </div>
        </section>
    );
}

export default Bottom;