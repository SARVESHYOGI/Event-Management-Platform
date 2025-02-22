// Desc: API for Summary
export const baseURL = "http://localhost:8000";

const SummaryApi = {
  login: {
    url: "/api/users/loginuser",
    method: "POST"
  },
  logout: {
    url: "/api/users/logoutuser",
    method: "POST"
  },
  register: {
    url: "/api/users/createuser",
    method: "POST"
  },
  getsummary: {
    url: "/api/users/getusers",
    method: "GET"
  },
  refreshToken: {
    url: "/api/users/refresh-token",
    method: "POST"
  },
  getevents: {
    url: "/api/events/getevents",
    method: "GET"
  },
  createevent: {
    url: "/api/events/createevent",
    method: "POST"
  },
  deleteevent: {
    url: "/api/events/deleteevent",
    method: "DELETE"
  },
  editevent: {
    url: "/api/events/editevent",
    method: "PUT"
  }
};











export default SummaryApi;