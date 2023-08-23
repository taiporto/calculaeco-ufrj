import { client } from "../lib/mongodb"

import { normalizeMajorData } from './utils';


export const fetchAllMajors = async() => {
  try {
      const db = client.db("bdcalculaeco");

      const majors = await db
          .collection("cursos")
          .find({})
          .toArray();

      return majors.map(normalizeMajorData);
  } catch (e) {
      console.error(e);
  }
};