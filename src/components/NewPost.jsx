import {useState} from "react";

function NewPost(props) {

    return (
        <form>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onTitleChange }></textarea>
            </p>
            <p>
                <label htmlFor="name">Author</label>
                <textarea id="name" required onChange={props.onAuthorChange } ></textarea>
            </p>
        </form>
    )

}

export default NewPost;