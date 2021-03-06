import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_CONTENT_QUERY = gql`
query HOME_CONTENT_QUERY {
    
  allHomePageContents{
    id
    name
    workContent{
      id
      name
      contentBlockTitle
      contentBlockSubTitle
      content
    }
    ourWork{
      id
      name
      workImage{
        publicUrlTransformed
      }
      companyName
    }

  }
}`



const HomeOurWorksBlock = () => {

  const { data, error, loading } = useQuery(HOME_CONTENT_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>

    return (
      <>
      {data.allHomePageContents.map((allHomePageDatas) =>
      <section id="work" key={allHomePageDatas.id} >
        <div className="container">
            <div className="row">
            {allHomePageDatas.workContent.map((workContentData) =>
                <div className="col-md-12" key={workContentData.id}>
                    <div className="sec-intro">
                        <h3 className="text-uppercase text-center"> {workContentData.contentBlockTitle} </h3>
                        <h2 className="text-center"> {workContentData.contentBlockSubTitle} <span className="primary-font">.</span></h2>
                        <div className="text-center" dangerouslySetInnerHTML={{__html: `<p>${workContentData.content}<p>` }} />
                    </div>
                </div>
            )}  
            </div>
        </div>
        <div className="container-fluid">

            <div className="row align-items-center">
                <div className="col-md-5 wrok-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                        <g className="works-shape-cls-1">
                          <g id="works-illustration">
                            <g id="bg">
                              <path className="works-shape-cls-2" d="M194.6,325.7c-4.1,0-8.2-.2-12.2-.5-44.7-3.6-96.5-25-118.7-63.8-19.4-34-27.1-77.9-18.2-115.8,8.3-35.6,34.1-64.4,70.2-75.4,40.7-12.3,85.6,2.7,125.6-14.1C299.5,31.6,372.6,51,413.4,97.6,449.6,138.9,458.3,205.4,447,257c-5.8,26.1-20.9,51.2-44.9,64.3-19.1,10.5-42.2,12.5-64.1,9.8-17.5-2.2-33.7-7.9-50.6-12.6-13.6-3.8-24.7-1.8-38.6.9C231,322.9,212.8,325.8,194.6,325.7Z"/>
                              <path className="works-shape-cls-3" d="M204.6,300.8c-3.3,0-6.6-.1-9.9-.4-36.2-3-78.1-20.2-96.1-51.6-15.7-27.5-21.9-63.1-14.7-93.7,6.7-28.8,27.6-52.2,56.9-61,32.8-10,69.2,2.1,101.5-11.5,47.1-19.8,106.3-4.1,139.3,33.6,29.3,33.4,36.4,87.3,27.2,129-4.7,21.1-16.9,41.4-36.3,52.1-15.5,8.4-34.2,10.1-51.9,7.9-14.2-1.8-27.3-6.4-41-10.2-10.9-3.1-19.9-1.5-31.1.7C234,298.6,219.3,300.9,204.6,300.8Z"/>
                            </g>
                            <g id="coffee">
                              <ellipse className="works-shape-cls-4" cx="415.7" cy="438.8" rx="17.6" ry="1.3"/>
                              <g>
                                <path id="smoke-3" className="works-shape-cls-5" d="M414.3,377s10.2-6.9,3.7-17-5-13.6-2.7-16.4a14.2,14.2,0,0,0-1,18.1C417.6,366.3,418.2,372.5,414.3,377Z"/>
                                <path id="smoke-2" className="works-shape-cls-6" d="M418,388.2s-15.1-10.2-5.4-25.1,7.2-20,3.8-24.2c8.3,9.3,6.5,20,1.6,26.8S412.3,381.6,418,388.2Z"/>
                                <path id="smoke-1" className="works-shape-cls-7" d="M409.7,391.5s-10.2-6.9-3.6-17,4.9-13.6,2.6-16.4a14,14,0,0,1,1,18.1C406.4,380.8,405.9,387,409.7,391.5Z"/>
                                <g>
                                  <polygon className="works-shape-cls-8" points="430.2 400.9 401.2 400.9 404 437.7 427.4 437.7 430.2 400.9"/>
                                  <rect className="works-shape-cls-9" x="398.1" y="399" width="35.2" height="4.31"/>
                                  <path className="works-shape-cls-10" d="M426.4,395.2H405a3.8,3.8,0,0,0-3.8,3.8h29A3.8,3.8,0,0,0,426.4,395.2Z"/>
                                  <polygon className="works-shape-cls-11" points="428.6 421.9 429.3 413 402.1 413 402.8 421.9 428.6 421.9"/>
                                </g>
                                <path className="works-shape-cls-12" d="M430.2,399h0a3.8,3.8,0,0,0-3.8-3.8H415.8a3.9,3.9,0,0,1,3.9,3.8h3v4.3h-3.2l-2.7,34.4h10.6l2.7-34.4h3.2V399Z"/>
                              </g>
                            </g>
                            <g id="man-shadow">
                                <path className="works-shape-cls-4" d="M328.3,419.8s33,1,42.2,9.5,19.8,22.9-21.9,22.6-78.6-11.7-113.5-8.1-63.7,10-72,8.6,51.2-29.9,51.2-29.9l110.5,4Z"/>
                            </g>
                            <g id="man">
                              <path className="works-shape-cls-13" d="M274.3,170.4s6.1-19.1-2.8-24.6c-5.6-2.9-8.7.7-8.7.7s-2.7-13.5-21-9.1c-11.9,2.9-15.6-3.2-15.6-3.2s-.1,16.9,8,22c6,5,3.7,18.7,3.7,18.7Z"/>
                              <path className="works-shape-cls-14" d="M297.4,345.7l-41.5-4.2-41.6,4.2s-2.5,19.6-10.5,30.1l52.1,18.7,52-18.7C299.9,365.3,297.4,345.7,297.4,345.7Z"/>
                              <path className="works-shape-cls-15" d="M254.2,393.9l1.7.6,1.6-.6c9.6-22,7.3-46.8,6.7-51.6l-8.3-.8-10.7,1.1C244.9,347.8,244.6,372,254.2,393.9Z"/>
                              <path className="works-shape-cls-16" d="M214,347.3c.1,0,43.8,19.3,86,10.9a98.5,98.5,0,0,1-2.6-12.5l-41.5-4.2-33.4,3.3-8.5,2.5Z"/>
                              <path className="works-shape-cls-17" d="M234.2,156.2c6,5,3.7,18.7,3.7,18.7l7.7-.9c8-7.1,16.9-16.1,15.6-19.4-2.2-5.9-8.8-11.8-21-12.5s-14-7.9-14-7.9S226.1,151.1,234.2,156.2Z"/>
                              <path className="works-shape-cls-18" d="M254.3,204.1,220,216.6l-5.7,129.1s12.1,5.7,41.6,5.7V206.1Z"/>
                              <path className="works-shape-cls-18" d="M257.4,204.1l34.3,12.5,5.7,129.1s-12.1,5.7-41.5,5.7V206.1Z"/>
                              <path id="left-hand" className="works-shape-cls-19" d="M220,216.6h-.2a37.4,37.4,0,0,0-22,21.2l-36.9,89.3,31.4,3.8,26.5-65.1Z"/>
                              <path id="right-hand" className="works-shape-cls-19" d="M291.7,216.6h.2a37.1,37.1,0,0,1,22,21.2l36.9,89.3-31.3,3.8-26.6-65.1Z"/>
                              <path className="works-shape-cls-20" d="M328.3,272.5l-14.4-34.7a37.1,37.1,0,0,0-22-21.2h-.2l1.2,49.2,7.5,18.4C310.5,275.8,320.5,273.1,328.3,272.5Z"/>
                              <path className="works-shape-cls-20" d="M183.5,272.5l14.3-34.7a37.4,37.4,0,0,1,22-21.2h.2l-1.2,49.2-7.5,18.4A48.6,48.6,0,0,0,183.5,272.5Z"/>
                              <path className="works-shape-cls-21" d="M294,267.5a28,28,0,0,1-2.3-3.8l1.2,2.1s-13.1,72.6-48,85.3h0c3.3.2,7,.3,11,.3,29.4,0,41.5-5.7,41.5-5.7Z"/>
                              <path className="works-shape-cls-22" d="M203.8,258c8.9-24.9,9.3-24.7,28.7-29.3s15.6-22.4,15.6-22.4L230,212.9l-2.8,1-7.2,2.7h-.2a37.4,37.4,0,0,0-22,21.2l-35.4,85.6C177.4,312.4,196.2,279.1,203.8,258Z"/>
                              <path className="works-shape-cls-23" d="M307.9,258c-8.8-24.9-9.3-24.7-28.7-29.3s-15.5-22.4-15.5-22.4l18,6.6,2.8,1,7.2,2.7h.2a37.1,37.1,0,0,1,22,21.2l35.4,85.6C334.4,312.4,315.5,279.1,307.9,258Z"/>
                              <path className="works-shape-cls-19" d="M256,220h-.2a9.2,9.2,0,0,1-9.2-9.2v-22h18.5v22A9.2,9.2,0,0,1,256,220Z"/>
                              <path className="works-shape-cls-24" d="M265,205.8h.1v-17h-8.6l-9.9,3.6S250.3,205.8,265,205.8Z"/>
                              <path className="works-shape-cls-25" d="M277.5,175.6a6,6,0,1,1-12,0,6,6,0,0,1,12,0Z"/>
                              <path className="works-shape-cls-26" d="M272.7,181.5a92.8,92.8,0,0,0,1.6-11.1,5.3,5.3,0,0,0-2.8-.7,5.9,5.9,0,0,0-6,5.9,6,6,0,0,0,6,6Z"/>
                              <path className="works-shape-cls-25" d="M234.2,175.6a6,6,0,0,0,12,0,6,6,0,0,0-12,0Z"/>
                              <path className="works-shape-cls-26" d="M239,181.5a92.8,92.8,0,0,1-1.6-11.1,5.3,5.3,0,0,1,2.8-.7,5.9,5.9,0,0,1,6,5.9,6,6,0,0,1-6,6Z"/>
                              <path className="works-shape-cls-19" d="M266.4,154.8h-21l-5.2,11.3.8,11.3c.5,6,4.4,16.3,9.8,18.9a13.1,13.1,0,0,0,5.1,1.2,12.6,12.6,0,0,0,5-1.2c5.4-2.6,9.3-12.9,9.8-18.9l.9-11.3Z"/>
                              <path className="works-shape-cls-27" d="M261.2,169a16.5,16.5,0,0,0,7.6,0"/>
                              <path className="works-shape-cls-28" d="M260.1,162.6s5.2-.9,8.2.9"/>
                              <path className="works-shape-cls-27" d="M250.5,169a16.2,16.2,0,0,1-7.5,0"/>
                              <path className="works-shape-cls-28" d="M251.6,162.6s-5.1-.9-8.2.9"/>
                              <path className="works-shape-cls-22" d="M247.5,178.8c-.7-11.4-2.1-24-2.1-24l-5.2,11.3.2,3.6h-.2a5.9,5.9,0,0,0-6,5.9,6,6,0,0,0,6,6l1.5-.2c1.4,5.8,4.8,12.8,9.1,14.9a13.1,13.1,0,0,0,5.1,1.2A30.4,30.4,0,0,1,247.5,178.8Z"/>
                              <g>
                                <path className="works-shape-cls-29" d="M291.7,396.2,173,360.1a29.1,29.1,0,0,0-36.6,20.5v.6a28.9,28.9,0,0,0,23.1,35.9c43.9,7.7,123.5,20.7,165.4,22.3l17.6,11.8a6.9,6.9,0,0,0,8.6-.7h.1a6.9,6.9,0,0,0,.3-9.7l-2.8-3A25.6,25.6,0,0,0,334,420.6c-12.1-5.1-13.2-17.6-16.1-24.4S296.9,385.9,291.7,396.2Z"/>
                                <path className="works-shape-cls-11" d="M136.4,380.6A29.1,29.1,0,0,1,173,360.1l40.2,12.2c-6,7.6-14,23-14.3,51.5-14.7-2.4-28.3-4.7-39.5-6.7a28.9,28.9,0,0,1-23.1-35.9Z"/>
                                <path className="works-shape-cls-30" d="M173.9,405.6a30.5,30.5,0,0,1-3.2,13.5l-11.3-2a28.9,28.9,0,0,1-23.1-35.9v-.6a29.9,29.9,0,0,1,1.5-4.2,31.1,31.1,0,0,1,6.2-.6A29.7,29.7,0,0,1,173.9,405.6Z"/>
                                <path className="works-shape-cls-31" d="M297.4,412.7s-1.7,9.9-18.2,6.4"/>
                                <path className="works-shape-cls-23" d="M307.9,408.1s-25.3-1.1-78.8-10.7c-43.4-7.7-56.1-29.9-59.4-38.1l3.3.8,118.7,36.1c5.2-10.3,23.4-6.9,26.2,0s4,19.3,16.1,24.4a25.6,25.6,0,0,1,14.6,17.1s-12.4-7.9-20.3-9.6S307.9,408.1,307.9,408.1Z"/>
                              </g>
                              <path className="works-shape-cls-13" d="M313.4,438.8s21.8,20.9,40.4,12.3a5.4,5.4,0,0,0,2.1-8.1c-15.7-21.3-35.5-44.5-43-53.2a7.4,7.4,0,0,0-7.6-2.3l-21.4,6.3Z"/>
                              <polygon className="works-shape-cls-32" points="283.9 393.8 263.3 387.5 278.9 435.4 313.4 438.8 283.9 393.8"/>
                              <path className="works-shape-cls-19" d="M220,396.2l118.7-36.1a29.1,29.1,0,0,1,36.6,20.5v.6a28.9,28.9,0,0,1-23.1,35.9c-43.9,7.7-123.5,20.7-165.3,22.3l-17.7,11.8a6.9,6.9,0,0,1-8.6-.7h0a6.8,6.8,0,0,1-.4-9.7l2.8-3a25.9,25.9,0,0,1,14.6-17.1c12.1-5.1,13.2-17.6,16.1-24.4S214.9,385.9,220,396.2Z"/>
                              <path className="works-shape-cls-11" d="M375.3,380.6a29.1,29.1,0,0,0-36.6-20.5l-40.2,12.2c6,7.6,14,23,14.3,51.5,14.7-2.4,28.3-4.7,39.5-6.7a28.9,28.9,0,0,0,23.1-35.9Z"/>
                              <path className="works-shape-cls-30" d="M337.8,405.6a30.5,30.5,0,0,0,3.2,13.5l11.3-2a28.9,28.9,0,0,0,23.1-35.9v-.6c-.4-1.5-.9-2.8-1.4-4.2a32.8,32.8,0,0,0-6.3-.6A29.8,29.8,0,0,0,337.8,405.6Z"/>
                              <path className="works-shape-cls-23" d="M203.8,408.1s25.3-1.1,78.8-10.7c43.4-7.7,56.1-29.9,59.4-38.1l-3.3.8L220,396.2c-5.1-10.3-23.4-6.9-26.2,0s-4,19.3-16.1,24.4a25.9,25.9,0,0,0-14.6,17.1s12.5-7.9,20.3-9.6S203.8,408.1,203.8,408.1Z"/>
                              <path className="works-shape-cls-33" d="M177.7,420.6l-17.8-3.3a29.2,29.2,0,0,1-24.3-33.8v-.7a29.3,29.3,0,0,1,37.8-23l33.6,10.7"/>
                              <path className="works-shape-cls-18" d="M249.8,178.6a.8.8,0,0,0-.7,1.3,8.8,8.8,0,0,0,6.8,3.7,8.6,8.6,0,0,0,6.7-3.7.8.8,0,0,0-.6-1.3Z"/>
                              <path className="works-shape-cls-34" d="M257.6,168.8v6.1a4.1,4.1,0,0,0-3.4,0"/>
                              <rect className="works-shape-cls-19" x="261.2" y="146.5" width="1.5" height="9.67"/>
                              <g id="right-hand-bellow">
                                <path className="works-shape-cls-19" d="M350.8,327.1v.2a21,21,0,0,1-10,25.7l-63.4,33.2-.3-.8A31.1,31.1,0,0,1,290.9,347l28.6-16.1Z"/>
                                <path className="works-shape-cls-23" d="M337.4,347.5A14.5,14.5,0,0,0,339,354l1.9-1a21,21,0,0,0,11.2-19.4h-.8A13.9,13.9,0,0,0,337.4,347.5Z"/>
                                <line className="works-shape-cls-35" x1="319.5" y1="330.9" x2="337.4" y2="320.7"/>
                              </g>
                              <g id="left-hand-bellow">
                                <path className="works-shape-cls-19" d="M161.1,327.1v.2A21,21,0,0,0,171,353l63.4,33.2.3-.8A31.1,31.1,0,0,0,221,347l-28.5-16.1Z"/>
                                <path className="works-shape-cls-23" d="M174.5,347.5a14.5,14.5,0,0,1-1.6,6.5l-1.9-1a21,21,0,0,1-11.2-19.4h.8A13.9,13.9,0,0,1,174.5,347.5Z"/>
                                <line className="works-shape-cls-35" x1="192.5" y1="330.9" x2="174.5" y2="320.7"/>
                              </g>
                              <path className="works-shape-cls-35" d="M227.4,382.5s3.2-17.5-7.2-23.2"/>
                              <path className="works-shape-cls-35" d="M284.3,382.5s-3.2-17.5,7.2-23.2"/>
                              <path className="works-shape-cls-13" d="M198.3,438.8s-21.8,20.9-40.4,12.3a5.3,5.3,0,0,1-2-8.1c15.6-21.3,35.4-44.5,42.9-53.2a7.4,7.4,0,0,1,7.6-2.3l21.5,6.3Z"/>
                              <polygon className="works-shape-cls-36" points="227.9 393.8 248.4 387.5 232.8 435.4 198.3 438.8 227.9 393.8"/>
                              <path className="works-shape-cls-23" d="M219.3,406.8c6.1-.7,14-1.6,23.8-3l5.3-16.3-20.5,6.3Z"/>
                              <path className="works-shape-cls-37" d="M204.8,424.3l-11.9,18.1a3.7,3.7,0,0,1-3.4,1.6h0a3.6,3.6,0,0,1-2.5-5.5l12.2-18a3.2,3.2,0,0,1,3.5-1.3h.1A3.3,3.3,0,0,1,204.8,424.3Z"/>
                              <g>
                                <g>
                                  <polygon className="works-shape-cls-6" points="254.2 319.4 181.4 319.4 199.3 383.4 254.2 383.4 309.1 383.4 327.1 319.4 254.2 319.4"/>
                                  <rect className="works-shape-cls-9" x="199.3" y="383.4" width="109.7" height="9.32"/>
                                  <ellipse className="works-shape-cls-10" cx="254.3" cy="356.5" rx="17.8" ry="9.1"/>
                                  <rect className="works-shape-cls-10" x="181.4" y="315.2" width="145.7" height="4.24"/>
                                  <rect className="works-shape-cls-10" x="205.4" y="386.1" width="11" height="3.75"/>
                                  <rect className="works-shape-cls-10" x="221.3" y="386.1" width="11" height="3.75"/>
                                  <line className="works-shape-cls-38" x1="309.1" y1="388.1" x2="242.3" y2="388.1"/>
                                  <path className="works-shape-cls-39" d="M181.4,319.4l17.9,64h39.1c23.2-26.9,37.3-64,37.3-64v-4.2H181.4Z"/>
                                </g>
                                <line className="works-shape-cls-40" x1="181.4" y1="319.4" x2="327.1" y2="319.4"/>
                              </g>
                            </g>
                            <g id="flower-pot">
                              <ellipse className="works-shape-cls-4" cx="105.7" cy="438.8" rx="26.4" ry="1.3"/>
                              <g>
                                <g id="plant">
                                  <path className="works-shape-cls-10" d="M109.6,425.6l1.7-1.8-.9.9.9-.9c-.2-.2-21-21.4,4.1-116.6l-2.4-.6C87.3,403.8,108.7,424.8,109.6,425.6Z"/>
                                  <g>
                                    <path className="works-shape-cls-10" d="M101.8,308.8c9.6,8.7,7.9,19,7.9,19s-9.6-4.1-11.8-16.8A2.4,2.4,0,0,1,101.8,308.8Z"/>
                                    <path className="works-shape-cls-10" d="M125.7,315c-12.6,3-16,12.8-16,12.8s10.3,1,18.4-9.1A2.3,2.3,0,0,0,125.7,315Z"/>
                                  </g>
                                  <g>
                                    <path className="works-shape-cls-10" d="M95.3,333.8c10.3,7.6,9.7,18,9.7,18s-9.9-3.1-13.4-15.5A2.3,2.3,0,0,1,95.3,333.8Z"/>
                                    <path className="works-shape-cls-10" d="M119.6,337.4c-12.1,4.3-14.6,14.4-14.6,14.4s10.4,0,17.4-10.9A2.4,2.4,0,0,0,119.6,337.4Z"/>
                                  </g>
                                  <g>
                                    <path className="works-shape-cls-10" d="M91.1,355.6c10.9,6.9,11.1,17.2,11.1,17.2s-10.1-2.3-14.5-14.4A2.3,2.3,0,0,1,91.1,355.6Z"/>
                                    <path className="works-shape-cls-10" d="M115.7,357.5c-11.8,5.1-13.5,15.3-13.5,15.3s10.3-.7,16.5-12A2.3,2.3,0,0,0,115.7,357.5Z"/>
                                  </g>
                                  <path className="works-shape-cls-10" d="M122.2,289.8c.3,12.9-8.3,18.7-8.3,18.7s-3.6-9.8,4.1-20.1A2.3,2.3,0,0,1,122.2,289.8Z"/>
                                </g>
                                <rect className="works-shape-cls-11" x="90.9" y="383.4" width="27.7" height="54.78"/>
                                <rect className="works-shape-cls-30" x="107.5" y="383.4" width="11.1" height="54.78"/>
                              </g>
                            </g>
                            <g id="book">
                              <path className="works-shape-cls-14" d="M130.7,122.2l-9.9,2.5a2.8,2.8,0,0,1-3.3-2l-1-3.9,15.2-3.7,1,3.8A2.7,2.7,0,0,1,130.7,122.2Z"/>
                              <rect className="works-shape-cls-14" x="69.8" y="57.6" width="94.3" height="64.39" rx="2.8" transform="translate(-18.2 30.9) rotate(-14)"/>
                              <polygon className="works-shape-cls-11" points="165.2 100.4 162.8 107.3 86.4 126.3 79.7 121.7 65.6 65.2 151.1 43.9 165.2 100.4"/>
                              <rect className="works-shape-cls-18" x="72" y="59.1" width="42.9" height="58.27" transform="translate(-18.5 25.2) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="70.2" y="63.9" width="35.3" height="2.04" transform="translate(-13.1 23.1) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="71.7" y="70.2" width="35.3" height="2.04" transform="translate(-14.5 23.7) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="73.3" y="76.5" width="35.3" height="2.04" transform="translate(-16 24.2) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="74.9" y="82.8" width="35.3" height="2.04" transform="translate(-17.5 24.8) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="78" y="95.5" width="35.3" height="2.04" transform="translate(-20.5 25.9) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="79.6" y="101.8" width="35.3" height="2.04" transform="translate(-21.9 26.5) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="76.5" y="89.2" width="35.3" height="2.04" transform="translate(-19 25.4) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="81.2" y="108.1" width="35.3" height="2.04" transform="translate(-23.4 27.1) rotate(-14)"/>
                              <rect className="works-shape-cls-18" x="115.9" y="48.2" width="42.9" height="58.27" transform="translate(-14.6 35.4) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="113.7" y="53" width="35.3" height="2.04" transform="translate(-9.2 33.3) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="115.3" y="59.4" width="35.3" height="2.04" transform="translate(-10.6 33.9) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="116.9" y="65.7" width="35.3" height="2.04" transform="translate(-12.1 34.4) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="118.4" y="72" width="35.3" height="2.04" transform="translate(-13.6 35) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="120" y="78.3" width="35.3" height="2.04" transform="translate(-15.1 35.6) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="121.6" y="84.7" width="35.3" height="2.04" transform="translate(-16.6 36.1) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="123.2" y="91" width="35.3" height="2.04" transform="translate(-18 36.7) rotate(-14)"/>
                              <rect className="works-shape-cls-6" x="124.7" y="97.3" width="35.3" height="2.04" transform="translate(-19.5 37.3) rotate(-14)"/>
                              <path className="works-shape-cls-11" d="M128.1,118.9l-6.6,1.6a2.6,2.6,0,0,1-3.2-2l-.7-2.4,11.9-2.9.6,2.4A2.8,2.8,0,0,1,128.1,118.9Z"/>
                            </g>
                            <g id="bulb">
                              <path className="works-shape-cls-11" d="M274.5,37.6a33.2,33.2,0,0,0-12.2-7h-.2a25.6,25.6,0,0,0-12.3,0h-.2a31.7,31.7,0,0,0-12.2,7c-10.2,9.6-8.5,27.2,1.4,36.5,2.7,2.6,4,5.9,4.8,9.6.3,1.1,1.8,12.8,1.2,12.8H267c-.5,0,1-11.7,1.2-12.8.9-3.7,2.1-7,4.9-9.6C283,64.8,284.6,47.2,274.5,37.6Z"/>
                              <path className="works-shape-cls-22" d="M251.9,83.7c-.8-3.7-2-7-4.8-9.6-9.9-9.3-11.6-26.9-1.4-36.5a31.7,31.7,0,0,1,12.2-7h.2l2-.4a23.8,23.8,0,0,0-10.3.4h-.2a31.7,31.7,0,0,0-12.2,7c-10.2,9.6-8.5,27.2,1.4,36.5,2.7,2.6,4,5.9,4.8,9.6.3,1.1,1.8,12.8,1.2,12.8h8.4C253.7,96.5,252.2,84.8,251.9,83.7Z"/>
                              <path className="works-shape-cls-41" d="M255.9,96.5V69.4l4.8-2.8a2,2,0,0,0-.5-3.7l-8.7-2.3a1.7,1.7,0,0,1-.2-3.1l4.6-2.1V46.2"/>
                              <path className="works-shape-cls-13" d="M269.2,100.2a1.5,1.5,0,0,1-1.5,1.5H243.3a1.5,1.5,0,0,1-1.4-1.5h0a1.5,1.5,0,0,1,1.4-1.5h24.4a1.5,1.5,0,0,1,1.5,1.5Z"/>
                              <path className="works-shape-cls-13" d="M269.2,104.7a1.5,1.5,0,0,1-1.5,1.5H243.3a1.5,1.5,0,0,1-1.4-1.5h0a1.5,1.5,0,0,1,1.4-1.5h24.4a1.5,1.5,0,0,1,1.5,1.5Z"/>
                              <path className="works-shape-cls-13" d="M269.2,109.2a1.5,1.5,0,0,1-1.5,1.4H243.3a1.4,1.4,0,0,1-1.4-1.4h0a1.4,1.4,0,0,1,1.4-1.5h24.4a1.5,1.5,0,0,1,1.5,1.5Z"/>
                              <path className="works-shape-cls-13" d="M255.5,121.1a8.7,8.7,0,0,0,8.7-8.7H246.8A8.7,8.7,0,0,0,255.5,121.1Z"/>
                            </g>
                            <g id="dev-setting">
                              <path className="works-shape-cls-42" d="M358.7,126.8v-7h-3.1a22.1,22.1,0,0,0-3.9-9l2.4-2.4-4.9-5-2.6,2.6a21.1,21.1,0,0,0-8.9-3.5V98.9h-7v3.8a20.1,20.1,0,0,0-8.5,3.6l-2.5-2.5-4.9,5,2.5,2.5a21.6,21.6,0,0,0-3.6,9h-3.5v7h3.6a21.1,21.1,0,0,0,3.7,8.7l-2.7,2.7,4.9,5,2.8-2.8a20.2,20.2,0,0,0,8.7,3.5v3.8h7v-3.8a19.8,19.8,0,0,0,8.6-3.5l2.4,2.3,4.9-4.9-2.3-2.3a20.3,20.3,0,0,0,3.8-9.2Zm-24,8.6a11.9,11.9,0,1,1,11.9-11.9A11.9,11.9,0,0,1,334.7,135.4Z"/>
                              <path className="works-shape-cls-43" d="M386.6,153.4v-4h-1.8a11.6,11.6,0,0,0-2.2-5.2l1.4-1.4-2.9-2.9-1.4,1.5a11.8,11.8,0,0,0-5.2-2v-2.1h-4v2.2a10.8,10.8,0,0,0-4.9,2.1l-1.4-1.5-2.9,2.9,1.4,1.5a12.7,12.7,0,0,0-2,5.1h-2v4.1h2a11.8,11.8,0,0,0,2.2,5l-1.6,1.6,2.8,2.8,1.6-1.6a11.6,11.6,0,0,0,5,2.1v2.2h4.1v-2.2a11.6,11.6,0,0,0,5-2.1l1.3,1.4L384,160l-1.3-1.3a12,12,0,0,0,2.2-5.3Zm-13.8,5a6.9,6.9,0,0,1,0-13.8,6.9,6.9,0,0,1,0,13.8Z"/>
                              <g className="main-gear">
                                <path className="works-shape-cls-9" d="M450.3,101V86.6H444a44.2,44.2,0,0,0-8-18.4l5-5.1L430.8,53l-5.2,5.2a43.5,43.5,0,0,0-18.3-7.1V43.6H392.9v7.8A43.3,43.3,0,0,0,375.5,59l-5.1-5.1L360.2,64l5.1,5.2A43.7,43.7,0,0,0,358,87.6h-7.2V102h7.3a43.2,43.2,0,0,0,7.7,17.8l-5.7,5.7,10.2,10.1,5.7-5.7a43.1,43.1,0,0,0,17.8,7.3V145h14.4v-7.8A43.8,43.8,0,0,0,426,130l4.8,4.7,10.1-10.1-4.6-4.7a43.4,43.4,0,0,0,7.8-18.9ZM401,118.7a24.5,24.5,0,1,1,24.5-24.4A24.5,24.5,0,0,1,401,118.7Z"/>
                                <circle className="works-shape-cls-42" cx="400.6" cy="94.3" r="14.4"/>
                              </g>
                            </g>
                            <g id="drawing-tool">
                              <path className="works-shape-cls-10" d="M120.7,167.8c-30.9,1.9-54.9,20.4-53.6,41.3s27.3,36.4,58.2,34.6h.1a5,5,0,0,0,4.4-6.1,17.4,17.4,0,0,1-.6-4.5,19.2,19.2,0,0,1,35.1-11.2,4.9,4.9,0,0,0,7.9.3c4.7-6,7.1-12.8,6.7-19.9C177.6,181.4,151.6,165.9,120.7,167.8Z"/>
                              <g>
                                <path className="works-shape-cls-9" d="M120.5,164.4c-30.9,1.9-54.9,20.4-53.6,41.3s27.3,36.4,58.2,34.6h.1a5,5,0,0,0,4.4-6.1,16.3,16.3,0,0,1-.6-4.5,19.2,19.2,0,0,1,35.1-11.2,4.9,4.9,0,0,0,7.9.3c4.7-6,7.1-12.8,6.7-19.9C177.4,178,151.4,162.5,120.5,164.4Z"/>
                                <path className="works-shape-cls-11" d="M109.6,223.8a6.7,6.7,0,0,1-6.3,7.1,6.8,6.8,0,0,1-7.2-6.3,6.7,6.7,0,0,1,6.4-7.1A6.6,6.6,0,0,1,109.6,223.8Z"/>
                                <path className="works-shape-cls-11" d="M91.2,211a6.8,6.8,0,1,1-13.5.8,6.8,6.8,0,0,1,13.5-.8Z"/>
                                <path className="works-shape-cls-11" d="M96.6,188.7a6.7,6.7,0,0,1-6.3,7.1,6.9,6.9,0,0,1-7.2-6.3,6.9,6.9,0,0,1,6.4-7.2A6.8,6.8,0,0,1,96.6,188.7Z"/>
                                <path className="works-shape-cls-11" d="M119.4,176.6a6.7,6.7,0,0,1-6.3,7.1,6.8,6.8,0,0,1-7.2-6.3,6.7,6.7,0,0,1,6.4-7.1A6.6,6.6,0,0,1,119.4,176.6Z"/>
                                <path className="works-shape-cls-11" d="M145.1,176.9a6.9,6.9,0,0,1-6.3,7.2,6.8,6.8,0,1,1,6.3-7.2Z"/>
                                <path className="works-shape-cls-11" d="M166.8,189.1a6.8,6.8,0,0,1-6.4,7.2,6.8,6.8,0,0,1-.8-13.5A6.9,6.9,0,0,1,166.8,189.1Z"/>
                              </g>
                              <path className="works-shape-cls-45" d="M95.5,187.6a2.8,2.8,0,0,1-2.7,3,2.9,2.9,0,0,1-3-2.6,2.8,2.8,0,0,1,2.7-3A2.9,2.9,0,0,1,95.5,187.6Z"/>
                              <path className="works-shape-cls-45" d="M118.3,175.8a2.8,2.8,0,0,1-2.7,3,2.9,2.9,0,0,1-3-2.7,2.9,2.9,0,0,1,5.7-.3Z"/>
                              <path className="works-shape-cls-45" d="M142.4,175.2a2.8,2.8,0,1,1-5.6.3,2.8,2.8,0,0,1,5.6-.3Z"/>
                              <path className="works-shape-cls-45" d="M88.4,209a2.8,2.8,0,0,1-2.7,3,2.9,2.9,0,0,1-3-2.6,2.8,2.8,0,0,1,2.7-3A2.9,2.9,0,0,1,88.4,209Z"/>
                              <path className="works-shape-cls-45" d="M108.4,221.8a2.8,2.8,0,0,1-2.7,3,2.8,2.8,0,1,1,2.7-3Z"/>
                              <g id="brush">
                                <path className="works-shape-cls-11" d="M175.2,164.4s9.2-5,9.8-12.8a20.1,20.1,0,0,0-2-8.4l-1.3,4.7s-.7-7.4-6-11-4-2.6-4-2.6,4.5,5.9-.5,15.8,1.3,13.2,1.3,13.2Z"/>
                                <path className="works-shape-cls-14" d="M174.7,161.2s-1.7-8.5,2.1-13.1c-4.9,6.2-6,11.3-4.7,15.4Z"/>
                                <path className="works-shape-cls-18" d="M170.2,162.9a3.5,3.5,0,0,1,4.5-1.7h0a3.5,3.5,0,0,1,2,4.3l-6,18.6-4.6-1.8-4.5-1.9Z"/>
                                <path className="works-shape-cls-46" d="M160.9,184.6l7.7,3.1a1.9,1.9,0,0,0,2.6-1.1h0a2,2,0,0,0-1.1-2.7l-7.7-3.1a2,2,0,0,0-2.6,1.1h-.1A2.1,2.1,0,0,0,160.9,184.6Z"/>
                                <path className="works-shape-cls-13" d="M161.5,184.8l3.2,1.4,3.2,1.3s2.5.6-5.1,17.2c-5.6,12.3-20.1,43.3-28.5,59.9a1.4,1.4,0,0,1-2.6-1.1c5.6-17.7,16.8-50,21.4-62.8C159.3,183.5,161.5,184.8,161.5,184.8Z"/>
                                <path className="works-shape-cls-18" d="M144.2,244.4c-3.6,7.5-7.1,14.7-9.9,20.2a1.4,1.4,0,0,1-2.6-1.1l7-21.4Z"/>
                                <path className="works-shape-cls-47" d="M143.1,229.5h0c11.9-14.7,16.3-42.8,16.3-42.9-1.3,1.9-3.3,5.9-6.3,14.1C150.9,207,147,217.9,143.1,229.5Z"/>
                              </g>
                            </g>
                            <g id="planet">
                              <polygon className="works-shape-cls-43" points="373.4 195 375.6 199.2 380.3 199.9 376.9 203.2 377.7 207.9 373.4 205.7 369.2 207.9 370 203.2 366.6 199.9 371.3 199.2 373.4 195"/>
                              <polygon className="works-shape-cls-42" points="434.1 189 437.1 195 443.7 195.9 438.9 200.6 440 207.1 434.1 204 428.3 207.1 429.4 200.6 424.6 195.9 431.2 195 434.1 189"/>
                              <polygon className="works-shape-cls-43" points="415.7 278.4 417.4 281.7 421 282.2 418.4 284.8 419 288.5 415.7 286.8 412.4 288.5 413.1 284.8 410.4 282.2 414.1 281.7 415.7 278.4"/>
                              <polygon className="works-shape-cls-42" points="357.1 255.8 360 261.8 366.6 262.7 361.9 267.4 363 273.9 357.1 270.8 351.2 273.9 352.3 267.4 347.6 262.7 354.2 261.8 357.1 255.8"/>
                              <g>
                                <circle className="works-shape-cls-11" cx="401.3" cy="239.4" r="32.8" transform="translate(-60.3 166.6) rotate(-21.9)"/>
                                <g className="works-shape-cls-48">
                                  <path className="works-shape-cls-14" d="M392.5,271.1a32.9,32.9,0,0,0,31.6-8,32.9,32.9,0,0,1-31.3-55.4,32.9,32.9,0,0,0-.3,63.4Z"/>
                                </g>
                                <path className="works-shape-cls-22" d="M410.1,207.8a38.6,38.6,0,0,0-4.9-1,38.5,38.5,0,0,0-1.3,9.7,35.7,35.7,0,0,0,28,34.9,28.1,28.1,0,0,0,1-3.1A32.8,32.8,0,0,0,410.1,207.8Z"/>
                                <path className="works-shape-cls-49" d="M368.6,236.7c-12.7-4.9-20.7-9.4-20-11.8,1.1-4,25.6-.6,54.6,7.5s51.7,17.9,50.6,21.9c-.7,2.3-9.7,2.1-23.1-.2"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                </div>
                <div className="col-md-7">
                    <div className="work-owl-carousel owl-carousel owl-theme">
                      {allHomePageDatas.ourWork.map((ourWorkData) =>
                        <div className="item" key={ourWorkData.id}>
                            <div className="project-info rounded-3 default-box-shadow">
                                <a href="#">
                                    <div className="img-thumbnail default-background rounded-3" style={{backgroundImage:`Url(${ourWorkData.workImage.publicUrlTransformed})`}}></div>
                                </a>
                                <div className="detailimages">
                                    <span><span className="portfolio-item"><a href="#" rel="tag"> {ourWorkData.name} </a></span></span>
                                    <h2 className="entry-title"> {ourWorkData.companyName} </h2>
                                </div>
                            </div>
                        </div>
                      )}  
                    </div>
                </div>
            </div>
        </div>
      </section>

      )}
      </>
         
    )
}

export default HomeOurWorksBlock
