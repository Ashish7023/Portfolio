import "./Box.css";
import User from "./User/User";
const LeftBox = () => {
  return (
    <div className="leftbox py-32 text-7xl lg:flex lg:flex-col lg:justify-between">
      <User />
    </div>
  );
};

export default LeftBox;
