"use client"

import { useState } from "react"
import { IconCopyContent } from "./__c_utils__svg"

export default function CopyButton({ text }: { text: string }) {
  const [copy, setCopy] = useState(false)

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopy(true)
      setTimeout(() => setCopy(false), 800)
    } catch (err) {
      console.error("copy failed", err)
    }
  }

  return (
    <>
      <div>
        {copy ? (
          `Copied`
        ) : (
          <div className="cursor-pointer" onClick={copyToken}>
            <IconCopyContent size={20} />
          </div>
        )}
      </div>
    </>
  )
}
