import BlogDetailDescriptionBlock from "../../components/BlogDetail/BlogDetailDescriptionBlock"
import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader"
import BlogDetailList from "../../components/BlogDetail/BlogDetailList"
import BlogImageBlock from "../../components/BlogDetail/BlogImageBlock"
import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"

const BlogDetailPage = ({ query }) => {
    return (
        <>
        <NavBar/>
        <BlogDetailHeader slug={query.slug}/>
        <BlogImageBlock/>
        <BlogDetailDescriptionBlock  slug={query.slug}/>
        <BlogDetailList slug={query.slug}/>
        <Footer/>    
        </>
    )
}

export default BlogDetailPage
