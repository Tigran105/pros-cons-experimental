import {ProsConsActions, prosConsActiontypes, ProsConsState} from "../../types/prosAndCons";

const initialState: ProsConsState = {
    pros: [
        {id: 1, name: ""},
    ],
    cons: [
        {id: 1, name: ""},
    ]
}

export const prosConsReducer = (state = initialState, action: ProsConsActions): ProsConsState => {
    switch (action.type) {
        case prosConsActiontypes.CHANGE_CONS:
            state.cons = state.cons.map((item => {
                if (+item.id === +action.newCons.id) {
                    return action.newCons
                } else {
                    return item
                }
            }))
            if (state.cons[state.cons.length - 1].name) {
                state.cons.push({id: +(state.cons[state.cons.length - 1].id) + 1, name: ''})
            }
            return {
                ...state,
                cons: state.cons.filter(c => c.name || c.id === +(state.cons[state.cons.length - 1].id))
            }
        case prosConsActiontypes.CHANGE_PROS:
            state.pros = state.pros.map((item => {
                if (+item.id === +action.newPros.id) {
                    return action.newPros
                } else {
                    return item
                }
            }))
            if (state.pros[state.pros.length - 1].name) {
                const id = Math.max(...state.pros.map(e => +e.id)) + 1
                state.pros.push({id, name: ''})
            }
            return {
                ...state,
                pros: state.pros.filter(p => p.name || p.id === +(state.pros[state.pros.length - 1].id))
            }
        default:
            return state
    }
}