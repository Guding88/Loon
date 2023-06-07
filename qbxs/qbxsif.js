try {
  const jsonData = JSON.parse($response.body);
  console.log("Valid JSON");
} catch (error) {
  console.log("Invalid JSON");
}
