import { createSlice } from '@reduxjs/toolkit'



let lastChar = '';
let hasDecimal = false;
let has2Operators = false;

const isDecimal = (ch) => {
    if(ch === '.'){
        return true;
    } else {
        return false;
    }
}

const isNegative = (ch) => {
    if(ch === '-') {
        return true;
    } else {
        return false;
    }
}

const isOperator = (ch) => {
    if(ch === '+' || ch === '*' || ch === '/'){
        return true;
    } else {
        return false;
    }
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        formula: '',
        output: '0',
    },
    reducers: {
        add: (state,action) => {
            if(isOperator(action.payload) || isNegative(action.payload)){
                if(has2Operators && isNegative(action.payload)){
                    let stringWithoutLastChar = state.formula.slice(0, -1);
                    state.formula = stringWithoutLastChar + action.payload;
                    has2Operators = false;
                }
                else if(has2Operators) {
                    let stringWithoutLast2Digits = state.formula.slice(0,-2);
                    state.formula = stringWithoutLast2Digits + action.payload;
                    has2Operators = false;
                }else if(isOperator(lastChar) && isNegative(action.payload)){
                    state.formula += action.payload;
                    has2Operators = true;
                } else if(isNegative(lastChar)){
                    let stringWithoutLastChar = state.formula.slice(0, -1);
                    state.formula = stringWithoutLastChar + action.payload;
                } else if(isOperator(lastChar) && isOperator(action.payload)){
                    let stringWithoutLastChar = state.formula.slice(0, -1);
                    state.formula = stringWithoutLastChar + action.payload;
                } else {
                    state.formula += action.payload;
                }
                hasDecimal = false;
            } else if(isDecimal(action.payload)){
                if(!hasDecimal){
                    state.formula += action.payload;
                }
            } else {
                state.formula += action.payload;
            }
            
            
            //output part
            if(action.payload !== '='){
                if(action.payload === '+' || 
                action.payload === '-' || 
                action.payload === '/' || 
                action.payload === '*' ||
                state.output === '0' ||
                state.output === '+' ||
                state.output === '-' ||
                state.output === '/' ||
                state.output === '*'){
                    state.output = action.payload;
                } else if(isDecimal(action.payload) && !hasDecimal){
                    state.output += action.payload;
                    hasDecimal = true;
                } else if(!isDecimal(action.payload)){
                    state.output += action.payload;
                }
            }
            lastChar = action.payload;
        },
        AC: (state) => {
            state.formula = '';
            state.output = '0';
            lastChar = '';
            hasDecimal = false;
            has2Operators = false;
        },
        calculate: (state) => {
            try {
                const calculateFunction = () => {
                    return Function('"use strict"; return (' + state.formula + ')')();
                };
                state.output = String(calculateFunction());
            } catch (error) {
                state.output = 'Error';
            } finally {
                state.formula = state.output;
            }
        },
    },
  });

  export const {
    add,
    AC,
    calculate
  } = calculatorSlice.actions;

  export default calculatorSlice.reducer;

