import { fetchSubjectById } from "@/api/fetchSubjects";
import { type NextRequest, NextResponse } from "next/server";

async function getSubjectById(id: string) {
  const response = await fetchSubjectById(id as string);

  if (!response?.subject || !response) return;

  return response.subject;
}

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await getSubjectById(params.id.toString());

    if (!result) return NextResponse.json({ error: "Not found" });

    return NextResponse.json(result, { headers: [] });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e);
  }
}
