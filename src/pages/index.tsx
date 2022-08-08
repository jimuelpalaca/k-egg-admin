import Sidebar from "components/sidebar"
import type { NextPage } from "next"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useCallback } from "react"

const Home: NextPage = () => {
  const router = useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login")
    },
  })

  if (status === "loading") {
    return <h1>Loading..</h1>
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <a
        href={"/api/auth/signout"}
        onClick={(e) => {
          e.preventDefault()
          signOut({ callbackUrl: "/" })
        }}
      >
        Sign Out
      </a>
    </>
  )
}

export default Home
