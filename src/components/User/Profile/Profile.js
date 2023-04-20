import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import "./profile.css";
import profileImage from "../../../assets/Extra/checkout.png";

const Profile = () => {
  const { setUser, firstName, lastName } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="profile">
        <div className="heading">My Account</div>
        <div className="sub-heading text-center profile-paragraph">
          Welcome back
          <span>{" " + firstName + " " + lastName}</span>
          <img src={profileImage} alt="" className="profile-image" />
        </div>
        <div className="body">
          <div className="row ">
            <div className="col">
              <div className="label">My Orders</div>
              <hr />
              {cartItems.map(cartItem => (
                <div className="orders" key={cartItem.id}>
                  <img
                    className="order-image"
                    src={cartItem.photo}
                    alt={cartItem.name}
                  />
                  <h2>{cartItem.name}</h2>
                </div>
              ))}
            </div>
            <div className="col">
              <div className="label">Primary Address</div>
              <hr />
              <Link to="address">
                <button className="submit-btn" style={{ cursor: "pointer" }}>
                  Edit Address
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={() => setUser(false)}
          className="submit-btn"
          style={{
            cursor: "pointer",
            width: "10rem",
            margin: "0 auto",
            display: "block",
            marginTop: "5rem",
          }}
        >
          LOG OUT
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
