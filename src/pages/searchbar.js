import React from 'react'

import { getSearchBarRequest } from '../helperfunctions/getSearchBarRequest';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isEvaluate: false
        };
    }
    
    render() {    
        return (
                <input 
                    className={this.props.searchBarClass}
                    type="text" 
                    title="Search"
                    placeholder='How can TUO help you...'
                    value={this.state.inputValue}
                    onChange={(evt) => this.handleOnChange(evt)}
                    onKeyDown={(evt) => this.handleOnKeyDown(evt)}
                />
        );
    }

    handleOnChange(evt) {
        const value = evt.target.value;

        this.setState({
            inputValue: value
        });
    }

    //Handle Search feature on Enter
    handleOnKeyDown(evt) {
        
        if(evt.key === 'Enter') {
            if(this.state.value != '') {
                getSearchBarRequest(this.state.inputValue, this.props);
            };
            this.reset();
        };
    }

    reset() {
        this.setState({
            inputValue: ''
        })
    }
}
