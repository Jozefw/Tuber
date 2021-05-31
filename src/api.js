import axios from 'axios';

const API_KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
// const API_KEY = 'AIzaSyAsx3W5AT_pfcILbv8x3F8QWjpqPJZK16k';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:API_KEY,
        type: 'video'
    }

})