import React from 'react';
import { Route } from 'react-router-dom';
import Blog from '../pages/blog';
import Home from '../pages/home';
import Project from '../pages/projects';
import Resume from '../pages/resume';
import Skill from '../pages/skill';

const Router: () => JSX.Element = () => {
    return (
        <div>
            <Route path = "/" exact component = {Home} />
            <Route path = "/home" component = {Home} />
            <Route path = "/skill" component = {Skill} />
            <Route path = "/resume" component = {Resume} />
            <Route path = "/projects" component = {Project} />
            <Route path = "/blog" component = {Blog} />
        </div>
    )
}

export default Router;
