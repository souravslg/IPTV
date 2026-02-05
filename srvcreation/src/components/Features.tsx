import { Zap, Monitor, Tv, Shield } from 'lucide-react';

const features = [
    {
        name: '4K Ultra HD Quality',
        description: 'Experience crystal clear picture quality with our premium 4K streams.',
        icon: Tv,
    },
    {
        name: 'Anti-Freeze Technology',
        description: '99.9% uptime guarantee with our advanced load balancing servers.',
        icon: Zap,
    },
    {
        name: 'Multi-Device Support',
        description: 'Watch on your TV, Computer, Tablet, or Smartphone seamlessly.',
        icon: Monitor,
    },
    {
        name: 'Secure & Private',
        description: 'Your viewing history and data are completely anonymous and encrypted.',
        icon: Shield,
    },
];

export default function Features() {
    return (
        <div id="features" className="py-24 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Why Choose SRVCreation?
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        We provide the most stable and high-quality IPTV service in the market.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative group p-6 bg-zinc-800 rounded-xl hover:bg-zinc-750 transition-all border border-zinc-700 hover:border-indigo-500/50">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                            <div className="relative">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500/10 text-indigo-400 mb-5">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                <p className="mt-2 text-base text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
