import BLOG_DATA from './blog.data'
const INTITAL_STATE = {
    blog_data : BLOG_DATA
}
const blogReducer = (state, action) => {
    switch(action.type) {
        case '1':
            return {
                ...state,
                blog_data: action.payload;
            }
        default:
            return state;
    }
}
export default blogReducer;