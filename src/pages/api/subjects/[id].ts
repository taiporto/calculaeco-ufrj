import { fetchSubjectById } from "@/api/fetchSubjects";
import { Subject } from "@/api/types";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (!id) res.status(400).json({message: "Invalid route"});

    const response = await fetchSubjectById(id as string);

    if (!response?.subject || !response) res.status(400).json({ message: "Subject not found" });

    res.status(200).json(response?.subject);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error", error: JSON.stringify(e) });
  }
};
