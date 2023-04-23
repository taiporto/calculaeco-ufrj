import { Subject } from './types';
import { normalizeSubjectData } from './utils/normalizeSubjectData';
import { client } from "../lib/mongodb"

const fetchAllSubjects = async () => {
   try {
       const db = client.db("bdcalculaeco");

       const subjects = await db
           .collection("materias")
           .find({})
           .toArray();        

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
}

export { fetchAllSubjects, fetchSubjectsByTermAndMajor }
