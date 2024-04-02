import { AiFillHeart } from "react-icons/ai";
import './Like.css';
import { MoviesId } from "../../type";
/* AiOutlineHeart */


const Like = ({ onClick, color }: MoviesId) => {


    return (
        <>
            <AiFillHeart onClick={onClick}
                color={color} className="redHeart" size={22} />
        </>
    )
}

export default Like

/* color="#ff0b00" */