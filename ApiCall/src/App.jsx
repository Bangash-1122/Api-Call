import {
    useState,
    useCallback
} from 'react';

import {
    QuestionCard,
    ResultsCard
} from './components/index.js';

import buildQuestion from './Utils/buildQuestion.js';
import apiData from './Data/data.js';

export default function App() {
    const [questions, setQuestions] = useState(() => buildQuestion(apiData));
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = useCallback((correct) => {
        if (correct) {
            setScore((s) => s + 1);
        }
    }, []);

    const handleNext = useCallback(() => {
        if (current + 1 >= questions.length) {
            setFinished(true);
        } else {
            setCurrent((c) => c + 1);
        }
    }, [current, questions.length]);

    const handleRestart = useCallback(() => {
        setQuestions(buildQuestion(apiData));
        setCurrent(0);
        setScore(0);
        setFinished(false);
    }, []);

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 shadow-2xl">
            <div className="bg-white rounded-2xl shadow-md border border-gray-400 w-full max-w-xl p-8">
                <h1 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">
                    💻 CS Trivia Quiz
                </h1>

                {finished ? (
                    <ResultsCard
                        score={score}
                        total={questions.length}
                        onRestart={handleRestart}
                    />
                ) : (
                    <QuestionCard
                        key={current}
                        question={questions[current]}
                        questionNumber={current + 1}
                        total={questions.length}
                        onAnswer={handleAnswer}
                        onNext={handleNext}
                    />
                )}
            </div>
        </div>
    );
}