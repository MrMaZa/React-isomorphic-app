import React from 'react';
import Markdown from "react-markdown";
import TagsList from "./TagsList";
import {connect} from "react-redux";

const QuestionDetailDisplay = ({title, body, answer_count, tags}) => (
    <div>
        <h3 className="mb-2">
            {title}
        </h3>
        {body ?
            <div>
                <div className="mb-3">
                    <TagsList tags={tags}/>
                </div>
                <Markdown source={body}/>
                <div>
                    {answer_count} Answers
                </div>
            </div>
            :
            <div>
                <h4>Loading questions</h4>
            </div>
        }
    </div>
);


const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    console.log("ownProps", ownProps)
    return {
        ...state.questions.find(({question_id}) => question_id == ownProps.question_id)
    }
};

export default connect(mapStateToProps)(QuestionDetailDisplay);