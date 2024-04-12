import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sass/global/_base.scss'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Button from '../sass/components/Button'
import projects from '../assets/projects.json'
import { Link } from 'react-router-dom'

function Home() {
    
    const listProjects = projects

    return (

        <>
            <div className="mainTitle">
                <div className='myName'>PHIL<span className='thin'>JACQUIER</span></div>
                <div className="myJob">
                    <div className='myJob--Desc'><span className='thin'>Web</span>Developer</div>
                    <div className='myJob--Desc'><span className='thin'>Développeur</span>Web</div>
                </div>
            </div>
            <div className="navScroll">
                <div>scroll down</div>
                <div><FontAwesomeIcon icon={faAngleDown} className='iconScrollDown' /></div>
            </div>

            <div className="section">
                <div className="section__category">
                    <div className="bubble">About me</div>
                </div>
                <div className="section__infos">
                    <div className="professionalWay">2023 - Blabla....</div>
                    <div className="professionalWay">2022 - Blabla....</div>
                    <div className="professionalWay">2021 - Blabla....</div>
                    <div className="professionalWay">2020 - Blabla....</div>
                    <div className="professionalWay">....</div>
                </div>
            </div>

            <div className="section">
                <div className="section__category">
                    <div className="bubble">Personal projects</div>
                </div>

                <div className="section__listProjects">
                {listProjects.map((project, index) => 
                    <div className="section__infos section__projects" key={`Project-${index}`}>
                        <div className="project">
                            <div className="project__Name">{project.name}</div>
                            <div className="project__Desc">
                                {project.description.map((desc, id) =>
                                    <div key={`Desc-Project-${id}`}>{desc}</div>
                                )}
                            </div>
                            <div className="listButtons">
                                {project.website === 'restricted' ?
                                <Button text="Website" />
                                :
                                <Link className="btn" 
                                    to={project.website} 
                                    onClick={(event) => {event.preventDefault();
                                                window.open(project.website, '_blank');}}>Website</Link>
                                }
                                <Button text="Screenshots" />
                                <Button text="Code on GitHub" />
                                {project.figmaMockup.length > 0 && <Button text="Figma Mockup" />}
                            </div>
                        </div>
                        <div className="project__Visual">
                            <img src={project.visual} />
                        </div>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default Home