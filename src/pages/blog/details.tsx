import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { MarkdownContext } from '../../context/MarkdownContext';
import { Markdown } from '../../model/markdown';
import CodeBlock from '../../services/codeblock';

const BlogDetail: () => JSX.Element = () => {
    const {id} = useParams<{id?: string}>();
    const [blogDetail, setBlogDetail] = useState(new Markdown());
    const {blogs, blogLoad} = useContext(MarkdownContext);

    useEffect(() => {
        setBlogDetail(blogs.filter(blog => blog.id === id)[0]);
    },[blogs])

    const getLink: (tag: string) => string = (tag: string) => {
        return `/blog/tags(${tag})`;
    }
    return (
        <>
            {blogLoad ?
            <div className="markdown">
                <h1>{blogDetail.title}</h1>
                <div className="blog-header">
                    <span className="aurthor">{blogDetail.author}, </span>
                    <span className="date">{moment(new Date(blogDetail.timedate)).format('ddd D MMM, YYYY')}</span>
                </div>
                <ReactMarkdown components={CodeBlock}>
                    {blogDetail.content}
                </ReactMarkdown>
                <div className="tags">
                    {blogDetail.tags.length  ?
                        blogDetail.tags?.map((tag: string, idx: number) => 
                            (<Link to={getLink(tag)} key={idx}><span key={idx}>
                                {tag}
                            </span></Link>)
                        )
                    : ""}
                </div>
            </div>
            : "Detail Loading"}
        </>
    )
}

export default BlogDetail;
