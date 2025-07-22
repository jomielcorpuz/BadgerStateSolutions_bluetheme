"use client";
import React, { useEffect, useState, useRef } from "react";
import {
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "@/components/ui/animatedcontent";
import { AuroraText } from "@/components/magicui/aurora-text";

const BadgerStateSolutions = () => {
    const [footerVisible, setFooterVisible] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!footerRef.current) return;
            const rect = footerRef.current.getBoundingClientRect();
            // If the footer is within 200px of the viewport bottom, trigger the effect
            setFooterVisible(rect.top < window.innerHeight - 200);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Modern Header */}
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300
                    ${footerVisible
                        ? "bg-blue-900/90 backdrop-blur-md shadow-md text-white border-b border-blue-800/20"
                        : "bg-white/80 backdrop-blur-md shadow-sm text-blue-900 border-b border-blue-100/30"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 md:py-5">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                                <Image
                                    src="logo.svg"
                                    alt="Badger State Solutions Logo"
                                    width={45}
                                    height={45}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <h1 className={`text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 ${footerVisible ? "text-white" : "text-blue-700"}`}>
                                    Badger State Solutions
                                </h1>
                            </div>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a
                                href="#about"
                                className={`font-medium transition-all duration-300 hover:text-blue-500 ${footerVisible ? "text-blue-100" : "text-blue-700"}`}
                            >
                                About
                            </a>
                            <a
                                href="#services"
                                className={`font-medium transition-all duration-300 hover:text-blue-500 ${footerVisible ? "text-blue-100" : "text-blue-700"}`}
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className={`font-medium transition-all duration-300 hover:text-blue-500 ${footerVisible ? "text-blue-100" : "text-blue-700"}`}
                            >
                                Contact
                            </a>
                            <button 
                                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 font-medium glow-animation"
                                onClick={() => {
                                    window.open('/contact', '_blank');
                                }}
                            >
                                Get Started
                            </button>
                        </nav>
                        <button className="md:hidden rounded-md p-2 text-blue-700 hover:bg-blue-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-blue-100/80 z-0"></div>
                <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-blue-600/15 rounded-full filter blur-3xl opacity-50 animate-subtle-float"></div>
                <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full filter blur-3xl opacity-40 animate-subtle-float animation-delay-2000"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-300/8 rounded-full filter blur-xl opacity-60 animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center">
                            <AnimatedContent
                                distance={40}
                                direction="vertical"
                                reverse={true}
                                initialOpacity={0}
                                animateOpacity
                                scale={1.0}
                                threshold={0.1}
                                enableScrollUp={true}
                            >
                                <div className="animate-fade-in flex justify-center mb-8">
                                    <div className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-blue-200/40 shadow-lg">
                                        <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
                                        <span className="text-sm font-semibold text-blue-800 tracking-wide">
                                            Trusted By Leading Businesses
                                        </span>
                                    </div>
                                </div>
                            </AnimatedContent>

                            <AnimatedContent
                                distance={40}
                                direction="vertical"
                                reverse={false}
                                initialOpacity={0}
                                enableScrollUp={true}
                                animateOpacity
                                scale={1.0}
                                threshold={0.1}
                            >
                                <div className="text-center mb-12">
                                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
                                        <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 bg-clip-text text-transparent block mb-2">Badger State</span>
                                        <AuroraText className="font-black block">Solutions</AuroraText>
                                    </h1>
                                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mt-8 mb-8 leading-relaxed max-w-4xl mx-auto">
                                        <AuroraText
                                            colors={["#1e3a8a", "#2563eb", "#3b82f6", "#0a2540", "#60a5fa"]}
                                            speed={1}
                                            className="font-medium"
                                        >
                                            Strategic Insights. Measurable Results.
                                        </AuroraText>
                                    </div>
                                </div>
                            </AnimatedContent>
                            
                            <AnimatedContent
                                distance={40}
                                direction="vertical"
                                reverse={false}
                                initialOpacity={0}
                                animateOpacity
                                scale={1.0}
                                threshold={0.3}
                                delay={130}
                                enableScrollUp={true}
                            >
                                <div className="text-center mb-12">
                                    <p className="text-xl md:text-2xl text-blue-700/80 max-w-4xl mx-auto leading-relaxed font-light">
                                        Partner with us to transform your business operations, drive sustainable growth, and achieve your strategic objectives with our data-driven consulting approach.
                                    </p>
                                </div>
                            </AnimatedContent>

                            <AnimatedContent
                                distance={40}
                                direction="vertical"
                                reverse={false}
                                initialOpacity={0}
                                animateOpacity
                                scale={1.0}
                                threshold={0.3}
                                delay={160}
                                enableScrollUp={true}
                            >
                                <div className="flex justify-center items-center">
                                    <div className="relative group">
                                        <button 
                                            className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-6 rounded-3xl text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-700 border border-blue-400/30 backdrop-blur-lg min-w-[320px] h-[80px] shadow-xl flex items-center justify-center pulse-glow-animation"
                                            onClick={() => {
                                                window.open('/contact', '_blank');
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 rounded-3xl"></div>
                                            <div className="relative z-10 flex items-center justify-center gap-4 w-full">
                                                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <span className="tracking-wide font-bold">Get In Touch</span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                        </button>
                                        

                                    </div>
                                </div>
                            </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
                                About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Us</span>
                            </h2>
                            <p className="text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed">
                                We are a team of experienced consultants dedicated to helping businesses achieve sustainable growth through strategic insights and data-driven solutions.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={100}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] h-full flex flex-col min-h-[280px]">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Data-Driven Insights</h3>
                                <p className="text-blue-700/80 leading-relaxed flex-grow">
                                    We leverage advanced analytics and market research to provide actionable insights that drive informed decision-making.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] h-full flex flex-col min-h-[280px]">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Strategic Excellence</h3>
                                <p className="text-blue-700/80 leading-relaxed flex-grow">
                                    Our proven methodologies and strategic frameworks help businesses optimize operations and achieve sustainable growth.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={300}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] h-full flex flex-col min-h-[280px]">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Client-Focused</h3>
                                <p className="text-blue-700/80 leading-relaxed flex-grow">
                                    We build lasting partnerships with our clients, providing personalized solutions that align with their unique business objectives.
                                </p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        enableScrollUp={true}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
                                Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Process</span>
                            </h2>
                            <p className="text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed">
                                Our proven methodology ensures consistent results and measurable outcomes for every client engagement.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={100}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] text-center h-full flex flex-col min-h-[240px]">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">Discovery</h3>
                                <p className="text-blue-700/80 text-sm leading-relaxed flex-grow">
                                    We analyze your current situation and identify key opportunities for improvement.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={200}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] text-center h-full flex flex-col min-h-[240px]">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">2</span>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">Strategy</h3>
                                <p className="text-blue-700/80 text-sm leading-relaxed flex-grow">
                                    We develop a comprehensive strategy tailored to your specific business needs.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={300}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] text-center h-full flex flex-col min-h-[240px]">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">3</span>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">Implementation</h3>
                                <p className="text-blue-700/80 text-sm leading-relaxed flex-grow">
                                    We work alongside your team to execute the strategy and ensure smooth implementation.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={400}
                            enableScrollUp={true}
                        >
                            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200/70 group hover:scale-[1.02] text-center h-full flex flex-col min-h-[240px]">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">4</span>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">Optimization</h3>
                                <p className="text-blue-700/80 text-sm leading-relaxed flex-grow">
                                    We continuously monitor and optimize performance to maximize results.
                                </p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.2}
                        delay={300}
                        enableScrollUp={true}
                    >
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                    Schedule a free consultation with our experts and discover how we can help transform your business.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <button 
                                        className="group relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-white text-blue-800 px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-sm glow-animation"
                                        onClick={() => {
                                            window.open('/contact', '_blank');
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                                        <div className="relative z-10 flex items-center justify-center gap-3">
                                            <div className="p-1.5 bg-blue-800/10 rounded-full backdrop-blur-sm group-hover:bg-blue-800/20 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="tracking-wide font-semibold">Schedule Consultation</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Footer */}
            <footer ref={footerRef} className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold text-blue-100 mb-2">Badger State Solutions</h3>
                            <p className="text-blue-200/80 font-light">Modern business consulting for the digital age</p>
                        </div>
                    </div>
                    <div className="border-t border-blue-700/50 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-base lg:text-lg text-blue-100/90 font-light tracking-wide mb-4 md:mb-0">
                                &copy; 2025 Badger State Solutions. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-sm text-blue-200/80 hover:text-white transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="text-sm text-blue-200/80 hover:text-white transition-colors duration-300">Terms of Service</a>
                                <a href="#" className="text-sm text-blue-200/80 hover:text-white transition-colors duration-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BadgerStateSolutions;