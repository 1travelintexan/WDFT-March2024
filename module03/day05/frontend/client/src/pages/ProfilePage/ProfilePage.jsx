import { useContext } from "react";
import "./ProfilePage.css";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>{currentUser.username}'s Profile page</h1>
    </div>
  );
}

export default ProfilePage;
