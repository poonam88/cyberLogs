export async function sendLogsToAPI(logs) {
  try {
    const response = await fetch("https://your-backend-api-url.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ logs })
    });

    if (!response.ok) throw new Error("API request failed");
    return await response.json();
  } catch (error) {
    console.error("Error sending logs:", error);
    return [];
  }
}
