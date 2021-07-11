import React, { useContext } from 'react';
import MarkdownList from '../../components/markdownlist';
import { MarkdownContext } from '../../context/MarkdownContext';

const Project: () => JSX.Element = () => {
    const {projects, projectLoad} = useContext(MarkdownContext);

    return (
        <>
            <h1>Projects</h1>
            <MarkdownList markdowns={projects} load={projectLoad}/>
        </>
    )
}

export default Project;
