/**
 * Created by DGBT7343 on 29/11/2016.
 */

const initState = {
    counter : [0,0,0]
};

export default function counter(state=initState, action){
    if (action.type == 'INCREMENT'){
        return {counter : state.counter.map((el, key) => {
             if(key == action.id)
                 return el+1;
             else return el;
        })};
    } else if(action.type = 'DECREMENT') {
        return {counter : state.counter.map((el, key) => {
            if(key == action.id)
                return el-1;
            else return el;
        })};
    } else {
        return state;
    }
}