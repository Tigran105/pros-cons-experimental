import React from 'react';
import {useDispatch} from "react-redux";
import {changePros} from "../store/action-creators/prosCros";
import {ProsAndCons} from "../types/prosAndCons";
import itemStyle from "./global.module.scss"
import {TextField} from "@mui/material";

interface prosItemProps {
    item: ProsAndCons,
    index:number
}

const ProsItem = (props: prosItemProps) => {
    const dispatch = useDispatch()

    const itemChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePros({id: props.item.id, name: e.target.value}))
    }

    return (
        <div className={itemStyle.item}>
            {props.index} -
            <TextField type="text"
                       defaultValue={props.item.name}
                       onChange={itemChanger}
                       size={"small"}
                       label={`PROS ${props.index}`}
                       color={"secondary"}
            />
        </div>
    );
};

export default ProsItem;