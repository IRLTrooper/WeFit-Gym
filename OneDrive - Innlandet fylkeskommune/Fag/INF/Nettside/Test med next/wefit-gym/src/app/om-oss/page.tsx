const About = () => {
    return ( 
    <div className="min-h-screen bg-cover" style={{ backgroundImage: "url('/img/image.png')" }}>
        <div className="pt-24">
            <h3 className="text-white text-center text-9xl">Om Oss</h3>
            <div className="h-1 bg-white"></div>

            <div className="flex items-center justify-center">
                <p className="text-white text-center text-2xl max-w-xl py-4">WeFit Gym er et moderne treningssenter dedikert til å hjelpe deg med å oppnå dine treningsmål, enten du er nybegynner eller en erfaren atlet. Vårt mål er å tilby en helhetlig treningsopplevelse som passer alle typer medlemmer, med fokus på helse, velvære og fysisk styrke.</p>
            </div>

            <div className="flex items-center justify-center py-28 px-4">
                <p className="text-center max-w-2xl text-white text-2xl">
                    Hos <span className="font-bold">WeFit Gym</span> finner du et bredt spekter av treningsmuligheter, fra topp moderne styrke- og kondisjonsutstyr til gruppeklasser som yoga, spinning, HIIT, og mye mer. Vi tror på personlig tilpasset trening, og våre sertifiserte personlige trenere er tilgjengelige for å hjelpe deg med å lage en skreddersydd treningsplan som passer dine behov.
                </p>
            </div>
        </div>
    </div>
    )
}
 
export default About;