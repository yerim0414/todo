import http from './http';

export async function getList(){
    try {
        // console.log("get /api/getList");
        return http.get(`/api/getList`);
    }catch(err){
        return err;
    }    
}

export async function getAllList(){
    try{
        console.log("/api/getAllList");
        return http.get(`/api/getAllList`);
    }catch(err){
        return err;
    }
}

export async function addList(data){
    try{
        return http.post(`/api/addList`, data);
    }catch(err){
        return err;
    }
}