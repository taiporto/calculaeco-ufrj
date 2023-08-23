import { client } from "../lib/mongodb";

import { normalizeSubjectData } from './utils/normalizeSubjectData';
import { Subject } from './types';

type FetchSubjectByIdReturn = {
    subject: Subject | null;
    message?: string;
} | undefined;

const fetchAllSubjects = async () => {
   try {
       const db = client.db("bdcalculaeco");

       const subjects = await db
           .collection("materias")
           .find({})
           .toArray();
        
        if(!subjects) return {message: 'Not found'};
        
        return subjects.map(normalizeSubjectData);
   } catch (e) {
       console.error(e);
   }
};

const fetchSubjectsByTermAndMajor = async (term: Subject['term'], major: Subject['major']) => {
    try {
        const db = client.db("bdcalculaeco");

        const subjects = await db
            .collection("materias")
            .find({ periodo: term, curso: major })
            .toArray();        

        return subjects.map(normalizeSubjectData);
    } catch (e) {
        console.error(e);
    }
};

const fetchSubjectById = async (id: Subject['id']): Promise<FetchSubjectByIdReturn> => {
    try {
        const db = client.db("bdcalculaeco");

        const subject = await db
            .collection("materias")
            .findOne({ id_disciplina: id })

        if(!subject) return {subject: null, message: 'Not found'}

        return {subject: normalizeSubjectData(subject)};
    } catch (e) {
        console.error(e);
        return {subject: null, message: e as string}
    }
};

export { fetchAllSubjects, fetchSubjectById,fetchSubjectsByTermAndMajor }
