import React, { memo, useEffect } from 'react'

const LazyText = memo((props) => {
  const {externalData, children} = props;

  useEffect(() => {
    console.log('external data is: ', externalData)
  }, [externalData])

  return (
    <div>{externalData}{children}</div>
  )
})

export default LazyText;