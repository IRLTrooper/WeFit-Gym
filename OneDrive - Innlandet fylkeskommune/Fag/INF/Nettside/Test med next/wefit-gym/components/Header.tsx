import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
    return(
        <header className="bg-blue-700 text-white py-6">
        <div className="flex justify-evenly">
            
            <div className="text-2xl font-bold">
                <h1><a href="Velkommen.html" >WeFit Gym</a></h1>
            </div>

           
            {/* <div className="md:hidden">
            <button id="menu-toggle" className="focus:outline-none">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div> */}

        
        <nav className="flex justify-evenly">
            <ul className="flex justify-evenly">
                <li><a href="/om-oss" className="hover:text-gray-400">Om oss</a></li>
                <li><a href="Medlemskap.html" className="hover:text-gray-400">Medlemskap</a></li>
                <li><a href="Book.html" className="hover:text-gray-400">Book time hos oss</a></li>
            </ul>
        </nav>

            
            <div className="hidden md:block">
            <SignedOut>
                <SignInButton mode="modal" signUpFallbackRedirectUrl="/">
                    <div className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">Logg inn</div>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
    </div>

    
    {/* <nav id="mobile-menu" className="hidden md:hidden bg-gray-800 bg-opacity-90 text-white">
        <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="Om-oss.html" className="hover:text-gray-400">Om oss</a></li>
            <li><a href="Medlemskap.html" className="hover:text-gray-400">Medlemskap</a></li>
            <li><a href="Book.html" className="hover:text-gray-400">Book time hos oss</a></li>
            <li>
                <SignedOut><SignInButton><div className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">Logg inn</div></SignInButton></SignedOut>
            </li>
        </ul>
    </nav> */}
    </header>
    );
};