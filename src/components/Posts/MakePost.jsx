import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import './MakePost.scss';

const MakePost = (props) => {
    const {setOpenPost} = props;
    const dispatch = useDispatch()
    const [title,setTitle] = useState("Add a title")
    const [desc,setDesc] = useState("Add a description")
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const handlePost = () => {
        setOpenPost(false)
        const newPost = {
            title,
            description: desc,
            tag: selectedIndex
        }
        dispatch(createPost(newPost))
    }
    return (
        <>
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>Post</p>
            </div>
            <label>Title</label>
            <textarea placeholder={title} className="makepost-title" onChange={(e) => setTitle(e.target.value)}/>
            <label>Description</label>
            <textarea placeholder={desc} className="makepost-desc" onChange={(e) => setDesc(e.target.value)}/>
            <label htmlFor="">Tags</label>
                <div className="makepost-tags">
                    {tags.map((tag, index) =>{
                        return (
                            <button key={index} className={`${selectedIndex === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}`} onClick={() => setSelectedIndex(index)}> {tag} </button>
                        )
                    })}

                </div>
        </section>
        </>
    )
}

export default MakePost;