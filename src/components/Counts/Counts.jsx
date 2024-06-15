"use client"
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { BsEmojiSmile, BsJournalRichtext, BsGlobe } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import './Counts.css'

const Counts = () => {

    const [startCount, setStartCount] = useState(false)
    const countRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        if (countRef.current) {
            observer.observe(countRef.current)
        }
        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current)
            }
        }
    }, [])

    return (
        <section className='counts'>
            <div className='counts-container'>

                <div className="row-right">
                    <img src="	https://akeshya.com/assets/img/counts-img.svg" alt="" />
                </div>
              
                <div className="right-container">
                    <div className="rows">
                    <div className="boxes">
                            <div className="div-emoji"><BsEmojiSmile className='emoji' /></div>
                            <span ref={countRef}>
                                {startCount && <CountUp start={0} end={3835039} duration={2} />}
                            </span>
                            <p><strong>Organic Reach (Global)</strong></p>
                        </div>
                        <div className="boxes">
                            <div className="div-emoji emoji2"><BsJournalRichtext className='emoji' /></div>
                            <span>
                                {startCount && <CountUp start={0} end={85} duration={2} />}

                            </span>
                            <p><strong>Campaigns</strong></p>
                        </div>
                    </div>

                    <div className="rows">
                    <div className="boxes">
                            <div className="div-emoji"><IoMdTime className='emoji' /></div>
                            <span>
                                {startCount && <CountUp start={0} end={14081} duration={2} />}

                            </span>
                            <p><strong>Watch Hours (Asia)</strong></p>
                        </div>
                        <div className="boxes">
                            <div className="div-emoji"><BsGlobe className='emoji' /></div>
                            <span>
                                {startCount && <CountUp start={0} end={17} duration={2} />}
                            </span>
                            <p>
                                <strong>Excellent CTR % (Asia)
                                </strong> </p>
                        </div>
                        </div>
                </div>
            </div>

        </section>
    )
}

export default Counts
