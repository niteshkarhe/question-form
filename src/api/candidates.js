import { api } from '.';

const getCandidateQuestionsData = async (login_code, email) => {
    const response = await api.get('candidates', {
        params: {email: email, login_code: login_code}
    });
    return response.data;
}

export { getCandidateQuestionsData };