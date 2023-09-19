import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { SearchBar } from './pages/searchbar';
import { getSearchBarClass } from './helperfunctions/getSearchBarclass';

import { Router } from './router';

//Logo
import logo from './images/logo.png';


//Logo
function Logo() {
    return (
        <div className='grow'>
            <img src={logo} alt='' className='logo'/>
        </div>
    );
}

//Home Page
class Home extends React.Component {
    constructor () {
        super()
        this.state = {
          page: 'Phone Validation Page'
        }

        this.handleHomeButton = this.handleHomeButton.bind(this);
        this.handleJoinCoversationButton = this.handleJoinCoversationButton.bind(this);
        this.handleSurveyButton = this.handleSurveyButton.bind(this);
        this.handleTuoLabs = this.handleTuoLabs.bind(this);
        this.handleAppsPage = this.handleAppsPage.bind(this);
        this.handleEvaluationPage = this.handleEvaluationPage.bind(this);
        this.handlePhoneValidationPage = this.handlePhoneValidationPage.bind(this);
        this.handleRegistrationPage = this.handleRegistrationPage.bind(this);
      }
      render () {
        return (
          <div style={{height: '100%'}}>
            <header>
                <button className='btn-logo' onClick={this.handleHomeButton}><Logo /></button>
                <SearchBar 
                  searchBarClass={getSearchBarClass(this.state.page === 'HomeCarousel')}
                  handleSurveyButton={this.handleSurveyButton}     
                  handleAppsPage={this.handleAppsPage}   
                  handleEvaluationPage={this.handleEvaluationPage}  
                  handleTuoLabs={this.handleTuoLabs}  
                  handlePhoneValidationPage={this.handlePhoneValidationPage}
                />
                <button className='btnHeader' name='survey' onClick={this.handleSurveyButton}>SURVEY</button>
                <button className='btnHeader' name='tuo labs' onClick={this.handleJoinCoversationButton}>Join Conversation</button>                   
            </header>
            <Router 
                page={this.state.page}
                handleRegistrationPage={this.handleRegistrationPage}
            />
          </div>
        )
      }

      handleHomeButton(){
        this.setState({
            page: 'HomeCarousel'
        });
      }
      handleJoinCoversationButton(){
        this.setState({
            page: 'Join COnversation Page'
        });
      }
      handleSurveyButton(){
        this.setState({
          page: 'Survey Page'
        })
      }
      handleTuoLabs(){
        this.setState({
          page: 'Tuo Labs Page'
        })
      }
      handleAppsPage(){
        this.setState({
          page: 'Apps Page'
        })
      }
      handleEvaluationPage(){
        this.setState({
          page: 'Evaluation Page'
        })
      }
      handlePhoneValidationPage(){
        this.setState({
          page: 'Phone Validation Page'
        })
      }
      handleRegistrationPage(){
        this.setState({
          page: 'Registration Page'
        })
      }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);