import http from './http';

export async function getList(){
    try {
        console.log("get /api/getList");
        return http.get(`/api/getList`);
    }catch(err){
        return err;
    }    
}