import React, { useState } from "react";
import GeneralLayout from "@/layout/layout";
import Loader from "@/components/loader";
import PrivacyModal from "@/components/modal/modals/privacy";
import TermsModal from "@/components/modal/modals/terms";
import { Logo } from "@/components/Logo";
import ShareButtons from "@/components/share";
import Headtags from "@/components/seo";
import Image from "next/future/image";
import SuccessModal from "@/components/modal/modals/success";
import LandingPage from "./landing page";

export const socials = [
  {
    name: "facebook",
    path: "https://web.facebook.com/DoctooraHealth",
    img: "/facebooknew.svg",
  },
  {
    name: "instagram",
    path: "https://www.instagram.com/cookedindoorshq/",
    img: "/instagram.svg",
  },
  {
    name: "twitter",
    path: "https://twitter.com/cookedindoorshq",
    img: "/twitter.svg",
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/company/doctoora/",
    img: "/linkedin.svg",
  },
];

const Index = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || !regex.test(email)) {
      setError(true);
    }
    if (email.length > 0 && regex.test(email)) {
      setIsLoading(true);
      const res = await fetch("/api/enlist", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      if (res.status === 200) {
        setOpenSuccess(true);
      }
      if (res.status === 400) {
        setErrorMsg("Email already waitlisted");
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      }
      if (res.status === 500) {
        setErrorMsg("Server error, Please try again later");
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      }
      setIsLoading(false);
      setEmail("");
      setError(false);
    }
  };

  return (
    <>
      <Headtags
        title="Cooked Indoors - Fresh, healthy, and nutritious meals for healthcare Patients & Individuals"
        desc="Affordable healthy meal for all"
        keywords="dieting, foods, nutition, healthcare, diabetic, healthy, fresh, meal, planning"
      />
      <LandingPage />
      {/* <GeneralLayout>
        <div className='container relative mx-auto'>
          <div className='items-center'>
            <div className='w-full px-4 ml-auto mr-auto text-center mt-14 lg:w-8/12'>
              <Logo />
              <button className='md:text-7xl py-2 text-3xl font-bold cursor-text mt-[20%]
              leading-tight bg-gradient-to-r from-[#1D319A] via to-[#F2994A] bg-clip-text text-transparent'>
              Coming Soon...
              </button>
              <p className='my-6 text-white'>
              While you wait to begin your healthy meal journey, Join our waitlist to get notified when we officially launch.
              </p>
            </div>
            {
              errorMsg && <p className='text-sm text-center text-red-500'>{errorMsg}</p>
            }
            <div className='flex justify-center px-4 mt-2'>
            <div className='relative w-full md:w-6/12'>
            <form noValidate>
          {
            !isLoading ?
            <button onClick={handleSubmit}
            className='absolute py-2 px-6 mt-1.5 font-medium right-1.5 rounded-[4px] text-white bg-[#1D319A]'
            >
           Join Waitlist
          </button>
          :
          <p 
          className='absolute right-0 px-6 py-2 text-white'
          >
          <Loader /> 
        </p>
          
          }
                <input
                  className=" border caret-white text-white rounded-l p-4 bg-[#FEF9F5]/20 text-sm w-full focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Please enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              </div>
            </div>
                <div className='text-center'>
              {error && email.length <= 0 ? (
                <p className="py-2 text-red-500">Email Address is required</p>
              ) : error && !regex.test(email) ? (
                <p className="py-2 text-red-500">Please enter a valid email address</p>
              ) : (
                ''
              )}
                </div>
                <div className='flex justify-center my-6 space-x-4'>
                <ShareButtons
                shareUrl={process.env.NEXT_PUBLIC_BASE_URL}
                title='Cooked Indoors - Waitlist'
              />
              
                </div>
                <div className='flex flex-wrap justify-center py-6 sm:justify-between'>
                <div className='flex py-2 space-x-4 text-sm text-white'>
                <button onClick={() => setOpenPrivacy(!openPrivacy)} className='hover:text-gray-400'>Privacy Policy</button>
                <button onClick={() => setOpenTerms(!openTerms)} className='hover:text-gray-400'>Terms & Conditions</button>
                </div>
                <div className='flex py-2 space-x-4 text-sm text-white'>
                <p className='hover:text-gray-400'>Follow us</p>
                  {socials.map((val) => (
                  <a key={val.name} href={val.path}>
                    <Image src={val.img} alt={val.name} width={20} height={20} />
                  </a>
                ))}
                </div>
                </div>
        </div>
      </div>
      </GeneralLayout>
      <PrivacyModal
  openModal={openPrivacy}
  setOpenModal={setOpenPrivacy}
      />
      <TermsModal
      openModal={openTerms}
      setOpenModal={setOpenTerms}
      />
        <SuccessModal
      openModal={openSuccess}
      setOpenModal={setOpenSuccess}
      /> */}
    </>
  );
};

export default Index;
