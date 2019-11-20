import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import TagsList from "./TagsList";
import {Link} from "react-router-dom";

const QuestionListItem = ({title, tags, question_id}) => {
    return (
        <div className="mb-3">
            <h3>{title}</h3>
            <div className="mb-2">
                <TagsList tags={tags}/>
            </div>
            <div>
                <Link to={`/questions/${question_id}`}>
                    <button>More info!</button>
                </Link>
            </div>
        </div>
    );
};

const QuestionList = ({questions}) => {
    return (
        <div>
            {questions && questions.length ? <div>
                    {questions.map(question => <QuestionListItem key={question.question_id} {...question}/>)}
                </div>
                : <div>
                    ... Loading questions ...
                </div>}
        </div>
    );
};

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
};

const mapStateToProps = ({questions}) => ({questions});

export default connect(mapStateToProps)(QuestionList);