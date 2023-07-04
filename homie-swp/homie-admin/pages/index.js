import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-full overflow-hidden">
        <img src={session?.user?.image} alt="img" className="w-8 h-8 rounded-full"/>
        <span className="px-2 flex items-center ">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>
}
