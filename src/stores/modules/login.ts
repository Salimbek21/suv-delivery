import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { jwtDecode } from 'jwt-decode'

export interface IAuth {
  loading: boolean
  currentUser: {
    permissions: any[]
  }
}

export const useLoginStore = defineStore({
  id: 'auth',
  state: (): IAuth => ({
    loading: false,
    currentUser: {
      permissions: []
    }
  }),
  getters: {},
  actions: {
    async setUser(form: any) {
      try {
        this.loading = true
        const res = await apiLogin(form)
        const decodeAccess: any = jwtDecode(res.data.access_token)
        const decodeRefresh: any = jwtDecode(res.data.refresh_token)

        localStorage.setItem('accessToken', res.data.access_token)
        localStorage.setItem('refreshToken', res.data.refresh_token)
        localStorage.setItem('permissions', JSON.stringify(decodeAccess.payload.permissions))
        localStorage.setItem('accessTokenExpiration', decodeAccess.exp)
        localStorage.setItem('refreshTokenExpiration', decodeRefresh.exp)

        ElMessage({
          message: 'Вы успешно авторизовались!',
          type: 'success'
        })

        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }
  }
})

export function useLoginStoreWithOut() {
  return useLoginStore()
}
