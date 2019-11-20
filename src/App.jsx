import React from "react";
import {connect} from 'react-redux';
import QuestionList from "./components/QuestionList";
import {Link, Route} from "react-router-dom";
import QuestionDetail from "./components/QuestionDetail";


const AppDisplay = () => (
    <div>
        <h1>
            <Link to={`/`}>
                Isomorphic react
            </Link>
        </h1>
        <div>
            <Route exact path="/" render={() => <QuestionList/>}/>
            <Route exact path="/questions/:id"
                   render={({match}) => <QuestionDetail
                       question_id={match.params.id}/>}/>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(AppDisplay);