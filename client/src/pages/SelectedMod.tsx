import Layout from "@/Layout"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import SlierBg from '@/assets/slitherbg.jpg'
import { Button } from "@/components/ui/button"

export default function SelectedMod() {

  const { gamemod } = useParams()
  useEffect(() => {
    if (gamemod) {
      console.log(gamemod)
    }
  }, [])
  return (
    <Layout>

      <div className="w-full  items-center mt-[20px] justify-center flex flex-col gap-[20px] sm:p-[0px] p-[20px]">
        <p className="w-[400px] ibm-mono sm:p-[0px] p-[20px]">Slither</p>
        <img src={SlierBg} className="w-[400px] h-[250px] object-cover rounded-lg" alt="" />
        <div className="ibm-mono text-sm flex items-center justify-between p-[20px] sm:p-[0px] w-[400px]">

          <p className=" flex items-center gap-[10px]"><span className="text-yellow-500 ">Created on</span>  04-03-2025</p>
          <p className=" flex items-center gap-[10px]"><span className="text-yellow-500">Users</span>4000</p>
        </div>

        <p className="text-sm text-gray-300 ibm-mono text-center max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit doloribus porro exercitationem sequi veniam accusamus nam, maxime amet ducimus itaque similique eaque laborum adipisci, libero soluta quam, incidunt dicta officia. Consequatur, sit esse nam nihil earum fugiat! Delectus, adipisci nesciunt est assumenda molestias eligendi maiores. Delectus voluptatem voluptate at minima dolores quisquam asperiores</p>
        <Button className="w-[400px]">
          Link
        </Button>
      </div>
    </Layout>
  )
}
