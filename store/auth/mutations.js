const SET_USER = ( state, payload ) => {
    state.user = payload.user;
};

const SET_MESSAGE = ( state, payload ) => {
    state.massage = payload.massage;
};

const SET_LOADING = ( state, payload ) => {
    state.loading = payload.loading;
};

export default {
    SET_USER,
    SET_MESSAGE,
    SET_LOADING
}