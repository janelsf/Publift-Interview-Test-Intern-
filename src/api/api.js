import axios from 'axios'
let base = ''
export const question1 = params => {
    return axios.get(`${base}/hello`, { params })
}

export const question2 = params => {
    return axios.get(`${base}/question2`, { params })
}

export const question3 = params => {
    return axios.post(`${base}/question3`, params)
}
