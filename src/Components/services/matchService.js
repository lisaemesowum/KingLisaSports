import axios from 'axios';
import { LuEar } from 'react-icons/lu';

const API_URL = 'http://localhost:8080/api/v1/matches';

export const getAllMatches = () => axios.get(API_URL);
export const getupcomingMatches = () => axios.get(`${API_URL}/upcoming`);
export const searchMatches = (team , League) => axios.get(`${API_URL}/search`, { params: { team, League } });