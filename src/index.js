import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import "./assets/bootstrap-icons/bootstrap-icons.css"
import { BrowserRouter } from "react-router-dom"
import { StateProvider } from "./constants/StateProvider"
import reducer, { initialState } from "./constants/reducer"

import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
)
