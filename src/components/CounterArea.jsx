import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const CounterArea = () => {
    return (
        <div className="flex justify-center items-center py-12">
            <div
                className="w-[90%] rounded-xl text-center px-6 py-16 relative overflow-hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(to top left, rgba(98, 0, 234, 0.85), rgba(0, 176, 255, 0.85)),
                        url('../assets/img/bg_counter.jpg')
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                }}
            >
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    We develop strategic software solutions for businesses.
                </h2>

                {/* Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                    {/* Counter 1 */}
                    <div>
                        <h3 className="text-4xl text-cyan-300 font-bold mb-1">
                            <TrackVisibility once>
                                {({ isVisible }) =>
                                    isVisible && <CountUp delay={0} start={0} end={2003} />
                                }
                            </TrackVisibility>
                        </h3>
                        <p className="text-sm">Year of establishment</p>
                    </div>

                    {/* Counter 2 */}
                    <div>
                        <h3 className="text-4xl text-cyan-300 font-bold mb-1">
                            <TrackVisibility once>
                                {({ isVisible }) =>
                                    isVisible && <span>
                                        <CountUp delay={0} start={0} end={25} /> k+ </span>

                                }
                            </TrackVisibility>

                        </h3>
                        <p className="text-sm">of customers worldwide</p>
                    </div>

                    {/* Counter 3 */}
                    <div>
                        <h3 className="text-4xl text-cyan-300 font-bold mb-1">
                            <TrackVisibility once>
                                {({ isVisible }) =>
                                    isVisible &&
                                    <span>
                                        <CountUp delay={0} start={0} end={14} />+</span>
                                }
                            </TrackVisibility>

                        </h3>
                        <p className="text-sm">Countries with active client base</p>
                    </div>

                    {/* Counter 4 */}
                    <div>
                        <h3 className="text-4xl text-cyan-300 font-bold mb-1">
                            <TrackVisibility once>
                                {({ isVisible }) =>
                                    isVisible && <CountUp delay={0} start={0} end={5} />
                                }
                            </TrackVisibility>
                        </h3>
                        <p className="text-sm">Customer rating</p>
                    </div>
                </div>

                {/* CTA Text */}
                <p className="mt-8 text-white text-sm md:text-base">
                    You have better things to do than worry about IT for your small business.{" "}
                    <a href="#contact" className="text-white underline font-semibold hover:text-cyan-300">
                        Let’s Discuss about Project.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default CounterArea;
