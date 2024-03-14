import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <main className="">
      <section className="flex items-center justify-between p-3">
        <div className="flex items-center gap-x-1 lg:gap-x-3">
          <img
            className="w-[35px] lg:w-[80px] rounded-full"
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/364804848_791739752953899_5445063310506889506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHJw3nwgKtKERI5bxw18RdN0DUfkZvfNsjQNR-Rm982yECPUxEqmVqRI7m_XHLH-l0R2auXkC2ZCDi74jZmZm2Z&_nc_ohc=H4iN6AM_EZAAX9K9QMT&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDKqbbrH-hQuAG_yOpFtQjWX8VE5Wcc_4MVzGRJPBMVEw&oe=65C7DD68"
            alt=""
          />
          <div>
            <Link
              to={"/"}
              className=" text-lg lg:text-5xl font-semibold text-blue-900"
            >
              My Todo
            </Link>
          </div>
        </div>

        {/* Task create button start here  */}
        <Link
          to={"/task-create"}
          className=" flex items-center gap-x-2  text-blue-900 text-sm font-semibold lg:text-3xl lg:font-bold  rounded-lg px-2"
        >
          Create Task <FaRegEdit />
        </Link>
        {/* Button end here  */}
      </section>
      <hr className="h-1 bg-blue-900" />
    </main>
  );
};

export default Header;
