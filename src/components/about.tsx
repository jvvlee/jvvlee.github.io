import AboutCSS from '../css/components/About.module.scss';

const About: React.FC = () => {
    return (
        <div className={AboutCSS.container}>
            <h3>About Me</h3>
            <img src="/jonathanlee_portrait1.png" alt="Portrait of Jonathan Lee" style={{ width: '200px', borderRadius: '50%' }} />

            <div className={AboutCSS.content}>
                <p>I'm a transplant from New York City, currently based in the PNW (Portland, OR). I have a background in both Rails and React development.</p>
                <br />
                <p>In my free time, I enjoy Brazillian jiu-jitsu, cooking, and exploring the local music scene. I'm always looking for new opportunities to grow as a developer and contribute to exciting projects.</p>
            </div>
        </div>
    )
}

export default About;