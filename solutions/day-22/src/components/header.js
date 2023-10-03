import React from 'react'

const Title = ({total, number}) => {
    let classMessage = (number === total) ? "disable" : "enable"
    
    return (
    <div className="title">
        <h1>World Countries Data</h1>
        <h3>Currently we have {total} countries</h3>
        <div className={"search-result" + " " + classMessage} >
            {number} satisfied the search criteria
        </div>
    </div>
)}

function Header({total, number}) {
    return (    
    <header className="app-header">
        <Title total={total} number={number} />
        {/* <GoToEnd /> */}
    </header>
)}

export default Header