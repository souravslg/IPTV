import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-700/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-700/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Entertainment</span>
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Access thousands of channels and VOD content in premium 4K quality.
                    Buffer-free streaming on all your devices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#pricing"
                        className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/player"
                        className="px-8 py-4 border border-white/20 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all"
                    >
                        Open Web Player
                    </Link>
                </div>

                {/* Quick stats/trust indicators */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
                    <div>
                        <div className="text-3xl font-bold text-white">10k+</div>
                        <div className="text-sm">Channels</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">99.9%</div>
                        <div className="text-sm">Uptime</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">4K</div>
                        <div className="text-sm">Quality</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="text-sm">Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
