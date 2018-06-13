import { constants }  from '../constants';

let user = {
    email: null
}

export default ( state = user, action) => {
    switch(action.type) {
        case constants.SIGNED_IN:
            const { email } = action;
            user = {
                email
            }

            return user;

        default:
            return state;
    }
        
        
}