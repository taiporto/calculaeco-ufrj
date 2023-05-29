import { fetchAllSubjects, fetchSubjectsByTermAndMajor } from "@/api";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let subjects;

    if (req.query?.term && req.query?.major) {
      subjects = await fetchSubjectsByTermAndMajor(
        req.query.term.toString(),
        req.query.major.toString(),
      );
    } else {
      subjects = await fetchAllSubjects();
    }

    if(!subjects) res.status(400).json({message: "Subjects not found"});
    
    res.status(200).json(subjects);
   
  } catch (e) {
    console.error(e);
    res.status(500).json({message: "Server error", error: JSON.stringify(e)})
  }
};
