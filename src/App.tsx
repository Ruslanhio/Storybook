import React from 'react';
const App = () => {

    return (
        <div>
            This is APP component
            <Rating/>
            <According/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
        </div>
    )
}


function According() {
    return <div>
        <h3>Меню</h3>

    </div>
}



export default App;
