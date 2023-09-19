import React from "react";

export class RegistrationPage extends React.Component{
    render(){
        return(
            <div className="pagestage">
                <div>
                    <input type="text" className="registration-input" placeholder="First Name"/>
                    <input type="text" className="registration-input" placeholder="Last Name"/>
                    <input type="email" className="registration-input" placeholder="Email"/>
                </div>
            </div>
        )
    }
}