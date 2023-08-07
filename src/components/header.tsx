export default function Header() {
    return(
        <div className="flex container mx-auto text-white items-center">
            <div className="container mx-auto fixed top-0 left-0 right-0 flex w-full justify-between p-4 border-b-[0.5px] bg-bg-black">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="font-bold text-xl">[João Matheus]</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                    <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                    <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                </div>
            </div>  
            
        </div>
    )
}