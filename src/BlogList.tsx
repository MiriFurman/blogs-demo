import React from 'react';
import { Link } from 'react-router-dom';

export interface IBlog {
    id: number,
    title: string,
    body: string,
    author: string
}

interface IProps {
    blogs: IBlog[] | null,
    title: string,
}

const BlogList = ({blogs, title}: IProps) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs && blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
