import axios from "axios";

type ResolvedType = {
    data?: any,
    error?: any
}

export const getWorks = async ():Promise<ResolvedType> => {
    const resolved: ResolvedType = {
        data: null,
        error: null
    };
    await axios.get(`http://localhost:3500/works`).then(response => {
        resolved.data = response.data;
    }).catch((error) => {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else if (error.request) {
            resolved.error = "Something else went wrong..";
        } else if (error.message) {
            resolved.error = "Another error than the other two...";
        }
    });
    return resolved;
};