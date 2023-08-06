const APIEndpoints = {
    root: "http://localhost:5000/api/v1/",
    students: {
        getAll: "students/?",
        addStudent: "students",
        getStudent: (id) => `students/${id}`,
        updateStudent: (id) => `students/${id}`,
        deleteStudent: (id) => `students/${id}`
    },
    posts: {
        getAllPostsForStudent: "posts/student",
        getAllPostsForAdmin: "posts/?",
        getPost: "posts/",
        addPost: "posts",
        update: (id) => "posts/" + id,
        toggleHideShow: (id) => `posts/${id}/hide-show`,
        deletePost: (id) => `posts/${id}`,
    },
    fieldOfStudy: {
        getAll: "field-of-studies",
        depratments: (id) => "field-of-studies/" + id + "/departments"
    },
    login: {
        login: "auth/authenticate",
        update: "auth/update-user",
        lock: (id) => "auth/lock/" + id,
        unlock: (id) => "auth/unLock/" + id
    },
    attendances: {
        addAttendance: "attendances",
        getStudentAttendances: "attendances/?"

    },
    subjects: {
        subjectSearch: "subjects/search?"
    }



}

export default APIEndpoints;