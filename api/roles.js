module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const processId = String(req.query?.process_id ?? "").trim();
  const userId = String(req.query?.user_id ?? "").trim();

  if (!processId || !userId) {
    return res
      .status(400)
      .json({ error: "process_id and user_id are required query params" });
  }

  return res.status(200).json(["Sales Analyst"]);
};
