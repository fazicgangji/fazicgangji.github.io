import React from "react";
import '../index.css';

export class HomePage extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="main-message">
                    <h1>Let's Talk about <br/>
                    The good the bad and ugly on business... <br/>
                    Welcome to TUO</h1>
                </div>
                {/* <SearchBar /> */}
            </div>
        );
    }
}