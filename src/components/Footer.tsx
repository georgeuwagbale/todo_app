import smartChainLogo from '../assets/smartchain_logo.png';
import facebookLogo from '../assets/facebook_logo.png';
import instagramLogo from '../assets/Instagram.png';
import twitterLogo from '../assets/Twitter.png';
const Footer = () => {
    return (
        <div className="bg-[#EFF0FA]">
            <div className="flex flex-row justify-between px-[12rem] py-3">
                <div>
                    <img className="h-[3.5rem] pt-6" src={smartChainLogo} alt="Smartchain Logo"/>
                </div>
                <div className="flex flex-row gap-6 font-semibold text-black text-[0.7rem] pt-6 pr-4">
                    <p>About Us</p>
                    <p>Projects</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex flex-row gap-3 pt-6">
                    <img className="h-5" src={facebookLogo} alt=""/>
                    <img className="h-5" src={instagramLogo} alt=""/>
                    <img className="h-5" src={twitterLogo} alt=""/>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center py-2 px-[12rem]">
                    <hr className="bg-red px-5"/>
                    <div className="flex justify-center py-4">
                        <p className="text-black text-[0.7rem]">© 2021 SmartChain. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  Footer;