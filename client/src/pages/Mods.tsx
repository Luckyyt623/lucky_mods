import Layout from "@/Layout"
import SlitherImg from '@/assets/slitherbg.jpg'
import MinecraftImg from '@/assets/minecraftbg.jpg'
import { Link } from "react-router-dom"

export default function Mods() {
  return (
    <Layout>

      <div className="w-full flex h-full flex-col items-center gap-[20px]   justify-center">
        <p className="uppercase anton text-4xl">select game</p>
        <div className="flex items-center justify-center w-full gap-[20px] w-full">

          <Link to={""}>
            <div className="w-[400px] h-[200px] bg-linear-to-l rounded-lg from-green-500 to-cyan-500 p-[3px]">

              <img src={SlitherImg} className="w-full h-full rounded-lg object-cover" alt="" />
            </div>
          </Link>

          <Link to={""}>
            <div className="w-[400px] h-[200px] bg-linear-to-l rounded-lg from-green-500 to-cyan-500 p-[3px]">
              <img src={MinecraftImg} className="w-[400px] h-[200px] rounded-lg object-cover" alt="" />
            </div>
          </Link>
        </div>

      </div>
    </Layout>
  )
}
