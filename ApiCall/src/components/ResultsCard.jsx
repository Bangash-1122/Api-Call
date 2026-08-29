import React from 'react'

function ResultsCard({ score, total, onRestart }) {
    const pct = Math.round((score / total) * 100);

    const message =
        pct === 100 ? "Perfect score! Excellent work 🎉" :
        pct >= 70   ? "Great job! You know your CS 💪" :
        pct >= 50   ? "Not bad — keep studying 📚" :
                    "Keep practicing, you'll get there! 🔁";

    const ringColor =
        pct >= 70 ? "text-green-500" : pct >= 50 ? "text-yellow-500" : "text-red-400";

    return (
    <div className="text-center py-8">
        <div className={`text-7xl font-bold mb-1 ${ringColor}`}>
            {score}/{total}
        </div>
        <div className="text-gray-400 text-sm mb-2">{pct}% correct</div>

        <div className="w-full bg-gray-200 rounded-full h-3 my-5">
            <div
            className={`h-3 rounded-full transition-all duration-700 ${
                pct >= 70 ? "bg-green-400" : pct >= 50 ? "bg-yellow-400" : "bg-red-400"
            }`}
            style={{ width: `${pct}%` }}
        />
        </div>

        <p className="text-gray-700 text-base mb-8">{message}</p>

        <button
            className="px-6 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={onRestart}
        >
            Play again
        </button>
    </div>
    );
}


export default ResultsCard
