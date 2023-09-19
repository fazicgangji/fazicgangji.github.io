import React from "react";

import { HomeCarousel } from "./pages/homepagecarousel";
import { Survey } from "./pages/initialsurvey";
import { TuoLabs } from "./pages/tuolabs";
import { AppsPage } from "./pages/appspage";
import { EvaluationPage } from "./pages/evaluationpage";
import { JoinConversation } from "./pages/joinconversationpage";
import { PhoneValidationPage } from "./pages/phonevalidationpage";
import { RegistrationPage } from "./pages/RegistrationPage";

export function Router(props){
    // console.log('page in router: ' + props.page);
    switch(props.page){
        case 'HomeCarousel':
            return <HomeCarousel />
        case 'Join Conversation Page':
            return <JoinConversation />;
        case 'Survey Page':
            return <Survey />
        case 'Tuo Labs Page':
            return <TuoLabs />
        case 'Apps Page':
            return <AppsPage />
        case 'Evaluation Page':
            return <EvaluationPage />
        case 'Phone Validation Page':
            return <PhoneValidationPage handleRegistrationPage={props.handleRegistrationPage}/>;
        case 'Registration Page':
            return <RegistrationPage />;
        default:
            return <HomeCarousel />
    }
}