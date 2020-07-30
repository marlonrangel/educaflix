import React from 'react';
import { FooterBase, FooterLogo } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <FooterLogo src={Logo} alt="LogoEducaflix" />
      </a>
      <p>
        Site feito na <b>#ImersãoReact</b> da
       
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
      <p>
        <i>
          by Marlon Rangel
        </i>
      </p>
    </FooterBase>
  );
}

export default Footer;
