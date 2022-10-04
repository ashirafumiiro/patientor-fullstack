interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

function calculateExercises (dailyExerciseHours: number[]): Result {
    const periodLength = dailyExerciseHours.length;
    let trainingDays = 0
    let rating = 0;
    let total = 0;
    let success = false;
    let ratingDescription = ''
    let target = 0;

    for (let i = 0; i < periodLength; i++) {
        const exerciseHours = dailyExerciseHours[i];
        if(exerciseHours > 0) trainingDays++;
        total += exerciseHours;
    }
    const average = total/periodLength


    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

const parseArguments = (args: Array<string>): number[] => {
    if (args.length < 3) throw new Error('Not enough arguments');
    let values: number[] = [];
    for (let i = 2; i < process.argv.length; i++) {
        const val = process.argv[i];
        if (!isNaN(Number(val))) {
            values.push(Number(val))
        } else {
            throw new Error('Provided a non numeric value!');
        }
    }
    return values;
    
}

try {
    const values = parseArguments(process.argv);

    console.log(calculateExercises(values))
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}