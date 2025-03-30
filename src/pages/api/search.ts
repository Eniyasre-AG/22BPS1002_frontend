import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { query, owner, lawFirm, attorney, status } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const apiUrl = `https://vit-tm-task.api.trademarkia.app/api/v3/us?query=${query}&owner=${owner}&lawFirm=${lawFirm}&attorney=${attorney}&status=${status}`;

    console.log("🔍 Fetching:", apiUrl); // Debugging

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch trademarks");
    }

    res.status(200).json({ trademarks: data.trademarks });
  } catch (error: any) {
    console.error("❌ API Error:", error.message);
    res.status(500).json({ message: error.message });
  }
}
