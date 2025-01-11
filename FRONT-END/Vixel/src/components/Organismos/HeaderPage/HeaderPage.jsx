import React, { useState, useEffect } from "react";
import './HeaderPage.css';
import NavbarHeader from "../../Moleculas/NavbarHeader/NavbarHeader";
import SearchButton from "../../Atoms/SearchButton/SearchButton";
import LoginButton from "../../Atoms/LoginButton/LoginButton";
import LogoPage from "../../Atoms/LogoPage/LogoPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import RgbLine from "../../Atoms/RgbLine/RgbLine";
import ListPages from "@/components/Moleculas/ListPages/ListPages";
import { Header } from "@/components/layout";
import { useAccount } from "@gear-js/react-hooks";
import Varacoin from '../../../assets/images/icons/coin.svg'


export default function HeaderPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {isAccountReady} = useAccount();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Aplicar o remover la clase 'active' del body cuando el menú esté abierto
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isNavOpen]);

  return (
    <header className="header-own">
      <div className={`overlay ${isNavOpen ? "active" : ""}`} onClick={handleNavToggle}></div>

      <div className="container">
        <LogoPage/>

        <ListPages/>

        <div className="right-objects">
          <div className="info-coin">
            <Header isAccountVisible={isAccountReady} />
          </div>
          <button className="nav-open-btn" onClick={handleNavToggle}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>

        <NavbarHeader isNavOpen={isNavOpen} handleNavToggle={handleNavToggle} />

        
      </div>
      <div class="rgb-line separate-from-header"/>
    </header>
  );
}
