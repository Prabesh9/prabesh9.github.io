import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MarkdownContext } from '../../context/MarkdownContext';
import { Markdown } from '../../model/markdown';

const initialState: string[] = [];

const Tags: () => JSX.Element = () => {
    const {blogs} = useContext(MarkdownContext);
    const [tags, setTags] = useState(initialState);
    const [uniqueTags, setUniqueTags] = useState(initialState);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTags(blogs.flatMap((blog: Markdown) => blog.tags));
        setUniqueTags([...new Set(tags)]);
        setLoad(true);
    }, [blogs, uniqueTags])


    const getLink: (tag: string) => string = (tag: string) => {
        return `/blog/tags(${tag})`;
    }

    return (
        <>
            <h1>Tags</h1>
                {load ? ( blogs.length ? 
                    <div className="all-tags">
                    {uniqueTags.map((tag: string, idx: number) => (
                        <Link to={getLink(tag)} key={idx}>{tag}({tags.filter(tag1 => tag1===tag).length})</Link>
                    ))}
                    </div> : "No Tags")
                : "Loading"}
        </>
    )
}

export default Tags;
