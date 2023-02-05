import { CREATE_BLOG } from "../actionTypes/blog.actionTypes"

export const createBlog = (data) =>{
    return {
        paload: data,
        type: CREATE_BLOG
    }
}