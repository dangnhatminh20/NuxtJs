import axios from 'axios';

const login = (context, params) => {
    console.log("Params: ", params)
    //Logic: login Api -> res -> dua vao res -> Mutation (thay doi State)
    //Code bao mat chua thong tin user nen phai dung post
    axios.post("/api/auth/login", params)
    //ngoac nhon laf method, ngoac tron la method return
    .then(
        res => {
            if( res.data.code == 2 ){
                context.commit("SET_MESSAGE", {
                    message: res.data.message
                });
            }else if ( res.data.code == 1 ) {
                var user = {
                    username: res.data.username,
                    age: res.data.age
                }
                context.commit("SET_USER", {
                    user: res.data.user
                });
            }
        }
    ).catch(
        err => {
            console.log("Error!", err);
        }
    )
}

export default {
    login
}