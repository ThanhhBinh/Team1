import React from "react";
import AppUrl from "../api/AppURL";
export default function Loading1() {
    return (
        <div style={{ textalign: "center" }}>
            <img
                src={`${AppUrl.ImageFE}/assets/img/Loading.gif`}
                alt="Loading.."
            />
        </div>
    );
}
