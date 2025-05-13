
import React, { useState } from 'react'

interface Mod_data {

        id: number,
        modname: string,
        modurl: string,
        modimage: string,
        moddesc: string,
        rating: number,
        modgametype: string,
        created_at: string,

}


export default function UpdateMod({ SetSelectedMod, SelectedData, setUpdateState }: { setUpdateState: React.Dispatch<boolean>, SelectedData: Mod_data, SetSelectedMod: React.Dispatch<Mod_data> }) {

    const [Name, setName] = useState<string>(SelectedData.modname)
    const [URL, setURL] = useState<string>(SelectedData.modurl)
    const [Desc, setDesc] = useState<string>(SelectedData.moddesc)
    const [Image, setImage] = useState<string >(SelectedData.modimage)
    const [Game, setGame] = useState<string>(SelectedData.modgametype)

    const HandleChange = () => {
        SetSelectedMod({created_at: SelectedData.created_at , id: SelectedData.id , rating: SelectedData.rating,  moddesc: Desc, modname: Name, modurl: URL, modgametype: Game, modimage: Image })
        setUpdateState(false)
    }


    const HandleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };


    return (



        <div className="w-[500px] h-max">
            <div className="w-[100%] items-center md:w-full    mt-[20px] justify-center flex flex-col gap-[10px] sm:p-[0px] ">


                <label htmlFor="modname" className='w-[400px] ibm-mono text-cyan-500'>Name</label>
                <input onChange={(e) => setName(e.target.value)} id='modname' className="w-[400px] ibm-mono p-[5px]" value={Name} />
                <div className='relative w-[400px] h-[150px]'>
                    <input onChange={(e) => HandleImage(e)} type="file" className='absolute w-full h-full opacity-0' />
                    <img src={Image} className="w-full h-full object-cover rounded-lg" alt="" />
                </div>

                <label htmlFor="modname" className='w-[400px] ibm-mono text-cyan-500'>Game</label>

                <select onChange={(e) => setGame(e.target.value)} name="game" id="game" className='w-[400px]' value={Game}>
                    <option value="Slither.io">Slither</option>
                    <option value="Minecraft">Minecraft</option>
                </select>

                <label htmlFor="modurl" className='w-[400px] ibm-mono text-cyan-500'>URL</label>
                <input onChange={(e) => setURL(e.target.value)} id='modurl' className="w-[400px] ibm-mono p-[5px]" value={URL} />



                <label htmlFor="moddesc" className='w-[400px] ibm-mono text-cyan-500'>Description</label>
                <textarea onChange={(e) => setDesc(e.target.value)} id='moddesc' className="w-[400px] ibm-mono p-[5px]" value={Desc} />

                <div className='flex items-center w-[400px] gap-[10px]'>

                    <button onClick={() => HandleChange()} className="cursor-pointer w-[50%] p-[10px] rounded-lg text-white ibm-mono flex items-center justify-center tracking-wider bg-gradient-to-l from-green-500 to-green-600">
                        Update
                    </button>

                    <button onClick={() => setUpdateState(false)} className="cursor-pointer w-[50%] p-[10px] rounded-lg text-white ibm-mono flex items-center justify-center tracking-wider bg-gradient-to-l from-red-500 to-red-600">
                        Cancel
                    </button>

                </div>
            </div>

        </div>
    )
}
