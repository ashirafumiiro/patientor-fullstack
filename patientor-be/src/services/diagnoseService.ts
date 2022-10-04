import diagnosesData from '../../data/diagnoses.json';

import { Diagnose } from '../types';

const diagnoses: Diagnose[] = diagnosesData as Diagnose[];

function getEntries(): Diagnose[] {
    return diagnoses;
}

export default { getEntries };

