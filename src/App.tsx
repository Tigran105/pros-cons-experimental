import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import List from "./components/List";
import ConsItem from "./components/ConsItem";
import ProsItem from "./components/ProsItem";
function App() {
    const {cons, pros} = useTypedSelector(state => state.prosAndCons)
    return (
        <div style={{display: "flex", width:"100%", justifyContent:"space-around"}}>
            <List
                items={cons}
                renderItem={(item, index) => <ConsItem item={item} index={index + 1} key={item.id.toString()}/>}
            />
            <List
                items={pros}
                renderItem={(item, index) => <ProsItem item={item} index={index + 1} key={`${item.id.toString()}a`}/>}
            />
        </div>
    );
}

export default App;
