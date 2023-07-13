const APIEndpoints = {
    root: "http://localhost:1000/api/v1/",
    students: {
        getAll: "students/?",
        addStudent: "students"
    },
    posts: {
        getAllPostsForStudent: "posts/student",
        getAllPostsForAdmin: "posts/?",
        getPost: "posts/",
        addPost: "posts"

    },
    fieldOfStudy: {

    }


}

export default APIEndpoints;