import axios from "axios";


const getUser =async(user_id) => {
const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
return "User : ",user;
    };


const getPost= async (user_id) => {
    
const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);

return "Posts:",posts;

    };




const getData = async (user_id) => {
    
    const user = await getUser(user_id);
    const posts = await getPost(user_id);
    return {user, posts};
}

export default getData;

