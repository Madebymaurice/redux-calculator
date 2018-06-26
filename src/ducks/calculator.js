import {calculate} from '../calculate';

const ENTER_NUMBER = "ENTER_NUMBER";
const CLEAR = "CLEAR";
const PERCENTAGE = "PERCENTAGE";
const TOGGLE_NEGATIVE = "TOGGLE_NEGATIVE";
const EVALUATE = "EVALUATE";
const SET_OPERATOR = "SET_OPERATOR"

// reducer
const initialState = {
    currentValue: '0',
    operator: null,
    previousValue: 0,
}

export default function calculator(state = initialState, action){
    switch(action.type){
        case ENTER_NUMBER:
            return Object.assign({}, state, {
                currentValue: state.currentValue === '0' ? action.number.toString() : state.currentValue + action.number.toString()
            })
        case CLEAR:
            return {
                currentValue: '0',
                operator: null,
                previousValue: 0
            }
        case PERCENTAGE:
            return Object.assign({}, state, {
                currentValue: (parseFloat(state.currentValue)/100).toString()
            })
        case TOGGLE_NEGATIVE:
            return Object.assign({}, state, {
                currentValue: ( -parseFloat( state.currentValue ) ).toString()
            })
        case EVALUATE:
			return {
				currentValue: calculate( parseFloat( state.currentValue ), state.previousValue, state.operator ).toString()
				, operator: null
				, previousValue: 0
            };
        case SET_OPERATOR:
			return {
				currentValue: "0"
				, operator: action.operator
				, previousValue: state.operator ? calculate( parseFloat( state.currentValue ), state.previousValue, state.operator ) : parseFloat( state.currentValue )
			};
        default:
            return state
    }
}
// fin reducer


// actions
export function clear(){
    return{type: CLEAR};
}

export function percentage(){
    return{type: PERCENTAGE};
}

export function toggleNegative(){
    return{type: TOGGLE_NEGATIVE};
}

export function enterNumber(number){
    return{type: TOGGLE_NEGATIVE, number};
}

export function evaluate(){
    return{type: EVALUATE};
}

export function setOperator(operator){
    return{type: SET_OPERATOR, operator};
}