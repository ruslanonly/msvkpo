import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SentenceMovingPage } from "pages/SentenceMoving";
import { FrenchNumeralsPage } from "pages/FrenchNumerals";
import { Layout } from "entities/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/french-numerals" element={<FrenchNumeralsPage/>}/>
          <Route path="/sentence-moving" element={<SentenceMovingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
