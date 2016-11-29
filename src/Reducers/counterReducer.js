/**
 * Created by DGBT7343 on 29/11/2016.
 */

export default function counter(state, action){
    if (action.type == 'INCREMENT'){
        return state + 1;
    } else if(action.type = 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}