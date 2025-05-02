import Layout from "@/Layout"
import Carousel from "@/components/site/Carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {

  let slither_cards = [
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 21781,
      "image": "https://i.ytimg.com/vi/9IoKiAF8jGc/maxresdefault.jpg"
    },
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 22300,
      "image": "https://i.ytimg.com/vi/9IoKiAF8jGc/maxresdefault.jpg"
    },
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 1000,
      "image": "https://i.ytimg.com/vi/9IoKiAF8jGc/maxresdefault.jpg"
    }
  ]

  let Minecrft_mods = [
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 21781,
      "image": "https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?q=90&w=480&h=270"
    },
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 22300,
      "image": "https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?q=90&w=480&h=270"
    },
    {
      "name": "slither mod3",
      "desc": "This is best mod!",
      "rating": 1000,
      "image": "https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?q=90&w=480&h=270"
    }
  ]


  return (
    <Layout>
      <div className="flex w-full h-[100%] flex-col gap-[30px]">

        <Carousel />


        <div className='w-full  flex-col gap-[40px] items-center justify-center flex '>
          <h1 className="uppercase anton bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-yellow-500 tracking-wider text-3xl">Slither.io mods</h1>
          <div className="flex  text-white items-center space-x-4 text-sm">
            <Tabs defaultValue="New" className="w-full  flex flex-col gap-[20px] items-center justify-center">
              <TabsList className="bg-black ">
                <TabsTrigger className="w-[200px]" value="New">New</TabsTrigger>
                <TabsTrigger className="w-[200px]" value="Popular">Popular</TabsTrigger>
              </TabsList>
              <TabsContent value="New" className="flex gap-[20px] items-center">
                {slither_cards.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-purple-500 to-red-500 ">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader>
                        <CardTitle>{value.name}</CardTitle>
                        <CardDescription>{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter>
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}


              </TabsContent>
              <TabsContent value="Popular">
                {slither_cards.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-purple-500 to-red-500 ">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader>
                        <CardTitle>{value.name}</CardTitle>
                        <CardDescription>{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter>
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}

              </TabsContent>
            </Tabs>


          </div>

        </div>


        <div className='w-full  flex-col gap-[40px] items-center justify-center flex '>
          <h1 className="uppercase anton bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-yellow-500 tracking-wider text-3xl">minecrft mods</h1>
          <div className="flex  text-white items-center space-x-4 text-sm">
            <Tabs defaultValue="New" className="w-full  flex flex-col gap-[20px] items-center justify-center">
              <TabsList className="bg-black ">
                <TabsTrigger className="w-[200px]" value="New">New</TabsTrigger>
                <TabsTrigger className="w-[200px]" value="Popular">Popular</TabsTrigger>
              </TabsList>
              <TabsContent value="New" className="flex gap-[20px] items-center">
                {Minecrft_mods.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-green-500 to-cyan-500 ">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader>
                        <CardTitle>{value.name}</CardTitle>
                        <CardDescription>{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter>
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}


              </TabsContent>
              <TabsContent value="Popular">
                {Minecrft_mods.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-purple-500 to-red-500 ">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader>
                        <CardTitle>{value.name}</CardTitle>
                        <CardDescription>{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter>
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}

              </TabsContent>
            </Tabs>


          </div>

        </div>

     
      </div>

    </Layout>
  )
}
