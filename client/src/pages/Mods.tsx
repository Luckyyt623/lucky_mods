import Layout from "@/Layout"
import SlitherImg from '@/assets/slitherbg.jpg'
import MinecraftImg from '@/assets/minecraftbg.jpg'
import { Link } from "react-router-dom"

export default function Mods() {
  return (
    <Layout>

      <div className="w-full flex h-full flex-col items-center gap-[20px]   justify-center">
           <h1 className="uppercase anton bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-yellow-500 tracking-wider text-3xl">Select game</h1>
        <div className="flex items-center justify-center gap-[20px] w-full">

          <Link to={"/game/slither"}>
            <div className="w-[400px] h-[200px] bg-linear-to-l rounded-lg from-green-500 to-cyan-500 p-[3px]">

              <img src={SlitherImg} className="w-full h-full rounded-lg object-cover" alt="" />
            </div>
          </Link>

          <Link to={"/game/minecraft"}>
            <div className="w-[400px] h-[200px] bg-linear-to-l rounded-lg from-green-500 to-cyan-500 p-[3px]">
              <img src={MinecraftImg} className="w-[400px] h-[200px] rounded-lg object-cover" alt="" />
            </div>
          </Link>
        </div>

      </div>
    </Layout>
  )
}
