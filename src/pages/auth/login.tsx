import GoogleIcon from "assets/icon/google.svg"
import Logo from "assets/images/logo.png"
import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { NextPage } from "next"

import { signIn, useSession } from "next-auth/react"
import { useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import classNames from "assets/styles/util/classNames"
import Image from "next/image"

const LoginPage: NextPage = () => {
  const router = useRouter()
  const { data } = useSession()

  const handleSignIn = useCallback(() => {
    signIn("google")
  }, [])

  useEffect(() => {
    if (data) {
      router.push("/")
    }
  }, [data, router])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Image src={Logo} layout={"responsive"} />
            <h2 className="text-center mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <button
            onClick={handleSignIn}
            className={classNames(
              router.query.error ? "border-red-500" : "border-black",
              "group relative w-full flex justify-center py-4 px-4 border text-sm font-medium rounded-md hover:bg-blue-50 hover:border-blue-400"
            )}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            <GoogleIcon className="h-5 w-5 mr-3" />
            Sign in with Google
            {router.query.error && (
              <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </span>
            )}
          </button>
          {router.query.error && (
            <span className="text-red-500 text-sm">Access Denied</span>
          )}
        </div>
      </div>
    </>
  )
}

export default LoginPage
