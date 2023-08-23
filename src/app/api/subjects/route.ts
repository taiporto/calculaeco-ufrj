import { type NextRequest, NextResponse } from "next/server";

import { fetchAllSubjects, fetchSubjectsByTermAndMajor } from "@/api";

async function getAllSubjects(searchParams: URL['searchParams']) {
  let subjects;
  
  const term = searchParams.get("term")?.toString();
  const major = searchParams.get("major")?.toString();

  if (term && major) {
    subjects = await fetchSubjectsByTermAndMajor(term, major);
  } else {
    subjects = await fetchAllSubjects();
  }

  return subjects;
}

export async function GET(req: NextRequest, {params} : {params: {slug: string}}) {
  try {
    const { searchParams } = new URL(req.url);
    const result = await getAllSubjects(searchParams);

    if (!result) return NextResponse.json({ error: "Not found" });

    return NextResponse.json(result, { headers: [] });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e);
  }
}
