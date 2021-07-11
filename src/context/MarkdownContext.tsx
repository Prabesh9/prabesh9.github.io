import React, { useEffect, useState } from 'react';
import { BlogContents } from '../contents/blogs';
import { Markdown } from '../model/markdown';
import { getMarkdownContents } from '../services/markdown';

const initialState: Markdown[] = []

const initialContext = {
    blogs: initialState,
    blogLoad: false,
    projects: initialState,
    projectLoad: false
}

// eslint-disable-next-line
const blogFiles: string[] = BlogContents();

export const MarkdownContext = React.createContext(initialContext);

// eslint-disable-next-line
export const MarkdownProvider = (props: any) => {

    const [blogs, setBlogs] = useState(initialState);
    const [blogLoad, setBlogLoad] = useState(false);

    const [projects] = useState(initialState);
    const [projectLoad, setProjectLoad] = useState(false);

    useEffect(() => {
        if (!blogs.length) {
            getMarkdownContents(blogFiles, (content) => {setBlogs(content); setBlogLoad(true);});
        }
        if (!projects.length) {
            setProjectLoad(true);
        }
    },[])

    return (
        <MarkdownContext.Provider value={{blogs, blogLoad, projects, projectLoad}}>
            {props.children}
        </MarkdownContext.Provider>
    );
}
