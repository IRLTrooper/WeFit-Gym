const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
            <h2 className="text-lg font-semibold">WeFit Gym</h2>
            <p className="text-sm">Tren smartere, lev bedre</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-4">
            <a href="Om-oss.html" className="hover:text-pink-500">Om oss</a>
            <a href="Medlemskap.html" className="hover:text-pink-500">Medlemskap</a>
            <a href="#" className="hover:text-pink-500">Kontakt oss</a>
            <a href="#" className="hover:text-pink-500">Personvern</a>
            </div>
    
            <div className="text-sm">
            &copy; 2024 WeFit Gym. Alle rettigheter reservert.
            </div>
        </div>
        </footer>
     );
}
 
export default Footer;