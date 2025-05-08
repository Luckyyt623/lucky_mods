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
                        <CardTitle className="ibm-mono">{value.name}</CardTitle>
                        <CardDescription className="ibm-mono">{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter className="ibm-mono">
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}


              </TabsContent>
              <TabsContent value="Popular" className="flex gap-[20px] items-center">
                {slither_cards.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-purple-500 to-red-500 ">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader >
                        <CardTitle className="ibm-mono">{value.name}</CardTitle>
                        <CardDescription className="ibm-mono">{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter className="ibm-mono">
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
                        <CardTitle className="ibm-mono">{value.name}</CardTitle>
                        <CardDescription className="ibm-mono">{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter className="ibm-mono">
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}


              </TabsContent>
              <TabsContent value="Popular" className="flex gap-[20px] items-center">
                {Minecrft_mods.map((value, index) => (
                  <div key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-green-500 to-cyan-500">

                    <Card className="bg-black  w-[350px]">

                      <CardHeader>
                        <CardTitle className="ibm-mono">{value.name}</CardTitle>
                        <CardDescription className="ibm-mono">{value.desc}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <img className="object-cover w-full h-[140px] rounded-lg" src={value.image} alt="" />
                      </CardContent>
                      <CardFooter className="ibm-mono">
                        {value.rating}
                      </CardFooter>
                    </Card>
                  </div>
                ))}

              </TabsContent>
            </Tabs>


          </div>

        </div>


        <section id="about" className="py-16 bg-gradient-to-b  flex justify-center items-center from-gray-900 to-black w-full">
          <div className="container w-full">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl bg-linear-to-l bg-clip-text text-transparent anton uppercase md:text-4xl font-bold mb-6 from-yellow-500 to-cyan-500 ">
                About <span className="bg-linear-to-l bg-clip-text text-transparent from-red-500 to-cyan-500">Lucky Mods</span>
              </h2>
              <p className="text-gray-300 mb-8 ibm-mono">
                Lucky Mods is a community-driven platform dedicated to enhancing your gaming experience through
                high-quality mods for Slither.io and Minecraft. Our team of passionate gamers and developers work
                tirelessly to bring you the best modifications, ensuring they're safe, optimized, and regularly updated.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 anton tracking-wider">Safe & Secure</h3>
                  <p className="text-gray-300 ibm-mono">All mods are thoroughly tested and verified to be malware-free</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 anton tracking-wider">Regular Updates</h3>
                  <p className="text-gray-300 ibm-mono">We keep our mods updated with the latest game versions</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 anton tracking-wider">Community Support</h3>
                  <p className="text-gray-300 ibm-mono">Join our Discord for installation help and mod discussions</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/JpSWMuU9" className="bg-linear-to-r from-sky-500 hover:from-sky-600 hover:to-indigo-600 to-indigo-500 w-[150px] py-[7px] rounded-lg" >Join discord</a>
              <a href="https://www.youtube.com/@Lucky_62388" className="bg-linear-to-r from-red-500 to-red-700  py-[7px] w-[150px] rounded-lg">Youtube channel</a>
              </div>
            </div>
          </div>
        </section>

     
      </div>

    </Layout>
  )
}
