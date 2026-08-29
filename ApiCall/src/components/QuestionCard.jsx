import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import OptionButton from './OptionButton';
import DifficultyBadge from './DifficultyBadge';

function QuestionCard({ question, questionNumber, total, onAnswer, onNext }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (opt) => {
        if (selected) return;
        setSelected(opt);
        onAnswer(opt === question.correct);
    };

    const getStatus = (opt) => {
        if (!selected) return "default";
        if (opt === question.correct) return "correct";
        if (opt === selected) return "wrong";
        return "default";
    };

    const isCorrect = selected === question.correct;

    return (
    <div>
        <ProgressBar current={questionNumber - 1} total={total} />

        <div className="flex justify-between items-center mb-4">
            <DifficultyBadge difficulty={question.difficulty} />
            <span className="text-xs text-gray-400 font-medium">
            {questionNumber} / {total}
            </span>
        </div>

        <p className="text-gray-900 text-base font-semibold leading-relaxed mb-6">
            {question.question}
        </p>

        <div className="flex flex-col gap-3 mb-5">
            {question.options.map((opt) => (
            <OptionButton
                key={opt}
                label={opt}
                status={getStatus(opt)}
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
            />
        ))}
        </div>

        {selected && (
            <div
            className={`text-sm font-medium mb-5 ${
                isCorrect ? "text-green-700" : "text-red-600"
            }`}
            >
            {isCorrect
                ? "✓ Correct!"
                : `✗ Correct answer: ${question.correct}`}
            </div>
        )}

        <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">
            {selected ? (isCorrect ? "Well done!" : "Better luck next time!") : "Choose an answer"}
            </span>
            <button
            className="px-5 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            disabled={!selected}
            onClick={onNext}
            >
            {questionNumber === total ? "See Results →" : "Next →"}
            </button>
        </div>
    </div>
    );
}

export default QuestionCard
