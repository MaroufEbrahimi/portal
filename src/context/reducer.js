import { getCookie, getCookies, removeAllCookies } from "../Utils/Cookie";

function getAuthInfoFromCookie() {
  let data = getCookies()
  console.log(data)
  if (data.size > 0) {
    return {
      isAuthenticated: data.get("token") ? true : false,
      name: data.get("name"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      token: data.get("token"),
      userId: data.get("userId"),
      imageUrl: data.get("imageUrl"),
      roles: localStorage.getItem("roles").split(",")
    }
  }
}


export const initialState = {
  term: null,
  authentication: getAuthInfoFromCookie() ? getAuthInfoFromCookie() : {
    isAuthenticated: true,
    name: null,
    lastName: null,
    email: null,
    token: null,
    userId: null,
    profileImage: null,
    roles: []
  },

}

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_AUTHENTICATION: "SET_AUTHENTICATION",
  ADD_STUDENT_PERONAL_INFO: "ADD_STUDENT_PERONAL_INFO",
  ADD_STUDENT_IDENTIFICATION: "ADD_STUDENT_IDENTIFICATION",
  ADD_STIUDENT_LOCATIONS: "ADD_STIUDENT_LOCATIONS",
  ADD_STUDENT_RELATIONS: "ADD_STUDENT_RELATIONS",
  ADD_STUDENT_IMAGE: "ADD_STUDENT_IMAGE",

}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      }
    case actionTypes.SET_AUTHENTICATION:
      return {
        ...state,
        authentication: action.payload
      }
    case actionTypes.ADD_STUDENT_PERONAL_INFO:
      return {
        ...state,
        studentPersonalInfo: action.payload
      }
    case actionTypes.ADD_STUDENT_RELATIONS:
      return {
        ...state,
        studentRelations: action.payload
      }
    case actionTypes.ADD_STUDENT_IDENTIFICATION:
      return {
        ...state,
        studentIdenfication: action.payload
      }
    case actionTypes.ADD_STIUDENT_LOCATIONS:
      return {
        ...state,
        studentLocations: action.payload
      }
    case actionTypes.ADD_STUDENT_IMAGE:
      return {
        ...state,
        studentImage: action.payload
      }
    default:
      return state
  }
}

export default reducer
