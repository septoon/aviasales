import ticketsAPI from "../api/api"
const SET_TICKETS = 'tickets/SET_TICKETS'

let initialState = {    
    tickets: []
}

const ticketsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TICKETS:
      return {...state, tickets: action.tickets }
    default:
      return state
  }
}
      
export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets })
      
export const getTickets = () => async (dispatch) => {
  const response = await ticketsAPI()
  console.log(response)
  dispatch(setTickets(response))
}

// export const getTickets = () => (dispatch) => {
//   // debugger
//   ticketsAPI().then(response => {
//     dispatch(setTickets(response))
//     console.log(response)
//   })
// }

export default ticketsReducer