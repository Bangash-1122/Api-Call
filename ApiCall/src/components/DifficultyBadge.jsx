import React from 'react'

function DifficultyBadge({difficulty}) {
    const styles = {
        easy: "bg-green-100 text-greeen-800",
        medium: "bg-yellow-100 text-yellow-800",
        hard: "bg-red-100 text-red-800"
    };
    return (
        <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${styles[difficulty]}`}>
            {difficulty}
        </span>
    )
}

export default DifficultyBadge
