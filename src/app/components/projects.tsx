'use client';
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

export default function Projects() {
    return (
      <div className="text-white container mx-auto m-4 p-6 gap-7 text-base flex flex-col items-center mt-56">
            <div>
                <h2 className='font-bold text-2xl lg:text-3xl'>Projetos</h2>
            </div>
            <div className='flex gap-8 w-full flex-wrap items-center justify-center'>
                <div className='flex flex-col border-[0.5px] border-Blue_ rounded-lg py-8 px-4 sm:w-96'>
                    <div className="mb-8 flex justify-center items-center">
                        <Image src={'/autehnticationLogin.png'} height={350} width={350}  style = {{objectFit: "cover",}} alt='asd'/>
                    </div>
                    <div className='font-bold text-xl mt-2 mb-2'>
                        <h2>System Authentication</h2>
                    </div>
                    <div className='font-extralight mb-2'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vel inventore nostrum dolore nemo sit maiores sint corrupti est quis perspiciatis itaque in adipisci nesciunt quam, voluptatem, doloremque at iusto.</p>
                    </div>
                    <div className='flex gap-4 mt-4 justify-end'>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            <Image src={'/github.png'} height={24} width={24} alt="github"/>
                        </button>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            Acessar
                        </button>
                    </div>
                </div>

                <div className='flex flex-col border-[0.5px] border-Blue_ rounded-lg py-8 px-4 sm:w-96'>
                    <div className="mb-8">
                        <Image src={'/autehnticationLogin.png'} height={350} width={350}  style = {{objectFit: "cover",}} alt='asd'/>
                    </div>
                    <div className='font-bold text-xl mt-2 mb-2'>
                        <h2>System Authentication</h2>
                    </div>
                    <div className='font-extralight mb-2'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vel inventore nostrum dolore nemo sit maiores sint corrupti est quis perspiciatis itaque in adipisci nesciunt quam, voluptatem, doloremque at iusto.</p>
                    </div>
                    <div className='flex gap-4 mt-4 justify-end'>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            <Image src={'/github.png'} height={24} width={24} alt="github"/>
                        </button>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            Acessar
                        </button>
                    </div>
                </div>

                <div className='flex flex-col border-[0.5px] border-Blue_ rounded-lg py-8 px-4 sm:w-96'>
                    <div className="mb-8">
                        <Image src={'/autehnticationLogin.png'} height={350} width={350}  style = {{objectFit: "cover",}} alt='asd'/>
                    </div>
                    <div className='font-bold text-xl mt-2 mb-2'>
                        <h2>System Authentication</h2>
                    </div>
                    <div className='font-extralight mb-2'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vel inventore nostrum dolore nemo sit maiores sint corrupti est quis perspiciatis itaque in adipisci nesciunt quam, voluptatem, doloremque at iusto.</p>
                    </div>
                    <div className='flex gap-4 mt-4 justify-end'>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            <Image src={'/github.png'} height={24} width={24} alt="github"/>
                        </button>
                        <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                            Acessar
                        </button>
                    </div>
                </div>
                
            </div>
      </div>
    )
}