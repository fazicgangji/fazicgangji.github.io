import React from "react";

export class Survey extends React.Component{
    render(){
        return (
            <div className="pagestage">
            <div className="container">
                 <div className="text">
                     TUO is a business ecosystem built by you for you...<br />
                     Your input is crucial to the direction on which direction TUO will serve you.
                </div>
                <form action="#">
                <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label>What are your daily or weekly problems that you would like to solve?</label>
                        </div>
                    </div>
                <div className="form-row">
                        <input type="radio" id="html" name="fav_language" value="Start up"/>
                        <label>Start up</label>
                        <input type="radio" id="html" name="fav_language" value="Small Business"/>
                        <label>Small Business</label>
                        <input type="radio" id="html" name="fav_language" value="Large Company"/>
                        <label>Large Company</label>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label>Do you have customers?</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label>What problem does your business solve?</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label>How does your business generate income?</label>
                        </div>
                    </div>

                   
                           
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}