import { getCookie, getCookies, removeAllCookies } from "../Utils/Cookie";

function getAuthInfoFromCookie() {
  let data = getCookies()
  console.log(data)
  if (data.size > 0) {
    return {
      isAuthenticated: data.get("token") ? true : false,
      name: data.get("name"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      token: data.get("token"),
      profileImage: data.get("profileImage"),
      roles: localStorage.getItem("roles").split(",")
    }
  }
}


export const initialState = {
  term: null,
  authentication: getAuthInfoFromCookie() ? getAuthInfoFromCookie() : {
    isAuthenticated: true,
    name: "فرهاد ",
    lastName: "رضایی",
    email: "farhad@gmail.com",
    token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGloZXJhd2k3QGdtYWlsLmNvbSIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdjEvYXV0aC9hdXRoZW50aWNhdGUiLCJleHAiOjE2OTExNzQ4MjB9.uubf1kNwlw3mNVvqI1PMR_L862CSYILr57gq7Nmayw8",
    profileImage: "http://localhost:1000/api/v1/files/student-profiles/1",
    roles: ["admin"]
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
