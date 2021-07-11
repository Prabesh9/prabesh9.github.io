import React, { useEffect, useState } from 'react';
import { Markdown } from '../model/markdown';
import { getMarkdownContents, importAll } from '../services/markdown';

const initialState: Markdown[] = []

const initialContext = {
    blogs: initialState,
    blogLoad: false,
    projects: initialState,
    projectLoad: false
}

const blogFiles: unknown[] = importAll(require.context('../contents/blogs', false, /\.md$/))

const projectFiles: unknown[] = importAll(require.context('../contents/projects', false, /\.md$/))

export const MarkdownContext = React.createContext(initialContext);

// eslint-disable-next-line
export const MarkdownProvider = (props: any) => {

    const [blogs, setBlogs] = useState(initialState);
    const [blogLoad, setBlogLoad] = useState(false);

    const [projects, setProjects] = useState(initialState);
    const [projectLoad, setProjectLoad] = useState(false);

    useEffect(() => {
        if (!blogs.length) {
            getMarkdownContents(blogFiles, (content) => {setBlogs(content); setBlogLoad(true);});
        }
        if (!projects.length) {
            getMarkdownContents(projectFiles, (content) => {setProjects(content); setProjectLoad(true);});
        }
    },[])

    return (
        <MarkdownContext.Provider value={{blogs, blogLoad, projects, projectLoad}}>
            {props.children}
        </MarkdownContext.Provider>
    );
}
