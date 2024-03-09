import axios from 'axios';

const apiUrl = 'https://localhost:7250/';

export const getShowerReports = () => {
  return axios.get(`${apiUrl}api/ShowerReport/`);
};

export const addShowerReport = (showerReport) => {
  return axios.post(`${apiUrl}api/ShowerReport/`, showerReport, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const updateShowerReport = (showerReport) => {
  return axios.put(`${apiUrl}api/ShowerReport/${showerReport.id}`, showerReport);
};

export const deleteShowerReport = (reportId) => {
  return axios.delete(`${apiUrl}api/ShowerReport/${reportId}`);
};
