import { browserHistory } from 'react-router';

const initialState =  {
    authenticated: false
};

const hardCodedLogin = [
    {
        user: "iwa",
        password: "iwa"
    },
    {
        user: "kermit",
        password: "kermit"
    }
];

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "SIGN_IN_USER":
            if (hardCodedLogin.reduce(function(a,b) {
                    return a || (b.user == action.username && b.password == action.password);
                }, false)) {
                browserHistory.push('/profile');
                return {
                    ...state, authenticated: true
                };

            }
            else return state;
        case "SIGN_OUT_USER":
            browserHistory.push('/login');
            return {
                ...state, authenticated: false
            };
        default:
            return state;
    }
}