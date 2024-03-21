// Importing necessary modules and functions
// axios is a popular library for making HTTP requests
import axios from 'axios';
import { base_url } from "./api.utils";


// Creating an instance of Axios with the base URL
const http = axios.create({
    baseURL: base_url,
});

// Exporting the configured Axios instance for use in other parts of the application
export default http;
