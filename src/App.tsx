import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import List from "./components/List";
import ConsItem from "./components/ConsItem";
import ProsItem from "./components/ProsItem";

function App() {
    const {cons, pros} = useTypedSelector(state => state.prosAndCons)
    return (
        <div style={{display: "flex"}}>
            <List
                items={cons}
                renderItem={item => <ConsItem item={item} key={item.id.toString()}/>}
            />
            <List
                items={pros}
                renderItem={item => <ProsItem item={item} key={item.id.toString()}/>}
            />
        </div>
    );
}

export default App;
