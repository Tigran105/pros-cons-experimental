export interface ProsAndCons {
    id: number
    name: string
}
export interface ProsConsState {
    pros: ProsAndCons[];
    cons: ProsAndCons[];
}

export enum prosConsActiontypes {
    CHANGE_PROS = "CHANGE_PROS",
    CHANGE_CONS = "CHANGE_CONS"
}

interface changeProsAction {
    type: prosConsActiontypes.CHANGE_PROS,
    newPros: ProsAndCons,
}

interface changeConsAction {
    type: prosConsActiontypes.CHANGE_CONS,
    newCons: ProsAndCons,
}

export type ProsConsActions = changeProsAction | changeConsAction