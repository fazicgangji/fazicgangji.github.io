export function getSearchBarRequest(search, props){
    switch(search){
        case 'evaluate':
            console.log('Request Evaluation App');
            return;
        case 'survey':
            props.handleSurveyButton();
            return;
        case 'tuo labs':
            props.handleTuoLabs();
            return;
        case 'apps':
            props.handleAppsPage();
            return;
        case 'evaluation':
            props.handleEvaluationPage();
            return;
        case 'phone':
            props.handlePhoneValidationPage();
            return;
        default:
            console.log('Search bar request to default');
            return;
    }
}