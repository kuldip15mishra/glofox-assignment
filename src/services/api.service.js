


//library import section Begin
import axios from 'axios';
import { apiURL, httpStatusCodes } from "../constant"
//library import section End

class HttpClient {
    constructor() {
        this.api = null;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    //it is a method which initalize http instance
    getInitializedApi() {
        if (this.api) return this.api; // return initialized api if already initialized.
        return (this.api = axios.create({
            baseURL: this.getBaseUrl(),
            responseType: 'json',

            // withCredentials: true
        }));
    }

 
    //it is a method which return base url
    getBaseUrl() {
        // Insert logic here to get the baseURL by either:
        // 1. Sniffing the URL to determine the environment we're running in.
        // 2. Looking for an environment variable as part of the build process.
        return apiURL.BASE_URL
    }

    
   

    //it is a method which use at the time of get
    get(url, header = null) {
      
        return this.getInitializedApi().get(url, { headers: header === null ? this.headers : header });
    }

    //it is a method which use at the time of Post
    post(url, data, header = null) {
        
        return this.getInitializedApi().post(url, data, { headers: header === null ? this.headers : header });
    }


    
}

export default HttpClient
