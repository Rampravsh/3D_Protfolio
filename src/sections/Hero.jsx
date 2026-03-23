import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Animate the text and buttons with a staggered fade-in up effect
        gsap.fromTo(
            containerRef.current.children,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.2
            }
        )
    }, { scope: containerRef })

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10 w-full h-full'>
                <img src="/images/bg.png" alt="background" className="w-full h-full object-cover" />
            </div>
            <div className='hero-layout relative z-20 flex flex-col lg:flex-row w-full'>
                {/* LEFT: HERO CONTENT */}
                <header className='flex flex-col justify-center w-full lg:w-1/2 md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text pt-24 md:pt-32' ref={containerRef}>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6'>
                                Crafting <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500'>Immersive</span> 3D Worlds
                            </h1>
                            <p className='text-lg sm:text-xl text-gray-400 max-w-lg mb-8 leading-relaxed font-light'>
                                Hi, I'm a creative developer with a passion for blending code and creativity. I build interactive web experiences that captivate users, pushing the boundaries of digital artistry and performance.
                            </p>
                            <div className='flex flex-wrap gap-4 pointer-events-auto'>
                                <button className='px-8 py-3 md:py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg shadow-white/10'>
                                    Explore My Work
                                </button>
                                <button className='px-8 py-3 md:py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm'>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                {/* RIGHT: HERO 3D MODEL */}
                <div className='hero-right w-full lg:w-1/2 relative'></div>
            </div>
        </section>
    )
}

export default Hero