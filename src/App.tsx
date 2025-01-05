import { BrowserRouter, Routes, Route } from "react-router";
import { Trends } from "./pages/Trends";
import { AppLayout } from "./pages/AppLayout";
import { Search } from "./pages/Search";
import { Movies } from "./pages/Movies";
import { Favorites } from "./pages/Favorites";
import { TopMovies } from "./pages/TopMovies";
import { Actor } from "./pages/Actor";
import { Account } from "./pages/account";
import { Profile } from "./pages/account/Profile";
import { Settings } from "./pages/account/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Trends />} />
          <Route path="search" element={<Search />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="top-movies" element={<TopMovies />} />
          <Route path="/actors/:id" element={<Actor />} />
          <Route path="/account" element={<Account />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* Support */}
          {/* Auth */}
          {/* Cookies/etc. */}
          {/* <Route></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
