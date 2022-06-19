import React from "react";
import { Route } from "./route";
import {  useSelector } from "react-redux";

export const RouteList = () => {
    const routes = useSelector(store => store.points.routes)

    return (

        routes.map((route)=> <Route route={route} key={route.id}/>)
    )
}