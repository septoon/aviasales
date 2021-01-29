import ticketsAPI from "../api/api"

const SET_TICKETS = 'tickets/SET_TICKETS'
const TOGGLE_SORT = 'tickets/TOGGLE_SORT'

let initialState = {
  sort: '',
  tickets: []
}

const ticketsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TICKETS:
      return {...state, tickets: action.tickets }
    case TOGGLE_SORT:
      return {...state, sort: action.sort }
    default:
      return state
  }
}
      
export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets })
export const toggleSort = (sort) => ({ type: TOGGLE_SORT, sort })
      
export const getTickets = () => async (dispatch) => {
  const response = await ticketsAPI()
  dispatch(setTickets(response))
}

export default ticketsReducer