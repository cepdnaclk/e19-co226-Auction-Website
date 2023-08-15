import axios from "axios";

const API_BASE_URL = "http://localhost:9081/listing/";

class CustomerService{
    getall(){
        return axios.get(API_BASE_URL+"all")
    }
    getItemData(id){
        return axios.get(API_BASE_URL+"item?id="+id)
    }
}

export default new CustomerService();