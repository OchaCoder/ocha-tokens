import CopyButton from "@/components/CopyButton"
import { V4 } from "paseto"

export const dynamic = "force-dynamic" // ✅ Disables static generation

export default async function Home() {
  const paseto = await V4.generateKey("public", { format: "paserk" })

  return (
    <>
      <div className="w-full bg-green-900 h-12 flex items-center justify-center">
        <div className="font-theme text-2xl px-5 ">Ocha Tokens 7</div>
      </div>

      <div className="w-full h-screen bg-neutral-900 flex items-center justify-center flex-col gap-6">
        <div className="flex items-centerpy-2 px-10 p-3">
          <span className="font-theme text-5xl">V4</span>
        </div>

        <div className="">
          <div className="flex items-center justify-center gap-3">
            <div className="font-theme text-2xl">Secret Key</div>
            <CopyButton text={paseto.secretKey} />
          </div>
          <div className="text-pretty wrap-anywhere p-3">{paseto.secretKey}</div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3">
            <div className="font-theme text-2xl">Public Key</div>
            <CopyButton text={paseto.publicKey} />
          </div>
          <div className="wrap-anywhere p-3">{paseto.publicKey}</div>
        </div>
      </div>
    </>
  )
}
