import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": 'e10dfbbe-068b-4a22-94ec-46ea74c34511'
  }
})

export const usersAPI = {
  getUsers(usersAtPageCount = 1, currentPage = 10) {
    return instance.get(`users?count=${usersAtPageCount}&page=${currentPage}`)
    .then(response => response.data)
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
    .then(response => response.data.resultCode)
  },

  followUser(id) {
    return instance.post(`follow/${id}`)
    .then(response => response.data.resultCode)
  },

  authMe() {
    return instance.get(`auth/me`)
    .then(response => response.data)
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(response => response.data)
  }
}

export const userProfileAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    .then(response => response.data)
  }
}