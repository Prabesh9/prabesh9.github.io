import React, { useContext } from 'react';
import MarkdownList from '../../components/markdownlist';
import { MarkdownContext } from '../../context/MarkdownContext';
import './index.scss';

const Blog: () => JSX.Element = () => {
    const {blogs, blogLoad} = useContext(MarkdownContext);

    return (
        <>
            <h1>Activities</h1>
            <MarkdownList markdowns={blogs} load={blogLoad}/>
        </>
    )
}

export default Blog;
