import { constants }  from '../constants';

let goals = []

export default ( state = goals, action) => {
    switch(action.type) {
        case constants.SET_GOALS:
            const { goals } = action;

            return goals;

        default:
            return state;
    }
        
        
}