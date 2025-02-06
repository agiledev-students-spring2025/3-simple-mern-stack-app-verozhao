import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
    const [aboutData, setAboutData] = useState(null)
    const [error, setError] = useState('')
    
    useEffect(() => {
        // fetch about data when component mounts
        const fetchAboutData = async () => {
            try {
                const response = await axios.get('http://localhost:5002/about')
                setAboutData(response.data)
            } catch (err) {
                setError('Failed to load about data')
                console.error('Error:', err)
            }
        }
        
        fetchAboutData()
    }, [])

    if (error) return <div className="About-container">{error}</div>
    if (!aboutData) return <div className="About-container">Loading...</div>

    return (
        <div className="About-container">
            <h1>About Us</h1>
            <img 
                src={aboutData.imageUrl}
                alt="Profile"
                className="About-image"
            />
            <div className="About-content">
                <div className="About-name">{aboutData.name}</div>
                <div className="About-bio">{aboutData.bio}</div>
            </div>
        </div>
    )
}

// make this component available to be imported into any other file
export default About