import { Star } from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-amber-400 mb-4">Sonayi Safari Lodge and Campsite</h3>
                        <p className="text-gray-400 mb-4">
                            Where luxury meets paradise. Creating unforgettable memories.
                        </p>
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">3-Star Resort</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="#rooms" className="hover:text-white">
                                    Rooms & Suites
                                </Link>
                            </li>
                            <li>
                                <Link href="#amenities" className="hover:text-white">
                                    Amenities
                                </Link>
                            </li>
                            <li>
                                <Link href="#dining" className="hover:text-white">
                                    Dining
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white">
                                     Room Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Restaurant and Bar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Culture Tour
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                Safari
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>+255742446107</p>
                            <p>sonayilodge@gmail.com</p>
                            <p>Karatu Eyasi, Tanzania</p>
                            <p>Sonayi Safari Lodge and Campsite</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sonayi Safari Lodge and Campsite. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}