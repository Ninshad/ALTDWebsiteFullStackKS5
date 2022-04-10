import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { Alert, Spinner } from "react-bootstrap";


export const HOME_HEADER_QUERY = gql`
query HOME_HEADER_QUERY {
    
    allHomePageContents{
        id
        name
        header{
          id
          name
          title
          subTitle
          showCta
          CtaLabel
          CtaUrl
        }
        
      }
}`

const HomeHeaderBlock = () => {

    const { data, error, loading } = useQuery(HOME_HEADER_QUERY);


    console.log(data);
    if (loading) return <Spinner animation="border" style={{ color: "#E86124" }} />
    if (error) return <p></p>
    
    return (
        <section id="home">
        <div className="container-fluid">
            <div className="row">
                 {data.allHomePageContents.map((allHomePageDatas) =>
                allHomePageDatas.header.map((headerDatas) =>
                <div className="order-2 order-md-1 col-md-6 col-lg-6 d-flex align-items-center" key={headerDatas.id}>
                    <div className="ld-content">
                        <h1 >{headerDatas.title}<span className="primary-font">.</span></h1>
                        <p>{headerDatas.subTitle}</p>
                        <Link href={`/${headerDatas.CtaUrl}`}>
                        <div className="ld-btn-wrapper">
                            <button className="button button--cta"><span>{headerDatas.CtaLabel}</span></button>
                        </div>
                        </Link>
                    </div>
                </div>
                )
                )}
                <div className="order-1 order-md-2 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="welcome-image-wrap"> 
                        <svg version="1.1" id="Shape-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 557.1 431.9" style={{enableBackground: "new 0 0 557.1 431.9"}} xmlSpace="preserve">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="shape-1">
                                    <g id="lamp-stand">
                                        <g id="eHzBtxGrUfe6">
                                            <path id="eHzBtxGrUfe7" className="shape-1-cls-1"
                                                d="M142.7,341.9V58.1a13.9,13.9,0,0,1,4.1-9.8L189.6,5.5h0a6.9,6.9,0,0,1,9.8,0l16.1,16.1" />
                                        </g>
                                        <g id="eHzBtxGrUfe8">
                                            <path id="eHzBtxGrUfe9" className="shape-1-cls-2"
                                                d="M168.7,343.6v.9a2.6,2.6,0,0,1-2.6,2.5h-46a2.6,2.6,0,0,1-2.6-2.6v-.9a2.6,2.6,0,0,1,2.6-2.6h46A2.7,2.7,0,0,1,168.7,343.6Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe10">
                                            <path id="eHzBtxGrUfe11" className="shape-1-cls-3"
                                                d="M246.2,12.1l17.2,17.1L222.9,69.7,205.7,52.5a28.6,28.6,0,1,1,40.5-40.4Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe12">
                                            <path id="eHzBtxGrUfe13" className="shape-1-cls-4"
                                                d="M262.6,28.8c2.2,2.2-5.1,13-16.2,24.2s-22,18.4-24.2,16.2,5.1-13,16.2-24.2S260.4,26.6,262.6,28.8Z" />
                                        </g>
                                    </g>
                                    <g id="seat-couch">
                                        <g id="eHzBtxGrUfe15">
                                            <path id="eHzBtxGrUfe16" className="shape-1-cls-5"
                                                d="M112.9,358.3c-4.4-65.6,302.6-243.2,373.2-191.8s76.1,182.6-46.4,232.6S117.3,423.9,112.9,358.3Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe17">
                                            <path id="eHzBtxGrUfe18" className="shape-1-cls-6"
                                                d="M241.9,299.9c-2-30.6,141-113.3,173.9-89.4s35.5,85.1-21.6,108.4S243.9,330.5,241.9,299.9Z" />
                                        </g>
                                    </g>
                                    <g id="back-leg-skin">
                                        <g id="eHzBtxGrUfe20">
                                            <path id="eHzBtxGrUfe21" className="shape-1-cls-7"
                                                d="M189.8,418.1c27.2-60.3,46.7-99.7,55-111.1,5.5-7.5,29.7,0,22.4,16.2-3,6.6-12.8,24.4-24.7,44.3-7,11.6-20.3,29.5-40,53.5Z" />
                                        </g>
                                    </g>
                                    <g id="back-leg">
                                        <g id="eHzBtxGrUfe23">
                                            <path id="eHzBtxGrUfe24" className="shape-1-cls-8"
                                                d="M195.6,394.9c3.9-5.3,35-75.5,48.1-93.3,5.8-7.8,43.7,3.2,35.8,20.1L242.9,414Z" />
                                        </g>
                                    </g>
                                    <g id="back-leg-shoe">
                                        <g id="eHzBtxGrUfe26">
                                            <path id="eHzBtxGrUfe27" className="shape-1-cls-9"
                                                d="M209.2,417.3a2.1,2.1,0,0,0-2.7-1,16.2,16.2,0,0,1-6.2,1.8,18.8,18.8,0,0,1-7.1-2l-1.7-4.1h0a1,1,0,0,0-1.3-.5L164,423.1c-2.1.3-4.7.7-7.9,1s-4,3-2.5,7.8H210a50.8,50.8,0,0,0,.9-7.9,22.2,22.2,0,0,0-1.7-6.7Z" />
                                        </g>
                                    </g>
                                    <g id="front-leg-skin">
                                        <g id="eHzBtxGrUfe29">
                                            <path id="eHzBtxGrUfe30" className="shape-1-cls-7"
                                                d="M329.9,402.2c-3.5-2.9-44.6-36.1-72.8-60.7-11.3-9.9,10.5-28.9,21.8-18,3.9,3.6,7.9,7.5,12.1,11.7,14.4,14.2,41.1,48.6,48.4,59C344.1,400.6,334.7,406.4,329.9,402.2Z" />
                                        </g>
                                    </g>
                                    <g id="front-leg-shoe">
                                        <g id="eHzBtxGrUfe32">
                                            <path id="eHzBtxGrUfe33" className="shape-1-cls-9"
                                                d="M337.5,389.4a2,2,0,0,0-2.8.6c-1.6,2.3-3,4-4.3,4.7a19,19,0,0,1-7.1,2l-3.6-2.6h0a1.2,1.2,0,0,0-1.4.3l-16.1,23.8-6.1,5c-2.5,2-1.9,4.7,1.9,8.1l48-29.8a44.1,44.1,0,0,0-3.5-7.2c-.7-1.3-2.4-2.8-4.9-4.8C337.5,389.5,337.5,389.5,337.5,389.4Z" />
                                        </g>
                                    </g>
                                    <g id="front-leg">
                                        <g id="eHzBtxGrUfe35">
                                            <path id="eHzBtxGrUfe36" className="shape-1-cls-10"
                                                d="M292.6,329.2l35.5,46-42.6,29.1c-32-54.8-49-82.3-49.1-82.5-1.7-4.6-3.5-18.5,6-23.3,53-23.6,83-36,90.2-38.1H387c5.1,34.7-3.5,50.6-33,55.8-10.4,1.8-30.8,4.8-61.3,9.7C291.7,326.2,291.7,327.3,292.6,329.2Z" />
                                        </g>
                                    </g>
                                    <g id="left-back-hair">
                                        <g id="eHzBtxGrUfe38">
                                            <path id="eHzBtxGrUfe39" className="shape-1-cls-11"
                                                d="M339.7,88.1l1.9-.6a21.5,21.5,0,0,1,27,14l6.3,20c3.3,10.6-11.8,26.3-11.8,26.3L336,156.5c-5.7-2.9-10.6-31.5-11.1-44.6A21.6,21.6,0,0,1,339.7,88.1Z" />
                                        </g>
                                    </g>
                                    <g id="neck">
                                        <g id="eHzBtxGrUfe41">
                                            <path id="eHzBtxGrUfe42" className="shape-1-cls-12"
                                                d="M382.5,155.3l-22.9,7.2-4.8-28.6c-3.3-6,2.7-15.9,8.2-12.8Z" />
                                        </g>
                                    </g>
                                    <g id="face">
                                        <g id="eHzBtxGrUfe44">
                                            <path id="eHzBtxGrUfe45" className="shape-1-cls-13"
                                                d="M354.8,133.9c-5,5.7-10.5,9.4-13.6,9.5-7.7.4-16.6-25.5-14.3-37.6s29.3-25.5,37.1-5.5c2.7,6.9,1.7,14.2-1,20.7C365.7,129.1,361.8,132.5,354.8,133.9Z" />
                                        </g>
                                    </g>
                                    <g id="right-side-hair">
                                        <g id="eHzBtxGrUfe47">
                                            <path id="eHzBtxGrUfe48" className="shape-1-cls-11"
                                                d="M355.9,119.5a5.5,5.5,0,1,0-3.3-10.5,5.1,5.1,0,0,0-2.9,2.3c-9.1-2.3-18.1-.7-22.7-7.7,1.6-5.3,3.5-11.5,14.5-15,7.4-2.3,15,.7,22.9,9l.2.8,3.5,1.7c7,23.1,20.1,11.7,26.7,37.5l-28,8.6c-4.1-2.1-8.6-14.9-11.1-26.6Z" />
                                        </g>
                                    </g>
                                    <g id="blanket">
                                        <g id="eHzBtxGrUfe50">
                                            <path id="eHzBtxGrUfe51" className="shape-1-cls-13"
                                                d="M313.1,257.4l-31.6,13.1q-13.3,15.8-15,13.2c-1.6-2.6,1.9-4.9,1.1-6.9s-6.8-1.7-12.5-1.3-4-2.1-2.7-3.3a83.1,83.1,0,0,1,21.7-8.7L306,240.1Zm128.3,47.3c1.4,2.9,12,11.7,19.4,16.8,3,2,1.7,4.6.6,5.3-9.1,5.6-15-1-22.9-4.7s-7.9,7.3-14.7,4.2c2.1-4.7,7-13.4,4.7-19.2-1-2.5-8-24.7-20.9-66.3h20.9Q438.6,298.8,441.4,304.7Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe52">
                                            <path id="eHzBtxGrUfe53" className="shape-1-cls-14"
                                                d="M285.4,272.5l-9.5-11.7c39.3-28.2,52.5-81.4,84.6-109.1l8.6,1.5C370.5,199.2,353.6,264.1,285.4,272.5Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe54">
                                            <path id="eHzBtxGrUfe55" className="shape-1-cls-15"
                                                d="M378.6,147.8l-22.1,3.5c.1,41.8-22.7,73.5-28.5,102.9-.5,2.6-1.2,7.6,2.3,7.6h76.5C403.2,213.3,396.9,177.2,378.6,147.8Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe56">
                                            <path id="eHzBtxGrUfe57" className="shape-1-cls-14"
                                                d="M441.8,303.8H425.4a189.1,189.1,0,0,1-10.2-21H355q-13.3-33.7,16.4-134.5l6.9-.4h2.1c13.7,0,21.4-5.4,30-2.8s11.5,10.6,3.5,25.2a12.5,12.5,0,0,1-7.6,6.4Q444.1,229,441.8,303.8Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe58">
                                            <path id="eHzBtxGrUfe59" className="shape-1-cls-16"
                                                d="M415.2,282.9H392.8c4.3-7.2,7.3-18.7,9.2-34.5Q408.9,268.2,415.2,282.9Z" />
                                        </g>
                                    </g>
                                    <g id="laptop">
                                        <g id="eHzBtxGrUfe61">
                                            <path id="eHzBtxGrUfe62" className="shape-1-cls-17"
                                                d="M328.9,297.9s43.5-12.2,44.2-13.9-2.4-4.4-2.4-4.4L264.9,257Z" />
                                        </g>
                                        <g id="eHzBtxGrUfe63">
                                            <path id="eHzBtxGrUfe64" className="shape-1-cls-18"
                                                d="M328.9,297.9s2.6-65.2-.5-68.3-79.8-17.6-81.7-16.9,3.4,65.2,4.3,68S328.9,297.9,328.9,297.9Z" />
                                        </g>
                                    </g>
                                    <g id="flower-pot">
                                        <g id="leaf-behind">
                                            <g id="eHzBtxGrUfe66">
                                                <path id="eHzBtxGrUfe67" className="shape-1-cls-19"
                                                    d="M34.7,160.5a14.2,14.2,0,0,1,7.4.4c5.1,1.8,6.8,7.5,7,12.2s-.6,10.6,3.5,14.5c2,1.8,4.2,3.1,6,4.9a20.7,20.7,0,0,1,4.8,6.6c2.3,4.5,3.6,9.9,2,14.8s-4.9,8.5-3.7,13.3,6.5,8.6,9.9,12.2,7.5,9.2,8.4,14.8-1.1,10.9-4.5,15.1c-6.7,8.5-17.1,13.1-28,13.7-4.6.2-9.8.4-14-1.9a7.5,7.5,0,0,1-2.7-2.6,7.7,7.7,0,0,0-2.7-2.4A15,15,0,0,1,23,270c-4.5-9.5-2.1-21.7,2.9-30.7,1.1-2.2,2.1-4.2,1.3-6.6a25.7,25.7,0,0,0-4.1-6.8,56.4,56.4,0,0,1-4.6-6.3,14.5,14.5,0,0,1-1.8-7.6,26.8,26.8,0,0,1,4.8-14.1c2.8-4.1,6-8,5.7-13.2s-4.2-10.1-3-15.6a10.4,10.4,0,0,1,3.6-6.3A21.6,21.6,0,0,1,34.7,160.5Z" />
                                            </g>
                                            <g id="eHzBtxGrUfe68">
                                                <path id="eHzBtxGrUfe69" className="shape-1-cls-18"
                                                    d="M33.7,169.3c-.1-.7.8-1.2,1.5-1.1s1,1.1,1,1.8a24.8,24.8,0,0,0,1.2,6.6c1.4,4.5,3.8,8.7,5.7,13a24.5,24.5,0,0,1,2.3,13.6c-.6,4.4-1.9,8.8-2.5,13.4s-1.2,8,.2,11.9,4.3,6.5,6.5,9.8c4.4,6.7,6.6,14.4,7.4,22.4a41.2,41.2,0,0,1-.2,11.1c-.4,2.2-.9,5-2.6,6.6s-2.3,1-3,.1-.3-2.4-.1-3.4a57.4,57.4,0,0,0,.1-13.1,48.7,48.7,0,0,0-2.8-12.3,49.5,49.5,0,0,0-5.8-9.8c-2.4-3.2-5-6.4-6.2-10.2s-.6-8.1.1-12.1,2-8.3,3.3-12.5a21.5,21.5,0,0,0,.4-11.8C38.2,185.2,33.6,177.8,33.7,169.3Z" />
                                            </g>
                                        </g>
                                        <g id="leaf-right">
                                            <g id="eHzBtxGrUfe71">
                                                <path id="eHzBtxGrUfe72" className="shape-1-cls-20"
                                                    d="M107.5,169.3a17.2,17.2,0,0,1,8.3,4.9c4.6,5,3,12.6.5,18.2s-7.1,11.9-4.8,18.7c1.1,3.1,2.8,6,3.8,9.2a31.9,31.9,0,0,1,1.4,10.6c-.2,6.4-1.9,13.3-6.7,18s-10.9,6.6-12.5,12.8,2.2,13.7,3.9,19.8,2.8,15.1.5,22S94,315.2,87.5,318.1c-12.7,5.8-27.4,4.7-40.1-1.1-5.3-2.5-11.3-5.5-14.7-10.6a12.4,12.4,0,0,1-1.5-4.7,11.2,11.2,0,0,0-1.6-4.3,19.6,19.6,0,0,1-2.1-10.1c.7-13.6,10.9-26.1,22-33.4,2.6-1.7,4.9-3.5,5.5-6.6s0-6.9-.5-10.4-1.2-6.6-1.3-9.9a19.4,19.4,0,0,1,2.7-9.7A33.3,33.3,0,0,1,70,204.1c5.4-2.9,11.5-5.5,14.3-11.6s1.3-13.9,6.1-19.6c2-2.4,4.7-4.5,7.9-4.9S104.6,168.3,107.5,169.3Z" />
                                            </g>
                                            <g id="eHzBtxGrUfe73">
                                                <path id="eHzBtxGrUfe74" className="shape-1-cls-18"
                                                    d="M101.1,179.8a1.6,1.6,0,0,1,2.4-.2c.9.8.5,1.8,0,2.6a35,35,0,0,0-2.7,8.3c-1.1,6.1-.9,12.2-1.4,18.4s-1.9,12-5.6,17-7.5,9-11,13.8-6.2,8.5-6.8,13.7.9,10.1,1.4,15.2a65.2,65.2,0,0,1-5.2,30.2,55.5,55.5,0,0,1-7,12.6c-1.7,2.2-4,5.2-6.8,5.9-1.3.4-3.1-.1-3.4-1.7s1.1-2.8,1.9-3.9a64.8,64.8,0,0,0,8-14.9A58.6,58.6,0,0,0,69.1,281a54.7,54.7,0,0,0-.6-15.1c-.9-5.1-1.8-10.3-.8-15.5s4.1-9.6,7.5-13.7a144.5,144.5,0,0,1,11.2-12.3c3.7-3.9,6.4-8,7.6-13.3C96.7,200.8,95.9,189.5,101.1,179.8Z" />
                                            </g>
                                        </g>
                                        <g id="leaf-left">
                                            <g id="eHzBtxGrUfe76">
                                                <path id="eHzBtxGrUfe77" className="shape-1-cls-21"
                                                    d="M11.9,207.3A16.8,16.8,0,0,1,24.6,214c3.5,4.6,4.3,10.1,5.6,15.5a13.3,13.3,0,0,0,4.2,7.1c1.9,1.7,4.5,2.1,6.9,2.9a15.9,15.9,0,0,1,10.1,10.3c1.9,5.8-.2,11.6,0,17.5s5.6,8.8,9.8,11.4,8,5,9.2,10,1.7,11.1-.2,16.3c-3.2,8.6-12.4,12.3-21.1,12.8s-17.9-.5-23.8-6.4c-3.6-3.5-4.8-8.3-4.6-13.1a44,44,0,0,1,1.6-8.8c.5-2,1.4-4.1,1.6-6.2.6-5.6-4.5-6.7-9-8.4A21.5,21.5,0,0,1,2.7,264a21,21,0,0,1-2-15.5,19.3,19.3,0,0,1,4.2-7.2c.8-.9,2-1.6,2.8-2.5a3.4,3.4,0,0,0,.4-3.1c-1.1-4.9-4.7-9-5.8-13.9s-.4-9.9,3.6-12.7A10.1,10.1,0,0,1,11.9,207.3Z" />
                                            </g>
                                            <g id="eHzBtxGrUfe78">
                                                <path id="eHzBtxGrUfe79" className="shape-1-cls-18"
                                                    d="M18.8,220c5.4,5.9,6.8,13.7,7.1,21.3.2,4.3-.1,8.7,1.1,12.9s3.5,6.3,6.1,8.9c5.2,5.1,10.9,10.5,12.3,17.9.9,4.4.3,8.9,1.4,13.2a36.3,36.3,0,0,0,5.4,11.2c1.9,2.7,4.4,4.7,6.5,7.3.6.8,1.6,1.9,1.3,2.9s-1.9,1.6-3,1.4-4.9-3-6.6-4.8a49.5,49.5,0,0,1-6.3-8.9A38.5,38.5,0,0,1,40,291.8c-.6-4.2-.2-8.5-1.7-12.7-2.7-6.8-9-10.8-13.7-16.1s-4.7-14.7-4.2-22.8c.4-4.4.8-9.5-1.4-13.6-.9-1.5-2.8-3-3.1-4.8S17.5,218.6,18.8,220Z" />
                                            </g>
                                        </g>
                                        <g id="pot">
                                            <g id="eHzBtxGrUfe81">
                                                <path id="eHzBtxGrUfe82" className="shape-1-cls-22"
                                                    d="M23.7,315.3c0,33,5.4,50.3,33.8,50.3s33.8-17.2,33.8-50.3Z" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeHeaderBlock
