import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Spinner } from "react-bootstrap";
import { readingTime } from 'reading-time-estimator';


export const BLOG_QUERY = gql`
query BLOG_QUERY($slug: String!) {
    
    allBlogs(where: {slug: $slug }){
        id
    name
    category{
        id
        name
      }
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




const BlogDetailHeader = ({ slug }) => {

    const { data, error, loading } = useQuery(BLOG_QUERY, {
        variables: {
            slug,
        },
      });

      console.log(data);
      if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
      if (error) return <p></p>


// var rTime = ""
// const readTime = () =>{
//     const text = rTime
//     console.log(text);
//     const result = readingTime(text, 10);
//     console.log(result);
//     return(
//         result.text
//     )
// }


const readTime = (text) => {
    const result = readingTime(text, 10);
    return (
        result.text
    )
}



    return (
        <>
            <section id="blog-detail-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                        {data.allBlogs.map((blogData) =>
                        blogData.author.map((authorData) =>
                        blogData.blogContent.map((blogContentData) =>
                        <div key={blogData.id}>
                            <h1 key={blogData.id}>{blogData.blogTitle}<span className="primary-font">.</span></h1>
                        
                            <div className="blog-by-on">
                                <p>By <span key={authorData.id}>{authorData.name}</span> &nbsp;|&nbsp; On  <span  key={blogData.id}>{blogData.date}</span> &nbsp;|&nbsp; Category <span  key={blogData.category.id}>{blogData.category.name}</span></p>

                                <h3 key={blogContentData.id}>{readTime(blogContentData.content)}</h3>
                            </div>
                            
                            </div>
                        )
                        )
                        )}
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailHeader
