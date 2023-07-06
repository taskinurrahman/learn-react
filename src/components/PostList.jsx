import Post from "./Post.jsx";
import classes from "./Post.module.css";

function PostList() {
    return <div className={classes.container}>
        <Post author="Taskin" title="React js is awesome"/>
        <Post author="Taskin2" title="React2 js is awesome"/>
        <Post author="Taskin3" title="React3 js is awesome"/>
    </div>
}

export default PostList
