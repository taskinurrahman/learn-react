import classes from "./Post.module.css";
function Post(props) {
    return (
        <div className={classes.post}>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.author}>{props.author}</p>
        </div>
    )
}

export default Post;