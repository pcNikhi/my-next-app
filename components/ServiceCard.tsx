import React, { FunctionComponent } from 'react'
import { iserivses } from '../type'

const ServiceCard:FunctionComponent<{service:iserivses}> = ({service:{about,tittle}}) => {
  return (
    <div>
      <h4>{tittle}</h4>
      <h4>{about}</h4>
    </div>
  )
}

export default ServiceCard
