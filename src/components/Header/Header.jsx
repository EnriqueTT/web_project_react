import logo from "../../images/LogoTitle.svg"

export default function Header() {
    return (
        <header className="header page__section">
            <img src={logo} alt="Logo Around the world" 
             className='logo header__logo'/>
        </header>
    )
}