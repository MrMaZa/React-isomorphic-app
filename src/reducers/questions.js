import unioneWith from 'lodash/unionWith';

export const questions = (state = [], {type, questions, question}) => {
    const questionEquality = (a = {}, b = {}) => {
        return a.qustion_id == b.question_id;
    }

    if(type==="FETCHED_QUESTION") {
        state = unioneWith([question], state, questionEquality());
    }

    if(type==="FETCHED_QUESTIONS") {
        state = unioneWith(state,questions, questionEquality)
    }
    return state;
};