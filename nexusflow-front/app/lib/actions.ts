'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId:string, accessToken : string, refreshToken:string) {
    cookies().set('session_userid',userId,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path:'/' 
    }) 
    cookies().set('session_access_token',accessToken,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path:'/' 
    }) 
    cookies().set('session_refresh_token',refreshToken,{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path:'/' 
    }) 
}

export async function resetAuthCookies(){
    cookies().set('session_userid','')
    cookies().set('session_access_token','')
    cookies().set('session_refresh_token','')
}

export async function getUserId(){
    const userId = cookies().get('session_userid')?.value
    return userId ? userId : null
}