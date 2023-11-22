import secondary_logo from "/src/assets/secondary_logo.png";
import main_logo from "/src/assets/primary_logo.png";
import mainOtherLogo from "/src/assets/main_logo.png";

const Topbar = () => {
  return (
    <div className="w-full fixed top-0 z-50 h-16 bg-purple-900 bg-gradient-to-r from-purple-800 to-purple-950 shadow flex justify-start items-center">
      <div className="flex gap-4 justify-start items-center mx-5 ">
        <img className="h-8" src={mainOtherLogo} alt="secondary logo" />
      </div>
    </div>
  );
};

export default Topbar;
