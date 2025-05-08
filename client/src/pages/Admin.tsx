import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Admin() {
  return (
    <div className="text-white w-full h-[100vh] flex  items-center justify-center gap-[20px]">
        
        <div className="flex flex-col gap-[20px] w-[500px] h-[250px] bg-black p-[20px] rounded-lg">
        <p>Login to admin panel</p>
          <Input required type="text" placeholder="Your id" />
          <Input required type="password"   placeholder="Your password"/>
          <Button   size={"lg"} className="text-black">Login</Button>
        </div>

    </div>
  )
}
