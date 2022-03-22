import React from 'react';
import {ProsAndCons} from "../types/prosAndCons";

interface ListProps {
    items: ProsAndCons[]
    renderItem: (item: ProsAndCons) => React.ReactNode
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    );
};

export default List;