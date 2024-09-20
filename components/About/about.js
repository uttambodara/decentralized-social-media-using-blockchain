import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'

const style = {
    wrapper: `border-[#38444d] border-b sticky`,
    header: `py-1 px-3 mt-2 flex items-center ]`,
    primary: `bg-transparent outline-none font-bold text-black text-xl`,
    secondary: `text-[black] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#d8d8d8] p-1 text-black `,
    coverPhotoContainer: `flex items-center justify-center h-[20vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between `,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-4`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-black`,
}