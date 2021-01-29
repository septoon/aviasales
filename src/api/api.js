import * as axios from 'axios'

const searchAPI = {
  getId: async () => {
    const id =  await axios.get('https://front-test.beta.aviasales.ru/search')
    .then(response => {
      return response.data  
    })
    return id
  }
}

const ticketsAPI = async () => {
  const response = await searchAPI.getId()
  return axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${response.searchId}`)
  .then(resp => {
    return resp.data.tickets 
  })
}

export default ticketsAPI
