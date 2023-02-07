import './Footer.scss';

const Footer = (props) => {
    const {isOpenPost,setOpenPost} = props;
    return (
        <footer>
            <div className="footer-title" onClick={() => setOpenPost(!isOpenPost)}>
                {isOpenPost ? 'x' : '+'}
            </div>
        </footer>
    )
}

export default Footer;