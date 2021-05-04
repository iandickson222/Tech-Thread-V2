import avatar from '../images/Graduation.jpg'

function About() {
    return(     
        <div className="about">
            <img src={avatar} alt="Avatar"/>
            <div>
                <h2>Francis Ian Dickson</h2>
                <p>
                    I'm a mechanical engineering graduate with more than ten years of programming experience.
                    I also have experience with 3D modeling, developing AI, and developing advanced physics simulations.
                </p>
            </div>
        </div>  
    );
}

export default About;