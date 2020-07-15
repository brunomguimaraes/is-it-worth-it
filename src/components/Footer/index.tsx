import React from 'react';
import { ReactComponent as Github } from '../../assets/github.svg'

import './styles.scss'

function Footer() {
  return (
    <div id="footer">
      <span>Criado por <a href="https://www.brunomoraesguimaraes.com.br/">Bruno Guimarães</a>
      <a href="https://github.com/brunomguimaraes"><Github className={"githubIcon"}/></a></span>
    </div>
  );
}

export default Footer;
