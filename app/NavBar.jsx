"use client"
import Image from "next/image";
import SearchInput from "./SearchInput";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";
import DarkModeButton from "./DarkModeButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import ProfileDropdownContent from "./ProfileDropdownContent";
const Navbar = () => {
  const { data: session, loading } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  const [nav, setNav] = useState(false);
  const [sideOpen, setSideOpen] = useState(false)

  //const session = false
  return (
    <nav className="w-full px-1 relative sm:px-10 py-3 border-b z-10 shadow-sm dark:border-b-gray-600">
      <div className="flex">
      <div className="flex basis-1/3 md:basis-1/3 items-center">
        <div onClick={()=>setSideOpen(true)} className='inline lg:hidden z-10'>
          <Bars3Icon className="h-4 w-4 text-gray-900 dark:text-white" />
        </div>
        <span className="text-size-lg"><Link href='/'><Image src={"/logo.png"} alt="logo" width={100} height={50}/></Link></span>
        <div
          className={`transform top-0 left-0 w-screen bg-gray-900 bg-opacity-50 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${sideOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-opacity-50" onClick={()=>setSideOpen(false)}/>
            <div className="w-9/12 bg-white h-screen z-20" onClick={()=>console.log("nav")}>

            </div>
        </div>
        {/* Mobile Menu */}
        <div>
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-1 flex-col w-full h-screen bg-black text-center ease-in duration-300 z-20'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col flex-1 w-full h-screen bg-black text-center ease-in duration-300'
            }
          >
          <ul>
          {["Education", "Programming", "Finance"].map((category) => (
          <li className="" key={category}>
            <Link
              href={`/category/${category}`}
              className="hover:bg-gray-100 py-2 px-5 flex flex-1 rounded-md"
            >
              {category}
            </Link>
          </li>
        ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:basis-1/3">
          <SearchInput/>
      </div>
      <div className="flex justify-end items-center basis-2/3 md:basis-1/3">
        <DarkModeButton className="inline"/>
        {
          session? (
            <>
              
              <Dropdown>
                <Dropdown.Button>
                <div className="relative ml-1 pr-1 pb-1">
                <ShoppingCartIcon className="h-10 w-10 text-gray-900 dark:text-gray-500"/>
                <div className="flex justify-center items-center absolute top-0 right-0 rounded-full overflow-hidden text-xs bg-black z-10 text-white w-3 h-3">4</div>
              </div>
                </Dropdown.Button>
                <Dropdown.Content>Lalaal</Dropdown.Content>
              </Dropdown>
              
              <Dropdown>
                <Dropdown.Button>
                  <div className="h-10 w-10 rounded-full overflow-hidden relative ml-1 mr-1">
                    <Image
                      className="inli"
                      src="/course-image.jpg"
                      fill
                      alt={"course-image"}
                    />
                  </div>
                </Dropdown.Button>
                <Dropdown.Content>
                <div className="w-[200px] flex flex-col mr-10 relative right-40 bg-white">
                  <ProfileDropdownContent/>
                </div>
                </Dropdown.Content>
              </Dropdown>
             {/* <Button styles="bg-red-950 text-gray-100 ml-1" handleClick={()=>signOut()}>Logout</Button> */}
            </>
          ): (
            <>
              <Button styles="bg-gray-200 text-black-900 ml-1"><span className="text-md"><Link href={"/auth/register"}>Sign up</Link></span></Button>
              <Button styles="bg-slate-950 text-gray-100 ml-1" handleClick={(e)=>{
                e.preventDefault()
                signIn()}}><span className="text-[3/4] sm:text-md">Sign in</span></Button>
            </>
          )
        }
        <Button handleClick={()=>signOut()}>Logout</Button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
