function getAuthInfoFromLocalStorage() {
  if (localStorage.length > 0) {
    return {
      isAuthenticated: localStorage.getItem("token") ? true : false,
      name: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
      imageUrl: localStorage.getItem("imageUrl"),
      roles: localStorage.getItem("roles")?.split(","),
    }
  }
}

export const initialState = {
  term: null,
  authentication: getAuthInfoFromLocalStorage()
    ? getAuthInfoFromLocalStorage()
    : {
        isAuthenticated: false,
        name: null,
        lastName: null,
        email: null,
        token: null,
        userId: null,
        profileImage: null,
        roles: [],
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
  LOGOUT: "LOGOUT",
  REMOVE_STUDENT_REGISTERATION_STATE: "REMOVE_STUDENT_REGISTERATION_STATE",
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
        authentication: {
          ...action.payload,
          isAuthenticated: true,
        },
      }
    case actionTypes.ADD_STUDENT_PERONAL_INFO:
      return {
        ...state,
        studentPersonalInfo: action.payload,
      }
    case actionTypes.ADD_STUDENT_RELATIONS:
      return {
        ...state,
        studentRelations: action.payload,
      }
    case actionTypes.ADD_STUDENT_IDENTIFICATION:
      return {
        ...state,
        studentIdenfication: action.payload,
      }
    case actionTypes.ADD_STIUDENT_LOCATIONS:
      return {
        ...state,
        studentLocations: action.payload,
      }
    case actionTypes.ADD_STUDENT_IMAGE:
      return {
        ...state,
        studentImage: action.payload,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        authentication: {
          isAuthenticated: false,
          name: null,
          lastName: null,
          email: null,
          token: null,
          userId: null,
          profileImage: null,
          roles: [],
        },
      }
    case actionTypes.REMOVE_STUDENT_REGISTERATION_STATE:
      return {
        ...state,
        studentIdenfication: {},
        studentLocations: {},
        studentImage: {},
        studentRelations: {},
        studentPersonalInfo: {},
      }
    default:
      return state
  }
}

export default reducer
