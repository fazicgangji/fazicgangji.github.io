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



//Future implementation
// function EvaluationApp() {
//     return(
//         <div>
            
//         </div>
//     )
// }

//Home Page
class Home extends React.Component {
    constructor () {
        super()
        this.state = {
          page: 'HomeCarousel'
        }

        this.handleHomeButton = this.handleHomeButton.bind(this);
        this.handleSurveyButton = this.handleSurveyButton.bind(this);
        this.handleTuoLabs = this.handleTuoLabs.bind(this);
        this.handleAppsPage = this.handleAppsPage.bind(this);
        this.handleEvaluationPage = this.handleEvaluationPage.bind(this);
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
                />
                <button className='btnHeader' name='survey' onClick={this.handleSurveyButton}>SURVEY</button>
                <button className='btnHeader' name='tuo labs' onClick={this.handleTuoLabs}>TUO LABS</button>                   
            </header>
            <Router page={this.state.page}/>
          </div>
        )
      }

      handleHomeButton(){
        this.setState({
            page: 'HomeCarousel'
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);