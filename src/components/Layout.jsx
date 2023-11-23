// eslint-disable-next-line react/prop-types

import NavigateChip from "./NavigateChip";
import "/src/scrollbar.css";

const Layout = ({ children , bgimg }, ) => {
  return (
    <div
      className={` pt-16 min-h-screen  ${bgimg ? bgimg : "bg-bg_img"}  bg-cover bg-fixed `}
    >
      <div className="sm:ml-14">{children}</div>
    </div>
  );
};

export default Layout;
