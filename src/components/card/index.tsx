import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface ICard {
    id: string,
    title: string,
    description: string,
    author: string,
    tags: string[],
    timedate: Date
}

const Card: (props: ICard) => JSX.Element = (props: ICard) => {
    const getLink: (tag: string) => string = (tag: string) => {
        return `/blog/tags/${tag}`;
    }
    return (
        <Link to={`/blog/${props.id}`} className="card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="tags">
                {props.tags.length  ?
                    props.tags?.map((tag: string, idx: number) => 
                        (<Link to={getLink(tag)} key={idx}><span key={idx}>
                            {tag}
                        </span></Link>)
                    )
                : ""}
            </div>
            <div className="card-footer">
                <span>{props.author}</span>
                <span>{props.timedate.getFullYear()}-{props.timedate.getMonth()}-{props.timedate.getDate()}</span>
            </div>
        </Link>
    );
}

export default Card;
