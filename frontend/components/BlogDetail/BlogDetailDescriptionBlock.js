import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Spinner } from "react-bootstrap";
import { readingTime } from 'reading-time-estimator';


export const BLOG_QUERY = gql`
query BLOG_QUERY($slug: String!) {
    
    allBlogs(where: {slug: $slug }){
        id
        name
        blogContent{
            id
            content
        }
      }
}`


const BlogDetailDescriptionBlock = ({ slug }) => {


    const { data, error, loading } = useQuery(BLOG_QUERY, {
        variables: {
            slug,
        },
      });

      console.log(data);
      if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
      if (error) return <p></p>


    return (
        <>
            <section id="blog-detail-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto">
                            <div className="detail-content">
                            {data.allBlogs.map((blogData) =>
                                blogData.blogContent.map((blogContentData) =>
                                
                                <div key={blogContentData.id} dangerouslySetInnerHTML={{__html: `<p>${blogContentData.content}<p>` }} /> 
                                
                                )    
                            )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailDescriptionBlock
