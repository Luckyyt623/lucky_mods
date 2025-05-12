import TotalUsers from "@/components/site/TotalUsers"


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

export default function SelectedMod({ vals }: { vals: Vals }) {



  return (


    <div className="w-[100%] items-center md:w-full    mt-[20px] justify-center flex flex-col gap-[20px] sm:p-[0px] ">


      <p className="w-[400px] ibm-mono  ">{vals.modname}</p>
      <img src={vals.modimage} className="w-[400px] h-[250px] object-cover rounded-lg" alt="" />
      <div className="ibm-mono text-sm flex items-center justify-between p-[20px] sm:p-[0px] w-[400px]">

        <p className=" flex items-center gap-[10px]"><span className="text-yellow-500 ">Created on</span> {vals.created_at}</p>
        <div className="w-max">

          <TotalUsers users={vals.rating} />
        </div>
      </div>

      <p className="text-sm text-gray-300 ibm-mono text-center max-w-[400px]">{vals.moddesc}</p>
      <a href={vals.modurl} target="__blank" className="w-[400px] p-[10px] rounded-lg text-white ibm-mono flex items-center justify-center tracking-wider bg-gradient-to-l from-cyan-500 to-green-500">
        Link
      </a>
    </div>

  )
}
