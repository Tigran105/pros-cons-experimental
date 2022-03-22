// import {ProsAndCons, ProsConsActions, prosConsActiontypes} from "../../types/ProsAndCons";


import {ProsAndCons, ProsConsActions, prosConsActiontypes} from "../../types/prosAndCons";

export const changePros = (newPros: ProsAndCons): ProsConsActions => {
    return {
        type: prosConsActiontypes.CHANGE_PROS,
        newPros
    }
}


export const changeCons = (newCons: ProsAndCons): ProsConsActions => {
    return {
        type: prosConsActiontypes.CHANGE_CONS,
        newCons
    }
}