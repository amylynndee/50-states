import axios from 'axios'
// import { response } from 'express' - remove this if VS code adds it 

export default {
    getAllStates() {
        return axios.get('/api/states').then( response =>{
            return response.data
        })
    },
    setVisited(stateName, visited) {
        // example URL - api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    }
}