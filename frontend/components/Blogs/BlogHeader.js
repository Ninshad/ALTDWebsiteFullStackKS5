import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { BlogHeaderlimit } from "../../config";
import { readingTime } from 'reading-time-estimator';
import { Spinner } from "react-bootstrap";
import Link from 'next/link';

export const BLOG_CATEGORIES_QUERY = gql`
query BLOG_CATEGORIES_QUERY($first: Int) {
    
    allBlogs(first: $first, sortBy:id_DESC){
        id
        name
        slug
        blogTitle
        blogContent{
            id
            contentBlockTitle
            content
        }
        author{
            id
            name
        }
        date
    
    }
}`




const BlogHeader = () => {

    const { data, error, loading } = useQuery(BLOG_CATEGORIES_QUERY, {
        variables: {
            first: BlogHeaderlimit,
        },
    });

    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>



    const readTime = (text) => {
        const result = readingTime(text, 10);
        return (
            result.text
        )
    }



    return (
        <>
           
            <section id="blog-banner">
                <div className="container">
                    <div className="row justify-content-center">

                    {data.allBlogs.map((blogPageData) =>
                    blogPageData.author.map((authorData) =>
                    blogPageData.blogContent.map((blogContentData) =>
                            

                            <Link  key={blogPageData.id} href={`/blog/${blogPageData.slug}`} >
                                <div className="col-md-6 col-lg-4">
                                    <div className="post-main-wrap">
                                        <div className="post-wrapper">
                                            <div className="post-detail-wrap">
                                                <h2 key={blogPageData.id}>{blogPageData.blogTitle}</h2>
                                                
                                                    <div className="post-by-on" key={authorData.id}>
                                                        <p>By <span>{authorData.name}</span> &nbsp;|&nbsp; On <span>{blogPageData.date}</span></p>
                                                    </div>
                                                        <div className="post-time" key={blogContentData.id}>
                                                            <div className="post-wrap-time"> {readTime(blogContentData.content)} </div>
                                                            <a href="blog-detail.html" className="post-read-more">Read full article</a>
                                                        </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    )
                    )             
                )}
                    </div>
                </div>
            </section>
            

        </>
    )
}

export default BlogHeader
