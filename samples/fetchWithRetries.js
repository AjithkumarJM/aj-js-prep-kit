const fetchWithRetries = async (url, numberOfRetries) => {
  let attempts = 1;

  const makeRequest = async () => {
    try {
      console.log(`attempt ${attempts} fetching ...`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (attempts < numberOfRetries) {
        console.log(`Attempt ${attempts} failed. Retrying...`);
        attempts++;
        await makeRequest();
      }

      if (attempts === numberOfRetries) {
        console.log(`Attempt ${attempts} failed. Stopping...`);
      }

      throw new Error(
        `Failed after ${numberOfRetries} retries: ${error.message}`
      );
    }
  };

  return await makeRequest();
};

// Usage
fetchWithRetries("https://dummyjson.com/productss", 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
