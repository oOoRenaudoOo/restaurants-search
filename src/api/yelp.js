import axios from "axios";


export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer MSLKrhBaMfJX8TtZPnHY1eTSNLNs8fJgWuTCZAbjrmya6pzGbx8I4Us80LNHR9xtF0lzgi3IyTBMGGxkiQU3MK_UZcruRIZw9pLxEPWu5R5vTHacYQu7K2q26okVY3Yx"
  }
})