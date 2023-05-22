import React,{useEffect} from "react";
import KakaoMap from "../components/KakaoMap.jsx";
import NavBar from "../components/Navbar";

function Map(){

    return(
        <div>
            <NavBar />
            <h>
                Hello! This is New Roadmap MapPage!
            </h>
            <KakaoMap></KakaoMap>
        </div>
    )
}

export default Map;