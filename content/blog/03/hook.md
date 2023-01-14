---
title: "Hook denemesi"
date: "2022-03-29"
variant: blog
---

import { useState } from "react"

# Aşağıdaki düğmeye basın!

export const MyDynamicButton = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>{count} kez bastınız!</button>
  )
}

<MyDynamicButton />
