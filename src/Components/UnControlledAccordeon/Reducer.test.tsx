import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer should change value to oppossite value', () => {

    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const NewState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expection

    expect(NewState.collapsed).toBe(true);

})


test('reducer should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const NewState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expection

    expect(NewState.collapsed).toBe(false);

})


test('reducer shut throw error because action type in incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect(()=> {reducer(state, {type: 'FAKETYPE'})}) .toThrowError()
})