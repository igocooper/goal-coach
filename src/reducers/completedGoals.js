import { constants }  from '../constants';

let completedGoals = []

export default ( state = completedGoals, action) => {
    switch(action.type) {
        case constants.SET_COMPLETED:
            const { completedGoals } = action;

            return completedGoals;

        default:
            return state;
    }
        
        
}