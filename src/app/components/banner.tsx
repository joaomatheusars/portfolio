import Image from "next/image";

export default function Banner() {
    return (
      <div className="text-white container mx-auto m-4 p-6 text-base flex items-center justify-around mt-14">
        <div className="font-bold text-3xl lg:text-5xl flex flex-col gap-4">
          <h3 className="text-sm lg:text-2xl">Oi,</h3>
          <div>
            <h2>Eu me chamo <span className="text-Blue_ font-bold">João Matheus</span></h2>
            <h2>Desenvolvedor Front-end.</h2>
          </div>
          <p className="text-base font-extralight lg:w-[80%]">Aqui você encontrar alguns projetos meus que vou colocando a media que vou aprendendo algo.</p>
          <div className="flex justify-end p-4 gap-2 mt-4 text-base ">
            <a href="https://github.com/joaomatheusars">
              <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                <Image src={'/github.png'} height={24} width={24} alt="github"/>
              </button>
            </a>
            
            <a href="https://www.linkedin.com/in/joao-rodrigues-294238211/">
              <button className="p-2 border-white border rounded-full w-24 flex justify-center items-center">
                <Image src={'/linkedin.png'} height={20} width={20} alt="linkedin"/>
              </button>
            </a>
            
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={'/programmer1.png'} height={800} width={800} alt="asd"/>          
        </div>
      </div>
    )
}