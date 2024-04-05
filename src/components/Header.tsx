import smartChainLogo from '../assets/smartchain_logo.png';

const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-between border-2  px-[8rem] py-2">
                <div>
                    <img src={smartChainLogo} alt="SmartChain Logo"/>
                </div>
                <div className="flex flex-row gap-7 font-semibold text-black text-[0.7rem] pt-6 pr-4">
                    <a href="#">About Us</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default Header;