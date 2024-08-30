import React, {useEffect} from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AuthHeader from "../../components/Header/AuthHeader/AuthHeader";
import {profile} from "../../actions/user";

const Layout = () => {

    const [nickname,setNickname] = React.useState("");
    useEffect(()=>{
        const fetchNickname = async () => {
            try{
                const profileInfo = await profile(localStorage.getItem("token"));
                setNickname(profileInfo.nickname);
            }catch(e){
                alert(e);
            }
        }
        if(localStorage.getItem("token")) fetchNickname();
    },[]);

    return (
        <div>
            {localStorage.getItem("token") ? (<AuthHeader nickname={nickname}/>) : (<Header/>)}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;