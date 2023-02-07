import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/apiRequest';
import './EditPage.scss';

const EditPage = (props) => {
    const {setEdit} = props;
    const avaUrls = [
    "https://i.redd.it/snoovatar/snoo_assets/runways/bVcOgaURarc_avatar_44905151.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/u3bT4J2tjzc_avatar_44904747.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/MAxhE9KnCjc_avatar_44904370.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/RXsx3VL3Els_Asset_83_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/Ra8JTLedtR0_Asset_88_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/31glVZohNOc_avatar_28573340.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/RBofqUaNnZs_Asset_243_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/2naT8G7FCH4_avatar_28577496.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/puUJ_tJZXbM_avatar_28576791.jpg",
    "https://i.redd.it/snoovatar/snoo_assets/runways/EiZG1vOUi_w_Asset_171_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/0RVhnBb6rL4_Asset_185_552x_RightFacing.png",
    "https://i.redd.it/snoovatar/snoo_assets/runways/iq1iIoYokoY_Asset_189_552x_RightFacing.png"
    ];

    const user = useSelector((state) => state.user) // get
    const dispatch = useDispatch(); // truyền

    const [name,setName] = useState(user.name);
    const [age,setAge] = useState(user.age)
    const [about,setAbout] = useState(user.about)
    const [theme,setTheme] = useState(user.theme)
    const [avaUrl,setavaUrl] = useState(user.avaUrl)

    const [selectedIndex, setSelectedIndex] = useState(avaUrls.indexOf(avaUrl))

    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        const updatedUser = {
            name,
            age,
            about,
            theme,
            avaUrl
        }
        updateUser(updatedUser, dispatch);
    }
    return (
        <>
            <form >
                <section className="edit-container">
                    <button className="close" onClick={handleSubmit}>
                        Save
                    </button>
                    <div className="edit-profile">
                        Edit Profile
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Display name</label>
                        <input type="text" className="form-control" placeholder="Your name here" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Your age here" onChange={(e) => setAge(e.target.value)}/>
                        <label htmlFor="">About</label>
                        <textarea className="input-about" onChange={(e) => setAbout(e.target.value)}/>
                    </div>
                    <label>Profile Picture</label>
                    <div className="input-image-container">
                        {avaUrls.map((url, index) => {
                            return (
                                <>
                                    <img alt='' key={index} src={url} className={selectedIndex === index ? "input-image input-image-selected" : 'input-image'} onClick={(e) => {setavaUrl(e.target.src); setSelectedIndex(index)}}/>
                                </>
                            )
                        })}
                    </div>
                    <div className="theme-container">
                        <label htmlFor="">Theme</label>
                        <input type="color" className="theme-color" onChange={(e) => setTheme(e.target.value)}/>
                    </div>
                </section>
            </form>
        </>
    )
}

export default EditPage;