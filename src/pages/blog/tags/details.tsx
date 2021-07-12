import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MarkdownList from '../../../components/markdownlist';
import { MarkdownContext } from '../../../context/MarkdownContext';
import { Markdown } from '../../../model/markdown';

const TagDetails: () => JSX.Element = () => {
    const {tag} = useParams<{tag?: string}>();
    const [tagedBlogs, setTagedBlogs] = useState([new Markdown()]);
    const {blogs, blogLoad} = useContext(MarkdownContext);

    useEffect(() => {
        setTagedBlogs(blogs.filter(blog => blog.tags.includes(tag ?? "")));
    },[blogs, tag])

    return (
        <>
            <h1>Activities: ({tag})</h1>
            <div className="flex-right padding-bottom-md link-red"><Link to="/blog/tags">All Topics</Link></div>
            <MarkdownList markdowns={tagedBlogs} load={blogLoad}/>
        </>
    )
}

export default TagDetails;
