'use client';
import Image from 'next/image';
import logo from '../public/hobbycue.png';
import hobby from '../public/hobies.svg';
import down from '../public/downarrow.svg';
import explor from '../public/explore.svg';
import SearchIcon from '@mui/icons-material/Search';
import bookmark from '../public/bookmark.svg';
import bell from '../public/bell.svg';
import cart from '../public/cart.svg';
import menu from '../public/menu.svg';
import msearch from '../public/search.svg';
import google from '../public/google.svg';
import fb from '../public/facebook.svg';
import group from '../public/group.svg';
import lock from '../public/lock.svg';
import people from '../public/people.svg';
import place from '../public/place.svg';
import product from '../public/product.svg';
import program from '../public/program.svg';
import plus from '../public/plus.svg';
import quot from '../public/quote.svg';
import audio from '../public/audio.svg';
import audioauth from '../public/audioauth.svg';
import up from '../public/up.svg';
import lastgroup from '../public/lastgroup.svg';
import faceb from '../public/social/first.svg';
import twitter from '../public/social/second.svg';
import insta from '../public/social/third.svg';
import print from '../public/social/fourth.svg';
import goog from '../public/social/fifth.svg';
import youtube from '../public/social/sixth.svg';
import telegram from '../public/social/seventh.svg';
import gmail from '../public/social/eight.svg';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [tabs, setTabs] = useState('1');
  const [hidden,setHidden]=useState('hidden');
  return (
    <>
      <nav
        id="home"
        className=" px-[5%] md:px-14 h-[80px] flex justify-between py-5"
      >
        <ul className="flex justify-between lg:w-1/2 md:w-4/5 ">
          <li className="w-[293.26px] max-sm:h-[32px] max-sm:w-[156.4px] h-[60px]">
            <Image
              className="w-full h-full"
              height={60}
              width={293.26}
              alt=""
              src={logo}
            ></Image>
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
              <div className="w-[112px] h-[40px] border-2 border-[--purple] rounded-lg">
                <h1 className="text-[--purple] text-lg font-semibold p-1 px-5">
                  Sign In
                </h1>
              </div>
            </li>
            <li onClick={()=>(hidden===' hidden '?setHidden(''):setHidden(' hidden '))} className={"cursor-pointer max-sm:py-2 py-5  "+(hidden===' hidden ')?" lg:hidden":hidden}>
              <Image className='cursor-pointer py-2 md:py-5 mx-3' alt="" src={menu}></Image>
              
            </li>
          </ul>
        </div>
      </nav>
      <section className="px-[4%]">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 pt-[5%] px-[5%] bg-[--bg] rounded-xl">
          <div className="text-justify ani2">
            <h1 className=" text-3xl pb-5 font-semibold italic">
              Explore your <span className="text-[--blue]">hobby</span> or{' '}
              <span className="text-[--purple]">passion</span>
            </h1>
            <p className="py-5">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="pb-10">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <Image className="hidden lg:block" alt="" src={group}></Image>
          </div>
          <div className="lg:pl-40">
            <div className="flex">
              <div
                onClick={() => setTabs('1')}
                className={
                  ' transition-all duration-300 delay-150  cursor-pointer  text-2xl font-semibold w-fit' +
                  (tabs === '1'
                    ? '  text-[--purple] border-b-4 border-[--purple] '
                    : ' text-gray-600 ')
                }
              >
                Sign In
              </div>
              <div
                onClick={() => setTabs('2')}
                className={
                  'cursor-pointer mx-4  text-2xl font-semibold w-fit' +
                  (tabs === '2'
                    ? ' transition-all duration-300 delay-150 text-[--purple] border-b-4 border-[--purple] '
                    : ' text-gray-600 ')
                }
              >
                Join Us
              </div>
            </div>
            <div className={tabs === '1' ? 'ani py-8 space-y-5' : 'hidden'}>
              <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
                <Image alt="" width={20} height={20} src={google}></Image>
                <h1 className="py-1 text-md font-semibold text-center w-full">
                  Continue with Google
                </h1>
              </div>
              <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
                <Image alt="" width={20} height={20} src={fb}></Image>
                <h1 className="py-1 text-md font-semibold text-center w-full">
                  Continue with Facebook
                </h1>
              </div>
              <div className="flex items-center pymd">
                <hr className="flex-grow border-t-2 border-gray-300" />
                <span className="mx-2 font-semibold">Or Connect with</span>
                <hr className="flex-grow border-t-2 border-gray-300" />
              </div>
              <form className="grid grid-cols-1">
                <input
                  className="h-10 w-full px-5 rounded-md"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  className="h-10 w-full px-5 rounded-md my-5"
                  placeholder="password"
                  type="Password"
                  name=""
                  id=""
                />
                <div className="flex justify-between pb-6">
                  <div className="flex ">
                    <input type="checkbox" name="" id="remember" />
                    <div className="text-sm px-2">Remember me</div>
                  </div>
                  <div className="flex">
                    <Image alt="" src={lock}></Image>
                    <h1 className="text-sm">Forget password?</h1>
                  </div>
                </div>
                <button className="px-5  w-full h-[40px] rounded-md border-2 border-[--purple] flex ">
                  {' '}
                  <h1 className="py-1 text-lg font-semibold text-center w-full">
                    Continue
                  </h1>
                </button>
              </form>
            </div>
            <div className={tabs === '2' ? 'ani py-8 space-y-5' : 'hidden'}>
              <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
                <Image alt="" width={20} height={20} src={google}></Image>
                <h1 className="py-1 text-md font-semibold text-center w-full">
                  Continue with Google
                </h1>
              </div>
              <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
                <Image alt="" width={20} height={20} src={fb}></Image>
                <h1 className="py-1 text-md font-semibold text-center w-full">
                  Continue with Facebook
                </h1>
              </div>
              <div className="flex items-center pymd">
                <hr className="flex-grow border-t-2 border-gray-300" />
                <span className="mx-2 font-semibold">Or Connect with</span>
                <hr className="flex-grow border-t-2 border-gray-300" />
              </div>
              <form className="grid grid-cols-1">
                <input
                  className="h-10 w-full px-5 rounded-md"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  className="h-10 w-full px-5 rounded-md mt-5"
                  placeholder="password"
                  type="Password"
                  name=""
                  id=""
                />
                <div className="flex justify-end pt-1 pb-3">
                  <h1 className="text-sm text-gray-400">Password Strenght</h1>
                </div>
                <p className="text-gray-500 text-sm pb-3">
                  By continuing, you agree to our{' '}
                  <span className="cursor-pointer text-[--text]">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="cursor-pointer text-[--text]">
                    Privacy Policy
                  </span>
                  .
                </p>
                <button className="px-5 bg-[--purple]  w-full h-[40px] rounded-md border-2 border-[--purple] flex ">
                  {' '}
                  <h1 className="py-1 text-lg font-semibold text-white text-center w-full">
                    Agree and Continue
                  </h1>
                </button>
              </form>
            </div>
            <Image className=" lg:hidden" alt="" src={group}></Image>
          </div>
        </div>
      </section>
      <section className="p-[5%] lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
          <div className="border-2  text-justify rounded-lg  p-[6%]">
            <div className="flex ">
              <Image height={20} width={40} alt="" src={people}></Image>
              <h1 className="px-4 text-[24px] font-semibold ">People</h1>
            </div>
            <p className="py-5">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="w-[122px] h-[40px] border border-[--purple] rounded-md text-[--purple] font-semibold">
              Connect
            </button>
          </div>
          <div className="border-2 text-justify rounded-lg p-[6%]">
            <div className="flex ">
              <Image height={20} width={40} alt="" src={place}></Image>
              <h1 className="px-4 text-[24px] font-semibold ">Place</h1>
            </div>
            <p className="py-5">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <button className="w-[122px] h-[40px] border border-[--purple] rounded-md text-[--purple] font-semibold">
              Meet up
            </button>
          </div>
          <div className="border-2 text-justify rounded-lg p-[6%]">
            <div className="flex ">
              <Image height={20} width={40} alt="" src={product}></Image>
              <h1 className="px-4 text-[24px] font-semibold ">Product</h1>
            </div>
            <p className="py-5">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <button className="w-[122px] h-[40px] border border-[--purple] rounded-md text-[--purple] font-semibold">
              Got it
            </button>
          </div>
          <div className="border-2 rounded-lg text-justify p-[6%]">
            <div className="flex ">
              <Image height={20} width={40} alt="" src={program}></Image>
              <h1 className="px-4 text-[24px] font-semibold ">Program</h1>
            </div>
            <p className="py-5">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="w-[122px] h-[40px] border border-[--purple] text-[--purple] font-semibold rounded-md">
              Attend
            </button>
          </div>
        </div>
      </section>
      <section className="md:px-20 px-[5%]">
        <div className="bg-[--addbg] px-[5%]">
          <div className="p-[3%]">
            <div className="flex ">
              <Link href={'/add'}>
                <Image width={40} height={40} alt="" src={plus}></Image>
              </Link>
              <h1 className="text-xl font-semibold py-3 px-3">Add your own</h1>
            </div>
            <p className="pt-3 pb-6">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <Link href={'/add'}>
              <button className="h-[40px] w-[122px] border border-[--purple] rounded-md text-[--purple]">
                Add new
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:px-20">
        <div className="p-[5%] bg-[--bg]">
          <div className="flex pb-4">
            <Image width={40} height={40} alt="" src={quot}></Image>
            <h1 className="text-2xl font-semibold px-3 py-3">Testimonials </h1>
          </div>
          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="md:flex py-8">
            <div className="md:w-[100%] pr-10 md:block hidden">
              <Image alt="" src={audio}></Image>
            </div>
            <div className="lg:justify-end flex max-sm:pb-5 max-sm:px-3  md:w-[30%]">
              <Image alt="" src={audioauth}></Image>
            </div>
            <div className="md:hidden ">
              <Image alt="" src={audio}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-20">
        <div className="p-[5%] bg-[--addbg]">
          <h1 className="text-3xl font-semibold italic py-5">
            Your <span className="text-[--purple]">Hobby</span>, Your{' '}
            <span className="text-[--blue]">Community...</span>
          </h1>
          <div className="justify-between flex">
            <div className="bg-[--purple] text-white h-[46px] w-[147px] rounded-lg">
              <h1 className="font-semibold py-3 px-7">Get Started</h1>
            </div>
            <Link className="scroll-smooth" href={'#home'}>
              <Image className="animate-bounce" alt="" src={up}></Image>
            </Link>
          </div>
          <Image className="pt-[5%]" alt="" src={lastgroup}></Image>
        </div>
      </section>
      <footer className="md:px-20">
        <div className="md:flex space-y-5 justify-between p-[5%]">
          <ul className="space-y-3">
            <li className="font-semibold pb-3">Hobbycue</li>
            <Link href={'#'}>
              <li className="hover:text-[--text]">About us</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Our Services</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Work with Us</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              {' '}
              <li>FAQ</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Contact Us</li>
            </Link>
          </ul>

          <ul className="space-y-3">
            <li className="font-semibold pb-3">How Do I</li>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Sign Up</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Add a Listing</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Claim Listing</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Post a Query</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Add a Blog Post</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Other Queries</li>
            </Link>
          </ul>

          <ul className="space-y-3">
            <li className="font-semibold pb-3">Quick Links</li>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Listings</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Blog Posts</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Shop / Store</li>
            </Link>
            <Link className="hover:text-[--text]" href={'#'}>
              <li>Community</li>
            </Link>
          </ul>

          <div>
            <h1 className="font-semibold pb-3">Social Media</h1>
            <div className="flex space-x-3">
              <Link href={'#'}>
                <Image alt="" src={faceb}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={twitter}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={insta}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={print}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={goog}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={youtube}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={telegram}></Image>
              </Link>
              <Link href={'#'}>
                <Image alt="" src={gmail}></Image>
              </Link>
            </div>
            <div>
              <h1 className="font-semibold py-5">Invite Friends</h1>
              <form className="w-full h-[40px] border-2 border-[--purple] overflow-hidden rounded-xl flex">
                <input
                  placeholder="Email ID"
                  className="h-full w-full rounded-s-xl px-3"
                  type="text"
                />
                <button className="w-[60px] bg-[--purple]  text-white">
                  Invite
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full bg-[--bg] h-[78px]">
          <h1 className="text-center py-7 text-sm ">
            &copy;Purple Cues Private Limited
          </h1>
        </div>
      </footer>
      <div className={'absolute w-full h-full top-0 backdrop-blur-lg lg:hidden px-4 md:px-48 py-28 '+hidden}>
      <h1 onClick={()=>(hidden==='hidden'?setHidden(''):setHidden(' hidden '))}  className={'md:text-5xl text-4xl absolute top-2 md:right-5 right-3 cursor-pointer float-end'+hidden}>x</h1>
        <div className="lg:pl-40">
        
          <div className="flex">
            <div
              onClick={() => setTabs('1')}
              className={
                ' transition-all duration-300 delay-150  cursor-pointer  text-2xl font-semibold w-fit' +
                (tabs === '1'
                  ? '  text-[--purple] border-b-4 border-[--purple] '
                  : ' text-gray-600 ')
              }
            >
              Sign In
            </div>
            <div
              onClick={() => setTabs('2')}
              className={
                'cursor-pointer mx-4  text-2xl font-semibold w-fit' +
                (tabs === '2'
                  ? ' transition-all duration-300 delay-150 text-[--purple] border-b-4 border-[--purple] '
                  : ' text-gray-600 ')
              }
            >
              Join Us
            </div>
          </div>
          <div className={tabs === '1' ? 'ani py-8 space-y-5' : 'hidden'}>
            <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
              <Image alt="" width={20} height={20} src={google}></Image>
              <h1 className="py-1 text-md font-semibold text-center w-full">
                Continue with Google
              </h1>
            </div>
            <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
              <Image alt="" width={20} height={20} src={fb}></Image>
              <h1 className="py-1 text-md font-semibold text-center w-full">
                Continue with Facebook
              </h1>
            </div>
            <div className="flex items-center pymd">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="mx-2 font-semibold">Or Connect with</span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <form className="grid grid-cols-1">
              <input
                className="h-10 w-full px-5 rounded-md"
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
              <input
                className="h-10 w-full px-5 rounded-md my-5"
                placeholder="password"
                type="Password"
                name=""
                id=""
              />
              <div className="flex justify-between pb-6">
                <div className="flex ">
                  <input type="checkbox" name="" id="remember" />
                  <div className="text-sm px-2">Remember me</div>
                </div>
                <div className="flex">
                  <Image alt="" src={lock}></Image>
                  <h1 className="text-sm">Forget password?</h1>
                </div>
              </div>
              <button className="px-5  w-full h-[40px] rounded-md border-2 border-[--purple] flex ">
                {' '}
                <h1 className="py-1 text-lg font-semibold text-center w-full">
                  Continue
                </h1>
              </button>
            </form>
          </div>
          <div className={tabs === '2' ? 'ani py-8 space-y-5' : 'hidden'}>
            <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
              <Image alt="" width={20} height={20} src={google}></Image>
              <h1 className="py-1 text-md font-semibold text-center w-full">
                Continue with Google
              </h1>
            </div>
            <div className="px-5  w-full h-[40px] rounded-xl border-2 border-[--purple] flex ">
              <Image alt="" width={20} height={20} src={fb}></Image>
              <h1 className="py-1 text-md font-semibold text-center w-full">
                Continue with Facebook
              </h1>
            </div>
            <div className="flex items-center pymd">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="mx-2 font-semibold">Or Connect with</span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <form className="grid grid-cols-1">
              <input
                className="h-10 w-full px-5 rounded-md"
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
              <input
                className="h-10 w-full px-5 rounded-md mt-5"
                placeholder="password"
                type="Password"
                name=""
                id=""
              />
              <div className="flex justify-end pt-1 pb-3">
                <h1 className="text-sm text-gray-400">Password Strenght</h1>
              </div>
              <p className="text-gray-500 text-sm pb-3">
                By continuing, you agree to our{' '}
                <span className="cursor-pointer text-[--text]">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="cursor-pointer text-[--text]">
                  Privacy Policy
                </span>
                .
              </p>
              <button className="px-5 bg-[--purple]  w-full h-[40px] rounded-md border-2 border-[--purple] flex ">
                {' '}
                <h1 className="py-1 text-lg font-semibold text-white text-center w-full">
                  Agree and Continue
                </h1>
              </button>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
}
