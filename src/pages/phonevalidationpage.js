import React from "react";

export class PhoneValidationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isInvitedByPhone: false
        };
    }

    render(){
        return(
            <div className="pagestage">
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    placeholder='Enter Your Phone Number'
                    onChange={(evt)=>this.handleOnCHange(evt)}
                />
                <button onClick={(evt)=>this.handlePostPhonenumber()}>Registration</button>
            </div>
        )
    }

    handleOnCHange(evt){
        const value = evt.target.value;
        this.setState({
            inputValue: value,
        });
    }

    // Post phone number to TUO server
    handlePostPhonenumber(){
        const phoneNumber = this.state.inputValue;
        const jsonData = {
            'phonenumber': phoneNumber
        };
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };

        fetch('http://localhost:3001/phonenumber', requestOptions)
        .then(response => response.json())
        .then(data => this.handleIsInvitedByPhone(data.isInvitedByPhone));

        this.reset();
    }

    handleIsInvitedByPhone(isInvitedByPhone){
        if(isInvitedByPhone){
            this.props.handleRegistrationPage();
        }
    }

    reset() {
        this.setState({
            inputValue: ''
        })
    }
}
