// Utility function to make an HTTP GET request using Axios
const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  };
  
  // Utility function to make an HTTP POST request using Axios
  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error posting data to ${url}:`, error);
      throw error;
    }
  };
  
  // Other utility functions can be added as needed for your application.
  
  export { fetchData, postData };
  