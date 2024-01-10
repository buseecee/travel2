import axios from "axios";

const YelpApi = async (location) => {
  try {
    const response = await axios.create(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: "Bearer_UHFGCMnT2RVhKF7664Jzi06zdvSOmVvpBo2dMrRz1mrSObFKhsYKJ43yHogsi0bso47W3vEoQVd6XlDYd0JfHbZf0hgEGO4ACBb0QZGZxOaR912TgLXacXVzgeYZXYx",
        },
        params: {
          term: "Travel",
          location: "Istanbul",
        },
      }
    );
 return response.data.businesses;
  } catch (error) {
    console.error("Error searching travel businesses:", error);
    throw error; // Hata durumunda kontrolü dışa aktarabilirsiniz
  }
};

export default YelpApi;
