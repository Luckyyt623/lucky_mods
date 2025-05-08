import Layout from "@/Layout"
import SlitherBG from "@/assets/slitherbg.jpg"
import MinecraftBG from "@/assets/minecraftbg.jpg"

import { Link } from "react-router-dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ModLinks({ typegame } : { typegame: string }) {

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
        },
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
        },
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
        },
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

    return (

        <Layout>
            <div className="flex flex-col gap-[20px] w-full h-full items-center justify-center p-[20px]">
            <img src={typegame === "minecraft" ? MinecraftBG : SlitherBG } className="rounded-lg w-[500px] h-[200px] object-cover" alt="" />
            <div className="w-full flex text-sm items-center  justify-center gap-[20px] flex-wrap">

                {slither_cards.map((value, index) => (
                    <Link to={`/mod/${value.name}/`} key={index} className="bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-xl p-1 from-green-500 to-cyan-500 w-full lg:w-[350px] ">

                        <Card className="bg-black  w-full ">

                            <CardHeader>
                                <CardTitle className="ibm-mono">{value.name}</CardTitle>
                                <CardDescription className="ibm-mono">{value.desc}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <img className="object-cover w-full h-[100px] lg:h-[140px] rounded-lg" src={value.image} alt="" />
                            </CardContent>
                            <CardFooter className="ibm-mono">
                                {value.rating}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}

            </div>
            </div>

        </Layout>
    )
}
