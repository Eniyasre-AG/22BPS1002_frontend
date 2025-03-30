import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  try {
    const response = await fetch("https://vit-tm-task.api.trademarkia.app/api/v3/us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input_query: query }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
