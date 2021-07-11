import React from 'react';
import pass from './pass.md';

const BlogContents: () => JSX.Element = () => {
console.log(pass);
    fetch('./*.md')
    .then(text => {console.log(text)});
    return (
        <>nothing</>
    )
}

export default BlogContents;
