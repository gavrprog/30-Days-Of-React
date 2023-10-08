import React from 'react'

const Title = ({total, number}) => (
    <div className="title">
        <h1>World Countries Data</h1>
        <h3>Currently we have {total} countries</h3>
        <div className={`search-result ${number === total && 'disable'}`} >
            {number} satisfied the search criteria
        </div>
    </div>
)

function Header({total, number}) {
    return (    
    <header className="app-header">
        <Title total={total} number={number} />
        {/* <GoToEnd /> */}
    </header>
)}

export default Header