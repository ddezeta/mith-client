import Image from 'next/image';


export default function Portfolio() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-600">Your connected ad accounts and performance metrics will appear here.</p>
            <div className="grid grid-cols-3 gap-1">
                <Image src="/dz_content/djspike.png" alt="DJ spike" width={500} height={300}/>
                <Image src="/dz_content/photo1.jpg" alt="DJ spike" width={500} height={300}/>
                <Image src="/dz_content/post1.jpg" alt="DJ spike" width={500} height={300}/>

                <Image src="/dz_content/post2.jpg" alt="DJ spike" width={500} height={300}/>
                <Image src="/dz_content/post3.jpg" alt="DJ spike" width={500} height={300}/>
                <Image src="/dz_content/lonsovilla_still_fire1.png" alt="DJ spike" width={500} height={300}/>
            </div>
        </div>
    );
}