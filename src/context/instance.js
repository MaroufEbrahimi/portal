import axios from "axios"

const instance = axios.create({
  baseURL: "https://portal-74fb4-default-rtdb.firebaseio.com/",
})

export default instance
