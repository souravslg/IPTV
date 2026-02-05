"use client";

import { useState } from 'react';
import { Play, Film, Tv, Settings, Search, LogOut } from 'lucide-react';

export default function WebPlayer() {
    const [streamUrl, setStreamUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Live TV');

    const handlePlay = (e: React.FormEvent) => {
        e.preventDefault();
        if (streamUrl) setIsPlaying(true);
    };

    return (
        <div className="flex h-[calc(100vh-64px)] mt-16 bg-zinc-950 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col hidden md:flex">
                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                </div>

                <nav className="flex-1 px-2 space-y-1">
                    {['Live TV', 'Movies', 'Series'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveCategory(item)}
                            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeCategory === item
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-400 hover:bg-zinc-800 hover:text-white'
                                }`}
                        >
                            {item === 'Live TV' && <Tv className="mr-3 h-5 w-5" />}
                            {item === 'Movies' && <Film className="mr-3 h-5 w-5" />}
                            {item === 'Series' && <Play className="mr-3 h-5 w-5" />}
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-zinc-800 space-y-1">
                    <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-400 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
                        <Settings className="mr-3 h-5 w-5" />
                        Settings
                    </button>
                    <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                        <LogOut className="mr-3 h-5 w-5" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                <div className="flex-1 bg-black flex items-center justify-center relative">
                    {!isPlaying ? (
                        <div className="text-center p-8 max-w-md w-full">
                            <div className="mb-6 mx-auto h-20 w-20 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Play className="h-10 w-10 text-zinc-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">No Stream Loaded</h2>
                            <p className="text-gray-400 mb-8">Enter a valid stream URL (M3U8/MP4) to start watching.</p>

                            <form onSubmit={handlePlay} className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="https://example.com/stream.m3u8"
                                    className="flex-1 bg-zinc-800 border-zinc-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={streamUrl}
                                    onChange={(e) => setStreamUrl(e.target.value)}
                                />
                                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium">
                                    Play
                                </button>
                            </form>
                            <p className="mt-4 text-xs text-zinc-600">
                                Supports basic HLS and MP4 streams. For full functional demo, use a valid URL.
                            </p>
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col">
                            {/* Basic HTML5 Video Player Wrapper */}
                            <video
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                src={streamUrl}
                            >
                                Your browser does not support the video tag.
                            </video>
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded text-sm backdrop-blur-md"
                            >
                                Close Player
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
