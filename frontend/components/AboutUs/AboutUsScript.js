import { useEffect } from "react";

const AboutUsScript = () => {

    const script = () => {
        useEffect(() => {
            $(document).ready(function() {
                    // Counter about
                        $('.counter-about').counterUp({
                            delay: 10,
                            time: 3000
                        });
                });
                
           
          }, [])

    }


    const wayPointScript = () =>{

        useEffect(() => {
            $(document).ready(function() {
                const sections = document.querySelectorAll('.process-wrap');
                const navLi = document.querySelectorAll('.process-img');
                let processSecOffset = document.querySelector('#process').offsetTop - 600;
            
                window.addEventListener('scroll', ()=> {
                    let current = '';
            
                    sections.forEach( section => {
                        const sectionTop = section.offsetTop + processSecOffset;
                        const sectionHeight = section.clientHeight;
                        if(scrollY >= sectionTop){
                            current = section.getAttribute('id');
                        }
                        
                    });
                    sections.forEach( section => {
                        section.classList.remove('active');
                        if(section.classList.contains(current)){
                            section.classList.add('active')
                        }
                    });
                    navLi.forEach( li => {
                        li.classList.remove('active');
                        if(li.classList.contains(current)){
                            li.classList.add('active')
                        }
                    });
                });
            });
           
          }, [])

        
    }

    
    return (
        <>
            {script()}
            {wayPointScript()}
        </>
    )
}

export default AboutUsScript

