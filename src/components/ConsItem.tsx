import React from 'react';
import {useDispatch} from "react-redux";
import {changeCons} from "../store/action-creators/prosCros";
import {ProsAndCons} from "../types/prosAndCons";

interface consItemProps {
    item: ProsAndCons,
}

const ConsItem = (props: consItemProps) => {
    const dispatch = useDispatch()

    const itemChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCons({id: props.item.id, name: e.target.value}))
    }

    return (
        <div>
            {props.item.id} -
            <input type="text" defaultValue={props.item.name} onChange={itemChanger}/>
        </div>
    );
};

export default ConsItem;