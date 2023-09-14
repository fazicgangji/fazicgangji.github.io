import React from "react";

export class AppsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className='pagestage'>
                <div className="flex-container">
                    <button className="btn-apps" name="TUO Labs">TUO Labs</button>
                    <button className="btn-apps" name="Survey">Survey</button>
                    <button className="btn-apps" name="Evaluation Page">Evaluation</button>
                    <button className="btn-apps">Blog</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                    <button className="btn-apps">Future Survice</button>
                </div>
            </div>
        );
    }
}