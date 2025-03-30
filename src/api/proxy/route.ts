import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  try {
    const response = await fetch("https://vit-tm-task.api.trademarkia.app/api/v3/us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input_query: query,
        input_query_type: "",
        sort_by: "default",
        status: [],
        exact_match: false,
        date_query: false,
        owners: [],
        attorneys: [],
        law_firms: [],
        mark_description_description: [],
        classes: [],
        page: 1,
        rows: 10,
        sort_order: "desc",
        states: [],
        counties: [],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
