export function getSearchBarRequest(search, props){
    console.log('getsearchbarrequest: ' + search);

    switch(search){
        case 'evaluate':
            console.log('Request Evaluation App');
            return;
        case 'survey':
            props.handleSurveyButton();
            return;
        case 'apps':
            props.handleAppsPage();
            return;
        case 'evaluation':
            props.handleEvaluationPage();
            return;
        default:
            console.log('Search bar request to default');
            return;
    }
}