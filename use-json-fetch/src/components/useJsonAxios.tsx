import axios from "axios"
import { useEffect, useState } from "react"

type TypePropsUseJsonAxios = {
    url: string
    opts?: object
}

export const UseJsonAxios = ({ url, opts=undefined }: TypePropsUseJsonAxios) => {
    const [data, setData] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|undefined>()

    useEffect(() => {
        const axiosRequest = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                const answer = res.data.status
                if (res.status != 200) {
                    throw new Error(res.statusText)
                }
                setData(answer)

            }
            catch(error: any) {
                setError(`error ${error.message}`)
            }
            finally {
                setLoading(false)
            }
        }
        axiosRequest()
    }, [])

    return [data, loading, error]
}