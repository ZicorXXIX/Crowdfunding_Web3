import React from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { search, thirdweb, logo } from '../assets';
import axios from 'axios';
const Navbar = ({ handleChange }) => {

    return (
        <div className="flex md:flex-row flex-col-reverse mb-[35px] gap-6 pt-2 pl-5 pr-5 fixed h-[65px] z-40 bg-[#13121a] w-full">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
            </div>
            <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px] ml-40    ">
                <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" onChange={handleChange} />

                <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                    <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
                </div>
            </div>

            <Link to="/createCampaign">  <div className="sm:flex hidden flex-row justify-end gap-4 mb-10 ml-[550px]">
                <button

                    className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071] `}

                >
                    Create Campaign
                </button>
            </div></Link>
            <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
            </div>


        </div>
    )
}

export default Navbar