import dollarImage from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between gap-2 items-center">
                        0 Coins
                        <img src={dollarImage} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
