import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return ( 
    <ContenedorHeader>
      <Titulo>Blog Personal</Titulo>
        <header>
          <Menu>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acercaDe">Acerca de...</NavLink>
          </Menu>
        </header>
    </ContenedorHeader>
   );
}

const ContenedorHeader = styled.div`
text-align: center;
margin-bottom: 40px;
`
const Titulo = styled.h1`
margin-bottom: 10px;
font-size: 26px;
text-transform: uppercase;
`
const Menu = styled.nav`
a{
  text-decoration: none;
  color: #1651668;
  margin: 0 10px;
}
a:hover{
  color: #19168;
}
a.active{
border-bottom: 2px solid #165168;
padding-bottom: 3px;
}
`
 
export default Header;