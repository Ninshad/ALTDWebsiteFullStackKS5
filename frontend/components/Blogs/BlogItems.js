import React, { useState } from 'react';
import Link from 'next/link';
import { readingTime } from 'reading-time-estimator';

const BlogItems = ({ blogCategoriesData }) => {


    const readTime = (text) => {
        const result = readingTime(text, 10);
        console.log(result);
        return (
            result.text
        )
    }



    return (

        <>
            {blogCategoriesData.blog.map((blogData) =>
                <Link key={blogCategoriesData.id} href={`/blog/${blogData.slug}`} >
                    <div className="blog-list-item {blogPageData.categoryName} col-md-6">
                        <div className="blog-thumb">
                            <a className="blog-img" >
                                {blogCategoriesData.blog.map((blogData) =>
                                    // blogData.blogImage.map((imageData) =>
                                        <img key={blogData.blogListingImage != null && blogData.blogListingImage.id} src={blogData.blogListingImage != null && blogData.blogListingImage.publicUrlTransformed} alt="blog img" />
                                    // )
                                )}
                            </a>
                            <h3>{blogCategoriesData.name}</h3>
                        </div>
                        <div className="blog-content">
                            {blogCategoriesData.blog.map((blogData) =>
                                blogData.blogContent.map((blogContentData) =>
                                    <div key={blogContentData.id}>
                                        <h2> {blogContentData.contentBlockTitle} </h2>
                                        <div className="blog-by-on">
                                            <p key={blogData.id}>By <span>{blogData.author.name}</span> &nbsp;|&nbsp; On <span>{blogData.date}</span></p>
                                        </div>
                                        <div className='blogText' dangerouslySetInnerHTML={{ __html: `<p>${blogContentData.content}<p>` }} />
                                        <div className="blog-time">
                                            <div className="blog-wrap-time">{readTime(blogContentData.content)}</div>
                                            <a href="blog-detail.html" className="blog-read-more">Read full article</a>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
};

export default BlogItems;
