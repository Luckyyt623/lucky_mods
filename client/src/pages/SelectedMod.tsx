import TotalUsers from "@/components/site/TotalUsers"
import { X } from 'lucide-react';

interface Vals {
  id: number,
  modname: string,
  modurl: string,
  modimage: string,
  moddesc: string,
  rating: number,
  modtype: string,
  modgametype: string,
  created_at: string,
}

export default function SelectedMod({  vals , HandleClose = () => {} }: {  vals: Vals , HandleClose: () => void }) {

  const FunctionHandler = () => {
    console.log("working!" )
    HandleClose()
  }

  return (


    <div   className="w-full relative  items-center mt-[20px] justify-center flex flex-col gap-[20px] sm:p-[0px] p-[20px]">
      
      <button onClick={() => FunctionHandler()} className="absolute right-[-20px] top-[-20px] w-[40px] h-[40px] flex items-center justify-center rounded-full border border-white"><X/></button>
      <p className="w-[400px] ibm-mono sm:p-[0px] p-[20px]">{vals.modname}</p>
      <img src={vals.modimage} className="w-[400px] h-[250px] object-cover rounded-lg" alt="" />
      <div className="ibm-mono text-sm flex items-center justify-between p-[20px] sm:p-[0px] w-[400px]">

        <p className=" flex items-center gap-[10px]"><span className="text-yellow-500 ">Created on</span> {vals.created_at}</p>
        <div className="w-max">

          <TotalUsers users={vals.rating}/>
        </div>
      </div>

      <p className="text-sm text-gray-300 ibm-mono text-center max-w-[400px]">{vals.moddesc}</p>
      <a href={vals.modurl} target="__blank" className="w-[400px] p-[10px] rounded-lg text-white ibm-mono flex items-center justify-center tracking-wider bg-gradient-to-l from-cyan-500 to-green-500">
        Link
      </a>
    </div>

  )
}
