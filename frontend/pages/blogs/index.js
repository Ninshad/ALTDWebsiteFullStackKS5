import BlogHeader from "../../components/Blogs/BlogHeader"
import BlogList from "../../components/Blogs/BlogList"
import BlogsScript from "../../components/Blogs/BlogsScript"
import BlogsScriptBlock from "../../components/Blogs/BlogsScriptBlock"
import Footer from "../../components/Layouts/Footer"
import NavBar from "../../components/Layouts/NavBar"

const index = () => {
    return (
        <>
         <NavBar/>
         <BlogHeader/>
         <BlogList/>
         {/* <BlogsScriptBlock/> */}
         {/* <BlogsScript/> */}
         <Footer/>   
        </>
    )
}

export default index
