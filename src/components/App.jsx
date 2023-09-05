import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics";




import userInfo from "data/user.json"


export const App = () => {
  return (
    <div>
      <Profile user={userInfo} />
      <Statistics/>
    </div>
  );
};
