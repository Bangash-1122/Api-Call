import React from 'react'


function ProgressBar({current, total}) {
    const pct = Math.round((current / total) * 100);

    return ( 
        <>
        <div className = "w-full bg-gray-200 rounded-full h-2.2 mv-6" ></div> 
        <div className = "bg-indigo-600 h-2 rounded-full transition-all duration-500"
        style = {
            {
                width: `${pct}%`
            }
        } >
        </div> 
        </>
    )
}

export default ProgressBar