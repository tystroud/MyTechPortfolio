import React, { useCallback, useMemo } from 'react'
import '../styles/Banner.scss'
import { Container, Row, Col } from "react-bootstrap"
import profilePic from '../images/profilepic.PNG'
import { useEffect, useState } from 'react'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => [ "Full Stack Developer", "UI/UX Designer", "DevOps Engineer"], []);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(800 - Math.random()*100);
    const period = 2000;

    const tick = useCallback(() => { 
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, period, text, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => clearInterval(ticker);
    }, [delta, tick]); 
    

  return (
    <div className='banner-section'>
        <Container>
            <Row className='banner-row'>
                <Col>
                    <span className='tagline'>Welcome to My Portfolio</span>
                    <h1>{`Hi there! I'm Tyeisha Stroud , a `}<span className='wrap'>{text}</span></h1>
                    <div className='about-me'> 
                        <p>Based in Atlanta, Ga &#127944;GO FALCONS&#127944; I find passion in building web applications and experimenting with new technologies. My journey in the realm of technology has been fueled by my deep love for coding and problem-solving</p>

                        <p>In my spare time I like to run around in the fresh grass with my active 2 year old son Geno- mostly so he doesn't break anything in the house, take a good ol pilates class or spending time on all popular tech sites learning a new tech hack/trick.</p>

                        <p>I hope you enjoy browsing my portfolio, and I look forward for the opportunity to bring your next projects to life.</p>
                    </div>
                    
                    <button onClick={() => console.log('connect')}>Let's Connect</button>
                </Col>
                <Col>
                    <img src={profilePic} alt='profile pic'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner