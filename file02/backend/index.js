import express from "express";
import cors from "cors";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// app.get("/", (req, res) => {
//     res.send('server is ready')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [{
            "id": 1,
            "name": "Programmer's Coffee",
            "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            "id": 2,
            "name": "Tailor's Joke",
            "content": "Why did the tailor become famous? Because every stitch was a perfect fit!"
        },
        {
            "id": 3,
            "name": "Math Humor",
            "content": "Why was the math book sad? Because it had too many problems."
        },
        {
            "id": 4,
            "name": "Computer Repair",
            "content": "I told my computer I needed a break. Now it won't stop showing me vacation ads."
        },
        {
            "id": 5,
            "name": "Doctor's Advice",
            "content": "The doctor told me to eat light. So I had a candle for dinner."
        },
        {
            "id": 6,
            "name": "Chicken Crossing",
            "content": "Why did the chicken cross the road? To prove to the possum it could be done!"
        },
        {
            "id": 7,
            "name": "Book Lover",
            "content": "I started reading a book about anti-gravity. I couldn't put it down."
        },
        {
            "id": 8,
            "name": "Fish Joke",
            "content": "What do you call a fish wearing a bowtie? Sofishticated."
        },
        {
            "id": 9,
            "name": "Time Traveler",
            "content": "I was going to tell you a joke about time travel, but you didn't like it."
        },
        {
            "id": 10,
            "name": "Lazy Employee",
            "content": "I always arrive late at the office, but I make up for it by leaving early."
        }
    ];
    res.json(jokes);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});