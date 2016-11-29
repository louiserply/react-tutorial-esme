/**
 * Created by DGBT7343 on 29/11/2016.
 */

export default function counter(state = {counter: 1}, action){
    console.log(action)
    if (action.type == 'INCREMENT'){
        return {counter: state.counter+1};
    } else if(action.type = 'DECREMENT') {
        return {counter: state.counter-1};
    } else {
        return state;
    }
}