import Post from "./Post.jsx";
import classes from "./Post.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";

function PostList() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeTitleHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    return <>
        <NewPost onTitleChange = {changeTitleHandler} onAuthorChange = {changeAuthorHandler}/>
        <div className={classes.container}>
            <Post author={enteredAuthor} title={enteredTitle}/>
            <Post author="Taskin2" title="React2 js is awesome"/>
            <Post author="Taskin3" title="React3 js is awesome"/>
        </div>
    </>

}

export default PostList
