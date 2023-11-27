import { api } from '.';

const saveUserData = async (payload = {}) => {
    const response = await api.post("user", payload);
    return response.data;
}

export { saveUserData };