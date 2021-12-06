/* eslint-disable no-unused-vars */
import axios from "axios";

export default {
  login({ commit }, staff) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: `/staffs/login`,
        data: staff,
        method: "POST"
      })
        .then(response => {
          const token = response.data.token;
          const staff = response.data.data;
          localStorage.setItem("tax_demo", token);

          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("auth_success", token, staff);
          resolve(response);
        })
        .catch(err => {
          commit("auth_error");
          localStorage.removeItem("tax_demo");
          reject(err);
        });
    });
  },

  forgot({ commit }, phone) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "/auth/forgot-password",
        data: phone,
        method: "POST"
      })
        .then(response => {
          const user = response.data.data;
          commit("auth_success", user);
          resolve(response);
        })
        .catch(err => {
          commit("auth_error", err);
          reject(err);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      localStorage.removeItem("tax_demo");
      delete axios.defaults.headers.common["authorization"];
      resolve();
    });
  }
};
