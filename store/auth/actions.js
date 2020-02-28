import axios from 'axios';

const login = (context, params) => {
    console.log("Params: ", params)
    //Logic: login Api -> res -> dua vao res -> Mutation (thay doi State)
    //Code bao mat chua thong tin user nen phai dung post
    axios.post("/api/auth/login", params)
    //ngoac nhon laf method, ngoac tron la return
    .then(
        res => {
            console.log("Success!", res);
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