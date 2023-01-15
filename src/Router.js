import { Routes, Route, Use } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";

function RouterComp() {

return(
<Routes>
<Route index path="/" element={<Login />} />
<Route path="/home" element={<Main />} />
</Routes>
)
}

export default RouterComp;