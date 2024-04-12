import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sass/global/_base.scss'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Button from '../sass/components/Button'
import Mathles1 from '../assets/vsl_mathles_1.png'

function Home() {
    
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
                <div className="section__infos section__projects">
                    <div className="project">
                        <div className="project__Name">Mathles</div>
                        <div className="project__Desc">
                            Mathles is a web game. Be fast to answer a series of questions about additions, subtractions, multiplications or divisions.<br />
                            Play solo to reach the Stage 250 or try the Battles’ mode where you can play against another player.<br />
                            Other game’s modes : Training, Schools.
                        </div>
                        <div className="listButtons">
                            <Button text="Website" />
                            <Button text="Screenshots" />
                            <Button text="Code on GitHub" />
                            <Button text="Figma Mockup" />
                        </div>
                    </div>
                    <div className="project__Visual">
                        <img src={Mathles1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home