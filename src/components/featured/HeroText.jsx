"use client"
import TypewriterComponent from 'typewriter-effect'

const HeroText = () => {
    return (
        <TypewriterComponent
            options={{
                strings: [
                    "Write Your Blog.",
                    "Log Your Life.",
                    "Share Your Experience.",
                    "Display Your Fashion.",
                    "Explore New Things.",
                ],
                autoStart: true,
                loop: true
            }} />
    );
}

export default HeroText;