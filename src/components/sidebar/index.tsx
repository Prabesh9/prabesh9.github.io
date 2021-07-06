import React from 'react';
import './index.scss';
import Avatar from '../../assets/images/avatar.jpg';
import Github from '../../assets/images/github-brands.svg';
import LinkedIn from '../../assets/images/linkedin-brands.svg';
import Facebook from '../../assets/images/facebook-square-brands.svg';
import { NavLink } from 'react-router-dom';

const SideBar : () => JSX.Element  = () => {
  return (
    <div className="pane">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
            <img src={Avatar} />
            <h2>Prabesh Maharjan</h2>
        </header>
        <ul className="link">
            <li><a href="https://www.github.com/prabeshmrz"><img className="ic ic-github" src={Github}/></a></li>
            <li><a href="https://www.linkedin.com/in/prabesh-maharjan-04294a16b"><img className="ic ic-linkedin" src={LinkedIn}/></a></li>
            <li><a href="https://www.facebook.com/prabeshmrz"><img className="ic ic-facebook" src={Facebook}/></a></li>
        </ul>
        <nav>
            <NavLink to="/" activeClassName="active" className="ic ic-home" exact><span>Home</span></NavLink>
            <NavLink to="/skill" activeClassName="active" className="ic ic-skill"><span>Skill</span></NavLink>
            <NavLink to="/resume" activeClassName="active" className="ic ic-resume"><span>Resume</span></NavLink>
            <NavLink to="/projects" activeClassName="active" className="ic ic-project"><span>Projects</span></NavLink>
            <NavLink to="/blog" activeClassName="active" className="ic ic-blog"><span>Blog</span></NavLink>
        </nav>
    </div>
  );
}

export default SideBar;
