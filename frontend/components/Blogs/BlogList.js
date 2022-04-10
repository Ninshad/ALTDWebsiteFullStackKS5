import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import BlogItems from "./BlogItems";


export const BLOG_CATEGORIES_QUERY_LIMIT = gql`
query BLOG_CATEGORIES_QUERY_LIMIT($first: Int) {
    
  allBlogCategories(first: $first){
    id
    name
    blog{
      id
      name
      slug
      blogContent{
        id
        name
        contentBlockTitle
        contentBlockSubTitle
        content
      }
      blogTitle
      author{
        id
        name
      }
      date
      blogDetailList
      blogListingImage{
        id
        publicUrlTransformed
      }
      blogDetailImage{
        id
        publicUrlTransformed
      }
    }
    
  }
}`





const BlogList = () => {

    const [catName, setCatName] = useState("");

    const categoryName = (e) =>{
        setCatName(e.target.value)
    }

    const [limit, setLimit] = useState(4);
    

    const loadMoreClick = () =>{
        setLimit()
        
    }

    const { data, error, loading } = useQuery(BLOG_CATEGORIES_QUERY_LIMIT, {
        variables: {
            first: limit,
        },
    });

    
    console.log(data);
    if (loading) return <Spinner animation="border" style={{color:"#E86124"}} />
    if (error) return <p></p>
   

    

    return (
        <>
            <section id="blog-listing">
                <div className="container"> 
                    <div className="blog-catgories mx-auto col-12">
                    <button className="active" value="" onClick={categoryName}>All</button>    
                    {data.allBlogCategories.map((blogCategoriesData) =>
                    <button key={blogCategoriesData.id}  value={blogCategoriesData.name} onClick={categoryName}>{blogCategoriesData.name}</button>
                            
                            
                     )}
                    </div>
                    
                    {catName?
                    <div className="blog-item row">
                    {data.allBlogCategories.filter(filteredCat => filteredCat.name==catName).map((blogCategoriesData) =>
                        <BlogItems key={blogCategoriesData.id} blogCategoriesData={blogCategoriesData} />
                     )}
                     </div> 
                     : <div className="blog-item row">
                     {data.allBlogCategories.map((blogCategoriesData) =>
                         <BlogItems key={blogCategoriesData.id} blogCategoriesData={blogCategoriesData} />
                      )}
                      </div> 
                    }
                    
                    {limit==4?
                    <div className="BlogloadMoreButton">
                    <button onClick={loadMoreClick}>LOAD MORE</button>
                    </div>
                    :null
                    }
                    

                </div>
            </section>

        </>
    )
}

export default BlogList
