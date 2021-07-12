import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MarkdownList from '../../components/markdownlist';
import { MarkdownContext } from '../../context/MarkdownContext';
import './index.scss';

const Blog: () => JSX.Element = () => {
    const {blogs, blogLoad} = useContext(MarkdownContext);

    return (
        <>
            <h1>Activities</h1>
            <div className="flex-right padding-bottom-md link-red"><Link to="/blog/tags">All Topics</Link></div>
            <MarkdownList markdowns={blogs} load={blogLoad}/>
        </>
    )
}

export default Blog;
