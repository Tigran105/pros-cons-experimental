import React from 'react';
import {ProsAndCons} from "../types/prosAndCons";
import style from "./global.module.scss";

interface ListProps {
    items: ProsAndCons[]
    renderItem: (item: ProsAndCons, index: number) => React.ReactNode
}

const List = (props: ListProps) => {
    return (
        <div className={style.allItems}>
            {props.items.map(props.renderItem)}
        </div>
    );
};

export default List;