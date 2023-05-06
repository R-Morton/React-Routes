import { useSearchParams } from "react-router-dom";

export function WatchPage(props){

    let [searchParamsObj, setSearchParamsObj] = useSearchParams();

    return(
        <h1>
            Watching video with ID of {searchParamsObj.get("video")}
        </h1>
    )

}