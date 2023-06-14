
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="flex flex-col items-center mt-48">
            <h1>Opps !!!!</h1>
            <h2 className="mb-5">Something went wrong!</h2>
            <h3 className="text-7xl font-bold text-red-700">{err.status}</h3>
            <h3 className="text-xl font-bold text-red-500">{err.statusText}</h3>
        </div>
    )
}

export default Error;