import patientsData from '../../data/patients.json';
import { Patient, NoSsnPatient, NewPatientEntry } from '../types';
import { v1 as uuid } from 'uuid';


const patients: Patient[] = patientsData as Patient[];

function getNoSsnEntries(): NoSsnPatient[] {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation
        })
    );
}

const addPatient = (entry: NewPatientEntry): Patient =>{

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const id = uuid();

    const newPatientEntry: Patient = {
        id: id,
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default { getNoSsnEntries, addPatient };

