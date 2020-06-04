import useSWR from 'swr'
import axios from 'axios'

export default function useRequest (request, { initialData, ...config } = {}) {
  const { data: response, error, isValidating, mutate } = useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}),
    {
      ...config,
      initialData: initialData
    }
  )

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate
  }
}
