import LoginInfo from "./LoginInfo";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex justify-between p-5 shadow-md items-center">
            <Logo />
            <LoginInfo />
        </header>
    );
}
