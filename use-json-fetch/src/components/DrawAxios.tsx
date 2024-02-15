import { FC } from "react"
import { UseJsonAxios } from "./useJsonAxios"

type TypePropsDrawAxios = {
    url: string
    name: string
}

export const DrawAxios: FC<TypePropsDrawAxios> = ({ url, name }) => {
    const [data, loading, error] = UseJsonAxios({ url })

    return (
        <div className="card-answer">
            <h1>{name}</h1>
            <h2>{`data: ${data}`}</h2>
            <h2>{`loading: ${(loading && 'Загрузка...') || 'Ответ получен'}`}</h2>
            <h2>{`error: ${error || 'Все ок'}`}</h2>
        </div>

    )
}