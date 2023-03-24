import React from 'react'
import Resumepdf from '../Resume.pdf'

export const Viewresume = () => {
  return (
    <div>
      <iframe title='Resume' src={Resumepdf + "#toolbar=0"} width="100%" height="600px"></iframe>
    </div>
  )
}
