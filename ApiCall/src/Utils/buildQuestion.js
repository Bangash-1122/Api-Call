import {
    shuffle
} from "./shuffleArray.js";

export default function buildQuestion(data) {
    return data.results.map((q) => ({
        question: q.question,
        correct: q.correct_answer,
        difficulty: q.difficulty,
        options: shuffle([...q.incorrect_answers, q.correct_answer])
    }))
}