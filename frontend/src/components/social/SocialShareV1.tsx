import { Link } from "react-router-dom";

const SocialShareV1 = () => {
    return (
        <>
            <li>
                <Link to="https://www.instagram.com/lifexbytes/?next=%2Flovazeinners%2F" target="_blank">
                    <i className="fab fa-instagram-f" />
                </Link>
            </li>
            {/* <li>
                <Link to="https://dribbble.com" target="_blank">
                    <i className="fab fa-dribbble" />
                </Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li> */}
        </>
    );
};

export default SocialShareV1;