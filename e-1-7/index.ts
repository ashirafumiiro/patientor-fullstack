import express from 'express';
import calculateBim from './bmiCalculator';
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', async (req, res) => {
    try {
        const height = Number(req.query.height);
        const weight = Number(req.query.weight);
        const bmi = calculateBim(height, weight);
        
        if(!isNaN(height) && !isNaN(weight)){
            res.status(200).json({
                weight,
                height,
                bmi
            })
        }
        else{
            throw new Error("All parameters should be numbers")
        }
    } catch (error) {
        if(error instanceof Error)
            res.status(500).json({ error: "malformatted parameters" })
    }
});


const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});