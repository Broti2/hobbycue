import Image from 'next/image';
import React from 'react';
import plus from '../../public/plus.svg';
import logo from './logo.svg';
import hobby from '../../public/hobies.svg';
import down from '../../public/downarrow.svg';
import explor from '../../public/explore.svg';
import bookmark from '../../public/bookmark.svg';
import bell from '../../public/bell.svg';
import cart from '../../public/cart.svg';
import menu from '../../public/menu.svg';
import msearch from '../../public/search.svg';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SearchIcon from '@mui/icons-material/Search';
import profile from './profile.svg';
import Link from 'next/link';
export default function page() {
  return (
    <div>
      <nav
        id="home"
        className=" px-[5%] md:px-20 h-[80px] flex justify-between py-5"
      >
        <ul className="flex  md:justify-between lg:w-1/2 md:w-4/5 ">
          <li className="w-[60px] max-sm:h-[32px] max-sm:w-[60px] h-[60px]">
            <Link href={'/'}>
              <Image
                className="w-full h-full"
                height={60}
                width={60}
                alt=""
                src={logo}
              ></Image>
            </Link>
          </li>
          <li className="py-3 ">
            <form className="w-full h-[40px] max-sm:hidden flex ">
              <input
                className="w-full h-full border-2 rounded-l-lg px-3"
                placeholder="search here..."
                type="search"
                name=""
                id=""
              />
              <button
                className="bg-[--purple] h-[40px] w-[40px] px-2 rounded-r-lg"
                type="submit"
              >
                <SearchIcon sx={{ color: 'white' }} />
              </button>
            </form>
          </li>
        </ul>
        <div className="lg:w-1/2 1/5  max-sm:w-2/5">
          <ul className=" flex lg:space-x-4 justify-end  custom:space-x-1   lg:w-full  ">
            <li
              id="h"
              className="show-on-hover lg:block hidden py-5 px-2 cursor-pointer"
            >
              <div className="flex">
                <Image alt="" src={explor} />
                <h1 className="poppins-regular text-balance ml-1">Explore</h1>
                <Image alt="" src={down} />
              </div>

              <ul
                className={`dropdown absolute top-20 border-2 rounded-lg z-10  bg-white hidden`}
              >
                <li className="py-2 px-5 text-gray-600 hover:opacity-100 hover:text-[--text] hover:bg-gray-200 ">
                  People - Community
                </li>
                <li className="py-2 px-5 text-gray-600 hover:opacity-100 hover:text-[--text] hover:bg-gray-200 border-y-[1px]">
                  Places - Venues
                </li>
                <li className="py-2 px-5 text-gray-600 hover:opacity-100 hover:text-[--text] hover:bg-gray-200 border-y-[1px]">
                  Programs - Events
                </li>
                <li className="py-2 px-5 text-gray-600 hover:opacity-100 hover:text-[--text] hover:bg-gray-200 border-y-[1px]">
                  Products - Store
                </li>
                <li className="py-2 px-5 text-gray-600 hover:opacity-100 hover:text-[--text] hover:bg-gray-200 ">
                  Blogs
                </li>
              </ul>
            </li>
            <li className=" py-5 px-2   max-custom:hidden block  cursor-pointer">
              <div className="flex">
                <Image alt="" src={hobby} />
                <h1 className="poppins-regular text-balance ml-1">
                  Hobbies
                </h1>{' '}
                <Image alt="" src={down}></Image>
              </div>
            </li>
            <li className="py-5 px-2 lg:block hidden cursor-pointer">
              <Image alt="" src={bookmark}></Image>
            </li>
            <li className="py-2 hidden max-sm:block cursor-pointer">
              <Image alt="" width={24} height={24} src={msearch}></Image>
            </li>
            <li className="pt-5 px-2 max-sm:py-2 cursor-pointer">
              <Image height={24} alt="" src={bell}></Image>
            </li>
            <li className="py-5 px-2 lg:block hidden cursor-pointer">
              <Image alt="" src={cart}></Image>
            </li>
            <li className="py-3 px-2  hidden lg:block cursor-pointer">
              <div className="w-[40px] h-[40px] ">
                <Image alt='' src={profile}></Image>
              </div>
            </li>
            <li className="max-sm:py-2 py-5 lg:hidden block">
              <Image alt="" src={menu}></Image>
            </li>
          </ul>
        </div>
      </nav>
      <section className="p-[4%] lg:px-40">
        <div className="flex pb-8 justify-center">
          <Image width={40} height={40} alt="" src={plus}></Image>
          <h1 className="text-xl font-semibold py-3 px-3">Add your own</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
          <div id='purple' className="hover:bg-[--purple] hover:text-white hover:scale-105 duration-300 delay-150 ease-out border-2 border-[--purple]  text-justify rounded-lg  p-[6%]">
            <div className="flex ">
                <div className='purple w-[40px] h-[36px]'><GroupsIcon sx={{height:'100%',width:'100%'}} /></div>
              
              <h1 className="px-4 text-[24px] font-semibold ">People</h1>
            </div>
            <p className="py-5">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
          </div>
          <div id='green' className="hover:bg-[--green] hover:text-white hover:scale-105 duration-300 delay-150 ease-out border-2 border-[--green] text-justify rounded-lg p-[6%]">
            <div className="flex ">
            <div className='green w-[40px] h-[36px]'><LocationOnIcon sx={{height:'100%',width:'100%'}} /></div>
              <h1 className="px-4 text-[24px] font-semibold ">Place</h1>
            </div>
            <p className="py-5">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
          </div>
          <div id='red' className="hover:bg-[--red] hover:text-white hover:scale-105 duration-300 delay-150 ease-out border-2 border-[--red] text-justify rounded-lg p-[6%]">
            <div className="flex ">
            <div className='red w-[40px] h-[36px]'><BusinessCenterIcon sx={{height:'100%',width:'100%'}} /></div>
              <h1 className="px-4 text-[24px] font-semibold ">Product</h1>
            </div>
            <p className="py-5">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
          </div>
          <div id='blue' className="hover:bg-[--blue] hover:text-white hover:scale-105 duration-300 delay-150 ease-out  border-2 border-[--blue] rounded-lg text-justify p-[6%]">
            <div className="flex ">
            <div className='blue w-[40px] h-[36px]'><AssignmentTurnedInIcon sx={{height:'100%',width:'100%'}} /></div>
              <h1 className="px-4 text-[24px] font-semibold ">Program</h1>
            </div>
            <p className="py-5">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
          </div>
        </div>
      </section>  
    </div>
  );
}
