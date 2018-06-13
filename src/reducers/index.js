import { combineReducers } from "redux";
import user from './user';
import goals from './goals';
import completedGoals from './completedGoals';

export default combineReducers({
    user,
    goals,
    completedGoals
})