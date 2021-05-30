import axios from 'axios';

const API_KEY = 'AIzaSyBciA_cWsCgYBvj4LcMysbxF6aeC25llys';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key:API_KEY,
        part:"snippet",
        maxResults:5,
        type: "video"
    },

})