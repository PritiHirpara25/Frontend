import { memo } from "react"
import React  from 'react'

const Memo = () => {
    console.log("Memo Called")
  return (
    <div>
    </div>
  )
}

// export default Memo
// export default React.memo(Memo)
export default memo(Memo)