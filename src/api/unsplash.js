import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID s2etA1OpIewPLpjn91uoBc31vKyesicG4b4GD4HU4Lw",
      }

})
