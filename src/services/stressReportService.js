import axios from 'axios';

const apiUrl = 'https://localhost:7250/';

export const getStressReports = () => {
  return axios.get(`${apiUrl}api/StressLevelReport/`);
};

export const addStressReport = (stressReport) => {
  return axios.post(`${apiUrl}api/StressLevelReport/`, stressReport, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateStressReport = (stressReport) => {
  return axios.put(`${apiUrl}api/StressLevelReport/${stressReport.id}`, stressReport);
};

export const deleteStressReport = (reportId) => {
  return axios.delete(`${apiUrl}api/StressLevelReport/${reportId}`);
};
