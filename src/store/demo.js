import { DEMO } from "../actions/actiontypes";

const INIT_STATE = {
    error: "",
    success: "",
    data: ""
};

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case DEMO:
            return { ...state, info: action.payload };
        default:
            return { ...state };
    }
}
