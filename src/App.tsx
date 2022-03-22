import React from 'react';
import {useSelector} from "react-redux";

function App() {
    console.log(useSelector(state => state))
    return (
        <div className="App">
            hello
        </div>
    );
}

export default App;
