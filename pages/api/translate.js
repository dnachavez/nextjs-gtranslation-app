export default async function handler(req, res) {
  const { from, to, text } = req.query;

  const response = await fetch(
    `https://api.pawan.krd/gtranslate?from=${from}&to=${to}&text=${encodeURIComponent(
      text
    )}`
  );
  const data = await response.json();

  res.status(200).json(data);
}
