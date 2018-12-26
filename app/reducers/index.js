// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import allCampuses from './AllCampuses'
import allStudents from './AllStudents'


const rootReducer = combineReducers({
  allCampuses,
  allStudents
})

export default rootReducer
