import React from 'react'
import useReqeust from '../lib/utils/useRequest'
const page = ({ id }) => {
  const { data, error } = useReqeust({
    url: `/api/user/${id}`,
    method: 'GET'
  })

  if (error) {
    return <div>Error...</div>
  }

  if (!data) {
    return <div>Loading</div>
  }
  return (
    <div>
      {id}-{data}
    </div>
  )
}

page.getInitialProps = async ({ req, res, query: { id } }) => {
  return { id }
}

export default page
