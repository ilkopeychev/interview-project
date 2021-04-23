import { GET_CUSTOMERS } from './actions';
import { AnyAction } from 'redux'
import { Person } from './DataTypes'


export interface PersonState {
  data: Person[];
}


const initialState  = {
  data: []
} as PersonState



export default function counterReducer(
  state: PersonState = initialState,
  action: AnyAction
) {
  switch(action.type){
    case GET_CUSTOMERS: 
     return { // returning a copy of orignal state 
      ...state, //spreading the original state
      data: action.payload // new customers array
     }
     default: 
     return state
}
}