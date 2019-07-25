import React from 'react';
import house from "./house.png"
import logo from "./logo.svg"
import Section from "./section";
import pic from "./49116.png"

const Header = () => {
    return (
        <header>
            <div className="top1"></div>
            <div className="top-back">
                <div className="top-main">
                    <div className="sakums"><a className="link-top" href=""><span className="image"><img src={house} width="20px" />
                    </span>SĀKUMS</a></div>
                    <div className="mid">
                        <div className="top2"></div>
                        <div className="logo"><img src={logo} width="300px" /></div>
                    </div>
                    <div className="lang">EN</div>
                </div>
            </div>
            <div className="selection">
                <div className="under-selec">
                    <div className="section">
                        <Section />
                    </div>
                    <div className="search">
                        <input className="input" placeholder="Meklēt" />
                        <a href="">
                            <img src={pic} width="25px" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;