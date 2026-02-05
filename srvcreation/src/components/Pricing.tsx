import { Check } from 'lucide-react';

const tiers = [
    {
        name: '1 Month',
        price: 10,
        features: ['1 Connection', 'Standard Support', 'All Channels', 'VOD Library'],
        featured: false,
    },
    {
        name: '12 Months',
        price: 60,
        features: ['2 Connections', 'Premium Support', 'All Channels', '4K VOD Library', 'Anti-Freeze'],
        featured: true,
    },
    {
        name: 'Lifetime',
        price: 150,
        features: ['5 Connections', 'VIP Support', 'All Future Updates', 'Private Server Access'],
        featured: false,
    },
];

export default function Pricing() {
    return (
        <div id="pricing" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Simple Pricing
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-8 bg-zinc-900 border rounded-2xl flex flex-col ${tier.featured
                                    ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20 transform md:-translate-y-4'
                                    : 'border-zinc-800'
                                }`}
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                                <p className="flex items-baseline mt-4">
                                    <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                                    <span className="ml-1 text-xl text-gray-400">/period</span>
                                </p>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-300">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${tier.featured
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30'
                                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
