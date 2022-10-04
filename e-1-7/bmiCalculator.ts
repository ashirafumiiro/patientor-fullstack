interface BmiValues {
    heigh: number,
    weight: number
}


function calculateBmi(height: number, weight: number): string {
    const bmi = weight / ((height * 0.01) ** 2)
    if (bmi < 18.5) { //underweight
        return "Underweight (unhealthy weight)"
    } else if (bmi >= 18.5 && bmi <= 24.9) { //18.5 to 24.9 normal weight
        return "Normal (healthy weight)"
    } else if (bmi >= 25 && bmi <= 29.9) { // 25 to 29.9 overweight
        return "Overweight (unhealthy weight)"
    } else { //obese
        return "Obese (unhealthy weight)"
    }
}

const parseBmiArguments = (args: Array<string>): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            heigh: Number(args[2]),
            weight: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

if(require.main === module){
    try {
        const { heigh, weight } = parseBmiArguments(process.argv);
        console.log(calculateBmi(heigh, weight))
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.'
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
}

export default calculateBmi