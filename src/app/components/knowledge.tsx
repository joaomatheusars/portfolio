import Image from "next/image";

export default function Knowledge() {
    return(
        <div className="text-white container mx-auto m-4 p-6 gap-7 flex flex-col items-center mt-56" id="knowledge">
            <div>
                <h2 className="font-bold text-2xl lg:text-3xl">Conhecimento</h2>
            </div>
            
            <div className="flex gap-8 w-full flex-wrap items-center justify-center">
                <div className="font-extrabold text-2xl flex flex-col items-center p-8 gap-6 border border-white rounded-md">
                    <div>
                        <h3>HTML</h3>
                    </div>
                    <div>
                        <Image src={'/html-5.png'} height={64} width={64} alt="asd"/> 
                    </div>
                </div>

                <div className="font-extrabold text-2xl flex flex-col items-center p-8 gap-6 border border-white rounded-md">
                    <div>
                        <h3>CSS</h3>
                    </div>
                    <div>
                        <Image src={'/css.png'} height={64} width={64} alt="asd"/> 
                    </div>
                </div>

                <div className="font-extrabold text-2xl flex flex-col items-center p-8 gap-6 border border-white rounded-md">
                    <div>
                        <h3>JS</h3>
                    </div>
                    <div>
                        <Image src={'/js.png'} height={64} width={64} alt="asd"/> 
                    </div>
                </div>

                <div className="font-extrabold text-2xl flex flex-col items-center p-8 gap-6 border border-white rounded-md">
                    <div>
                        <h3>Python</h3>
                    </div>
                    <div>
                        <Image src={'/python.png'} height={64} width={64} alt="asd"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}