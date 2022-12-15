import axios from 'axios'
// import { response } from 'express' - remove this if VS code adds it 

export default {
    getAllStates() {
        return axios.get('/api/states').then( response =>{                // this will make a request to the API
            return response.data                                            
        })
    },
    setVisited(stateName, visited) {
        // example URL - api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    }
}