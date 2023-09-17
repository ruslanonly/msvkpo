import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChessOrderPage } from "pages/ChessOrder";
import { FrenchNumeralPage } from "pages/FrenchNumeral";
import { Layout } from "entities/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/french-numerals" element={<FrenchNumeralPage/>}/>
          <Route path="/chess-order" element={<ChessOrderPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
