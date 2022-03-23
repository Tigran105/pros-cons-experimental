import React from 'react';
import {useDispatch} from "react-redux";
import {changeCons} from "../store/action-creators/prosCros";
import {ProsAndCons} from "../types/prosAndCons";
import itemStyle from "./global.module.scss"
import {TextField} from "@mui/material";

interface consItemProps {
    item: ProsAndCons,
    index: number
}

const ConsItem = (props: consItemProps) => {
    const dispatch = useDispatch()

    const itemChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCons({id: props.item.id, name: e.target.value}))
    }

    return (
        <div className={itemStyle.item}>
            {props.index} -
            <TextField type="text"
                       defaultValue={props.item.name}
                       onChange={itemChanger}
                       size={"small"}
                       label={`CONS ${props.index}`}
                       color={"secondary"}
            />

        </div>
    );
};

export default ConsItem;