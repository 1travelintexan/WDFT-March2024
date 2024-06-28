import { useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import MyCarousel from "../../components/MyCarousel";

function ProfilePage() {
  const [profileUser, setProfileUser] = useState(null);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5005/auth/profile/${currentUser._id}`)
      .then((res) => {
        console.log("here is the response on the profile page", res);
        setProfileUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser]);
  //do a spinner to wait for the response from the server
  // if (!profileUser) {
  //   return <p>Spinning....</p>;
  // }

  return (
    <div>
      <h1>{profileUser?.username}'s Profile page</h1>
      <img
        src={profileUser?.userImage}
        alt={profileUser?.username}
        style={{ height: "250px" }}
      />
      <MyCarousel />
    </div>
  );
}

export default ProfilePage;
