import { Link } from "react-router-dom";
import { servicesOffer } from "../data/navData";


const Service = () => {
    return (
        <div
            className="relative pt-24 bg-white"
            style={{
                backgroundImage:
                    "url('assets/img/bg_services.png')",
                backgroundSize: "cover",

            }}
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow text-lg mb-3">
                        Our Services
                    </button>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Best Destination To Get Your Own{" "}
                        <span className="text-blue-600">Application</span> Developed
                    </h2>
                </div>

                {/* Horizontal Scroll Cards */}
               < div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-100">
                    <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 py-4 min-w-[100%]">
                        {servicesOffer.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 hover:bg-white transition rounded-2xl shadow p-6 py-8 flex-shrink-0 w-[90%] sm:w-[50%] md:w-[35%] lg:w-[28%] xl:w-[22%] min-h-[320px] text-center"
                            >
                                <img
                                    src={service.img}
                                    alt="img"
                                    className="w-20 h-20 mb-4 mx-auto"
                                />
                                <h5 className="text-lg font-semibold mb-2">
                                        {service.title}
                                </h5>
                                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
