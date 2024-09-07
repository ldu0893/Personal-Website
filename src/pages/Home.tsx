import generic_profile_icon from "../static/generic-profile-icon.png"
import profile_icon from "../static/profile-icon.png"
const Home = () => {

  return (
    <>
    <div className="space-y-7">
        <p
        className="font-medium text-5xl text-white text-center">
            Hi, I'm Larry Du.
        </p>
        <div className="flex justify-center">
        <img
            className="rounded-full h-40 w-40 ring-2 ring-white"
            src={profile_icon}
            alt=""
        />
        </div>
        <p className="text-white text-2xl text-center">
            Check out my projects!
        </p>
    </div>
    </>
  );
}

export default Home;