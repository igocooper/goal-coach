import { constants } from '../constants';

export function logUser(email) {
    const action = {
        type: constants.SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals) {
    const action = {
        type: constants.SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completedGoals) {
    const action = {
        type: constants.SET_COMPLETED,
        completedGoals
    }
    return action;
}