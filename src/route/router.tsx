import React from 'react';
import { Route } from 'react-router-dom';
import BlogDetail from '../pages/blog/details';
import Blog from '../pages/blog/index';
import Tags from '../pages/blog/tags';
import Home from '../pages/home';
import Project from '../pages/project';
import Resume from '../pages/resume';
import Skill from '../pages/skill';

const Router: () => JSX.Element = () => {
    return (
        <>
            <Route path = "/" exact component = {Home} />
            <Route path = "/home" component = {Home} />
            <Route path = "/skill" component = {Skill} />
            <Route path = "/resume" component = {Resume} />
            <Route path = "/projects" component = {Project} />
            <Route path = "/blog" exact component = {Blog} />
            <Route path = "/blog/tags" exact component = {Tags} />
            <Route path = "/blog/:id" exact component = {BlogDetail} />
            <Route path = "/blog/tags/:id" component = {BlogDetail} />
        </>
    )
}

export default Router;
