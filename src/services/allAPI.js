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


// addCommentAPI
export const addCommentAPI = async (userId,reqBody,reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/news/addComment/${userId}`,reqBody,reqHeader);
}


// getALLCommentAPI
export const getCommentAPI = async()=>{
return await commonAPI("GET",`${BASE_URL}/news/allComment`,"","")
}


// DleteCommentAPI
export const deleteCommentAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/news/removeComment/${id}`,{},reqHeader)
}


// likeNewsAPI
export const likeNewsAPI = async (newsId, reqBody, reqHeader) => {
    return await commonAPI(
      "POST",
      `${BASE_URL}/news/likeDislike/${newsId}`,
      reqBody,
      reqHeader
    );
  };

//DislikeAPI
  export const dislikeNewsAPI = async (newsId, reqBody, reqHeader) => {
    return await commonAPI(
        "PUT",
        `${BASE_URL}/news/dislike/${newsId}`,
        reqBody,
        reqHeader
    );
};


// GetLike And DisLike
export const getLikesAndDislikesAPI = async (newsId,reqHeader) => {
    return await commonAPI(
        "GET",
        `${BASE_URL}/news/likesAndDislikes/${newsId}`,
        "", // No request body for GET requests
        reqHeader
    );
};

// AllUserAPI
export const getAllUsersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/admin/viewusers`,"",reqHeader)
}


// ReportAPI
export const reportNewsAPI = async (id, reqHeader) => {
    return await commonAPI(
        "PUT",
        `${BASE_URL}/news/reportNews/${id}`,
        {}, // Request body, if needed
        reqHeader
    );
};
 
// getALL user
export const getAllUsersIdsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allusers`,"",reqHeader)
}


// EditUser
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/editprofile`,reqBody,reqHeader)
}