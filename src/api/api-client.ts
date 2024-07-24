import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'2e93eb47f3aa482ebfece627950243e8'
    }
})

