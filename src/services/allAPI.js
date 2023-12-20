import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"
// registr
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}


// AddNewsDetails
export const addNewsAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/news/add`,reqBody,reqHeader)
}

// allUser News
export const allNewsAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/all`,"","")
}

// user News

export const usersNewsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-news`,"",reqHeader)
}

// edit News
export const editNewsAPI = async(newsId,reqBody,reqHeader)=>{
return await commonAPI("PUT",`${BASE_URL}/news/edit/${newsId}`,reqBody,reqHeader)
}

// delete Api
export const deleteNewsAPI = async(newsId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/news/remove/${newsId}`,{},reqHeader)
    }