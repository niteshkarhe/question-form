import { api } from '.';

const getQuestionsOfRequestedJobId = async (job_id) => {
    const endpoint = 'jobs/' + job_id
    const response = await api.get(endpoint);
    return response.data;
}

export { getQuestionsOfRequestedJobId };