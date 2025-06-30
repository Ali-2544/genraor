"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Marketing Manager",
        text: "GENROAR helped us boost our social engagement by over 300%. It's fast, reliable, and simple to use!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Bob Smith",
        role: "Content Creator",
        text: "I love how GENROAR simplifies scheduling and analytics. The AI suggestions are spot-on!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Carla Gomez",
        role: "Brand Strategist",
        text: "Managing multiple brands is now a breeze. And the support team? Absolutely top-notch.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 flex flex-row items-center">
            <div className="flex flex-col mr-[30px] text-left">
                <h2 className=" text-left text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
                <p className="text-left text-lg text-gray-600 text-center max-w-2xl mb-12">
                    Discover how GENROAR is helping brands and creators thrive with smarter social media tools.
                </p>

            </div>
            <div className="relative w-full max-w-3xl">
                <Carousel>
                    <CarouselContent className="flex gap-6 px-4 md:px-0">
                        {testimonials.map((testimonial, idx) => (
                            <CarouselItem key={idx} className="min-w-full md:min-w-[80%] lg:min-w-[70%]">
                                <div className="bg-gray-50 rounded-2xl shadow-md px-8 py-10 text-center flex flex-col items-center transition-all duration-300">
                                    <Quote className="w-10 h-10 text-primary mb-4" />
                                    <p className="text-lg text-gray-700 italic max-w-xl mb-6">"{testimonial.text}"</p>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mb-2"
                                    />
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    );
};

export default Testimonials;
