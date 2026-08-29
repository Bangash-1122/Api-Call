import React from 'react'

function OptionButton({
    label,
    status,
    onClick,
    disabled
}) {
    const base =
        "w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors duration-150 cursor-pointer shadow-2xl animate-pulse";

    const statusStyles = {
        correct: "bg-green-100 border-green-500 text-green-900",
        wrong: "bg-red-100 border-red-400 text-red-900",
        default: "bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400",
    };

    return ( <
        button className = {
            `${base} ${statusStyles[status] || statusStyles.default}`
        }
        onClick = {
            onClick
        }
        disabled = {
            disabled
        } > {
            label
        } <
        /button>
    );
}

export default OptionButton