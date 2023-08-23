import { NextApiRequest, NextApiResponse } from "next";

import { fetchAllMajors } from "@/api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const majors = await fetchAllMajors();

    if(!majors) res.status(400).json({message: "Majors not found"});
    
    res.status(200).json(majors);
   
  } catch (e) {
    console.error(e);
    res.status(500).json({message: "Server error", error: JSON.stringify(e)})
  }
};