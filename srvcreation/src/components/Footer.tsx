import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-lg font-bold mb-4">SRVCreation</h3>
                        <p className="text-gray-400 max-w-xs">
                            Premium IPTV services with 4K content, delivering entertainment to your screens worldwide.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#features" className="text-gray-400 hover:text-white">Features</Link></li>
                            <li><Link href="#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                            <li><Link href="/player" className="text-gray-400 hover:text-white">Web Player</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-900 pt-8 text-center">
                    <p className="text-zinc-500">&copy; {new Date().getFullYear()} SRVCreation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
