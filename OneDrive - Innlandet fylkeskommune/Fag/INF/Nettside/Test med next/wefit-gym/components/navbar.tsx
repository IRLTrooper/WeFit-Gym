import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navbar = () => {
    return ( 
        <nav className="p-4 bg-blue-700">
            <title>WeFit Gym</title>

            <div className="flex justify-between">
                <a href="/" className="text-2xl">WeFit Gym</a>

                <nav className="flex justify-center pt-2">
                    <ul className="flex gap-5">
                        <li><a href="/om-oss" className="hover:text-gray-400">Om oss</a></li>
                        <li><a href="/medlemskap" className="hover:text-gray-400">Medlemskap</a></li>
                        <li><a href="/book" className="hover:text-gray-400">Book time hos oss</a></li>
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
        </nav>
     );
}
 
export default navbar;