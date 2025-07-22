'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal with a slight delay for smooth animation
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleEmailClient = (url: string) => {
        // Open email client in a new tab/window
        window.open(url, '_blank');
        // Close the current tab after a short delay
        setTimeout(() => {
            window.close();
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
            
            {/* Modal */}
            <div className={`relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-md w-full mx-auto transform transition-all duration-500 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">Choose Your Email Client</h1>
                    <p className="text-gray-600">Select your preferred email application to get in touch with us</p>
                </div>
                
                {/* Email Options */}
                <div className="space-y-4">
                    {/* Gmail Option */}
                    <button 
                        onClick={() => handleEmailClient('https://mail.google.com/mail/?view=cm&fs=1&to=info@badgerstatesolutions.com&su=Consultation%20Request&body=Hello%20Badger%20State%20Solutions,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20business%20needs.%0D%0A%0D%0AThank%20you!')}
                        className="w-full flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white to-red-50/30 hover:from-red-50 hover:to-red-100/50 transition-all duration-300 group border-2 border-red-200/50 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/20 hover:scale-[1.02] glow-animation transform"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.273L12 8.91l6.545-4.816v-.273h3.819c.904 0 1.636.732 1.636 1.636z"/>
                            </svg>
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-bold text-gray-900 text-lg mb-1">Gmail</div>
                            <div className="text-gray-600 text-base">Open in Gmail web app</div>
                        </div>
                        <svg className="w-6 h-6 text-red-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    {/* Outlook Option */}
                    <button 
                        onClick={() => handleEmailClient('https://outlook.live.com/mail/0/deeplink/compose?to=info@badgerstatesolutions.com&subject=Consultation%20Request&body=Hello%20Badger%20State%20Solutions,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20business%20needs.%0D%0A%0D%0AThank%20you!')}
                        className="w-full flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white to-blue-50/30 hover:from-blue-50 hover:to-blue-100/50 transition-all duration-300 group border-2 border-blue-200/50 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] glow-animation transform"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.83 0-.43.1-.85.11-.41.33-.74.22-.32.57-.52.36-.2.85-.2t.87.2q.36.2.58.52.22.33.33.74.11.42.11.85zm-3.7-.05q0 .33.02.6.03.26.08.48.05.21.12.37.07.15.18.15.18 0 .31-.33.14-.34.21-.73.08-.4.08-.87 0-.47-.08-.87-.07-.39-.21-.73-.13-.33-.31-.33-.11 0-.18.15-.07.16-.12.37-.05.22-.08.48-.02.27-.02.6zm8.93-5.54v11.11L24 12.04zm-1.24 3.8q0-.45-.11-.87-.1-.41-.33-.74-.22-.33-.58-.52-.37.2-.87-.2t-.85.2q-.35.21-.57.55-.22.33-.33.75-.1.42-.1.83 0 .43.1.85.11.41.33.74.22.32.57.52.36.2.85.2t.87-.2q.36-.2.58-.52.22-.33.33-.74.11-.42.11-.85zm-3.7.05q0-.33.02-.6.03-.26.08-.48.05-.21.12-.37.07-.15.18-.15.18 0 .31.33.14.34.21.73.08.4.08.87 0 .47-.08.87-.07.39-.21.73-.13.33-.31.33-.11 0-.18-.15-.07-.16-.12-.37-.05-.22-.08-.48-.02-.27-.02-.6zM24 5.25v1.5h-9.94l-1.19-1.5H24zm-1.2 6.94q-.02-.32-.25-.56-.23-.25-.56-.25-.32 0-.55.25-.22.24-.22.56 0 .33.22.56.23.25.55.25.33 0 .56-.25.23-.23.25-.56z"/>
                            </svg>
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-bold text-gray-900 text-lg mb-1">Outlook</div>
                            <div className="text-gray-600 text-base">Open in Outlook web app</div>
                        </div>
                        <svg className="w-6 h-6 text-blue-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    {/* Yahoo Mail Option */}
                    <button 
                        onClick={() => handleEmailClient('https://compose.mail.yahoo.com/?to=info@badgerstatesolutions.com&subject=Consultation%20Request&body=Hello%20Badger%20State%20Solutions,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20business%20needs.%0D%0A%0D%0AThank%20you!')}
                        className="w-full flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white to-purple-50/30 hover:from-purple-50 hover:to-purple-100/50 transition-all duration-300 group border-2 border-purple-200/50 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] glow-animation transform"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 5.728-.896 5.728-.514 2.267-1.264 2.711-2.336 2.711H8.832c-1.072 0-1.822-.444-2.336-2.711 0 0-.727-3.87-.896-5.728-.024-.318.222-.576.54-.576h1.888c.318 0 .576.258.576.576v4.8c0 .318.258.576.576.576h.64c.318 0 .576-.258.576-.576v-4.8c0-.318.258-.576.576-.576h.896c.318 0 .576.258.576.576v4.8c0 .318.258.576.576.576h.64c.318 0 .576-.258.576-.576v-4.8c0-.318.258-.576.576-.576h1.888c.318 0 .564.258.54.576z"/>
                            </svg>
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-bold text-gray-900 text-lg mb-1">Yahoo Mail</div>
                            <div className="text-gray-600 text-base">Open in Yahoo Mail web app</div>
                        </div>
                        <svg className="w-6 h-6 text-purple-500 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    

                </div>
                
                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500">You can also reach us directly at</p>
                    <a href="mailto:info@badgerstatesolutions.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                        info@badgerstatesolutions.com
                    </a>
                </div>
            </div>
        </div>
    );
}