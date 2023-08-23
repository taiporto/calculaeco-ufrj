import { NextResponse } from "next/server";

import { fetchAllMajors } from "@/api";

export async function GET() {
  try {
    const majors = await fetchAllMajors();

    if(!majors) return NextResponse.json({message: "Majors not found"}, {status: 400});
    
    return NextResponse.json(majors, {status: 200});
   
  } catch (e) {
    console.error(e);
    return NextResponse.json({message: "Server error", error: JSON.stringify(e)}, {status: 500})
  }
};