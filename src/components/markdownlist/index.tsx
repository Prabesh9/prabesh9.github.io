import React from 'react';
import { Markdown } from '../../model/markdown';
import Card from '../card';

interface IMarkdownList {
    markdowns: Markdown[],
    load: boolean
}

const MarkdownList: (props: IMarkdownList) => JSX.Element = (props: IMarkdownList) => {

    const {markdowns, load} = props;

    return (
        <div className="markdown-list">
            {load && markdowns.length === 0 ? "No Items.." :
            load ? markdowns.map((markdown: Markdown, idx: number) => (
                <Card 
                    key={idx}
                    id={markdown.id}
                    title={markdown.title}
                    author={markdown.author}
                    description ={markdown.description}
                    timedate={new Date(markdown.timedate)}
                    tags={markdown.tags}
                    />
            )) : "Loading..."}
        </div>
    )
}

export default MarkdownList;
