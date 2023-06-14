import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwoString, id } = resData?.data;

    return (
        <div className="card">
            <div className="card-style">
                <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="img-content" />
                <h2 className="card-title">{name}</h2>
                <h3 className="card-subtitle">{cuisines.join(", ")}</h3>
                <div className="card-items">
                    <span className="card-ratings">★ {avgRating}</span>
                    <span>{deliveryTime} MIN</span>
                    <span>{costForTwoString}</span>
                </div>
                <Link to={"/restaurant/" + id} key={id}>
                    <button className="card-btn">Menu</button>
                </Link>
            </div>
        </div>
    )
}

export default RestaurantCard;