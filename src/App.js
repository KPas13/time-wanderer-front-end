import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


import './app.css';
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileImage from "./components/UI/image/ProfileImage/ProfileImage";
import LongVerticalGridElement
    from "./components/UI/catagoryGridElements/VerticalElements/longVerticalGridElement/LongVerticalGridElement";
import ShortVerticalGridElement
    from "./components/UI/catagoryGridElements/HorizontalElements/shortHorizontalGridElement/ShortVerticalGridElement";
import CategoryPlaceGrid from "./components/CatagoryGrid/CategoryPlaceGrid/CategoryPlaceGrid";
import PlaceCatalog from "./pages/PlaceCatalog/PlaceCatalog";
import ArticleCatalog from "./pages/ArticleCatalog/ArticleCatalog";
import RouteCatalog from "./pages/RouteCatalog/RouteCatalog";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import EditProfile from "./pages/EditProfile/EditProfile";


function App() {

  return (
    <div className="App">
        <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage/>}/>
                        <Route path='profile' element={<ProfilePage/>}/>
                        <Route path='long-grid-vertical' element={<LongVerticalGridElement src='/assets/images/lviv.jpg' title='Europe' />}/>
                        <Route path='long-grid-horizontal' element={<ShortVerticalGridElement src='/assets/images/lviv.jpg' title='Ukraine' />}/>
                        <Route path='category-grid' element={<CategoryPlaceGrid />}/>
                        <Route path='profile-image' element={<ProfileImage src='/assets/images/lviv.jpg' level='100' nickname='Ra1zenKL' />}/>
                        <Route path='place-catalog' element={<PlaceCatalog />}/>
                        <Route path='article-catalog' element={<ArticleCatalog />}/>
                        <Route path='route-catalog' element={<RouteCatalog />}/>
                        <Route path='leaderboard' element={<LeaderboardPage />}/>
                        <Route path='edit-profile' element={<EditProfile />}/>
                    </Route>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
        </Router>
    </div>
  );
}

export default App;
