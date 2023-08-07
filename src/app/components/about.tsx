import Image from "next/image";

export default function About() {
    return (
      <div className="text-white container mx-auto m-4 p-6 text-base gap-4 flex flex-col justify-around mt-14">
        <div className="flex flex-col justify-center items-center gap-4 mb-7">
          <h2 className="font-bold text-2xl lg:text-3xl">Sobre Mim</h2>
        </div>
        <div className="flex gap-6 justify-between w-full">
          <div className="w-full flex max-md:flex-wrap gap-8 justify-center">
            <div>
              <Image className="rounded-md" src={'/eu.jpg'} height={300} width={300} alt="asd"/>
              <div className="flex justify-start gap-3 mt-8">
                <button className="p-2 border-white border rounded-full w-24">Contato</button>
                <button className="p-2 border-white border rounded-full w-24">CV</button>
              </div>
            </div>            
            <p className="font-light w-[50%] max-md:w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum est, et dolores excepturi doloremque vitae, dolorum eius omnis dolor rem, possimus nemo deleniti? Obcaecati quam saepe in quasi similique fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero aliquam laborum suscipit rem modi sint optio, sunt qui earum asperiores ea repellat sit minus eius, veritatis facere dolore harum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit animi doloremque, repellat laboriosam laborum earum, molestiae quas, voluptatum sapiente cum mollitia nam eligendi fugiat! Dignissimos ab nulla et. Maxime, nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt obcaecati rerum voluptatem architecto praesentium quod, omnis eos est, ullam pariatur amet facere, dicta impedit dolor quos eveniet quisquam ipsum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam non omnis neque, nostrum dignissimos eos repellat autem nulla architecto soluta ut laboriosam perferendis cum odio cupiditate ex. Dolorum, at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet libero consequatur animi mollitia maxime, molestias quasi vero enim maiores totam voluptas ab nesciunt eos cumque quidem placeat cum dignissimos.</p>
          </div>
        </div>

       
      </div>
    )
}