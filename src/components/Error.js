import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops, something went wrong!</h1>
            <h2>Error {err.status + ": " + err.statusText}</h2>
        </div>
    )
}

export default Error;