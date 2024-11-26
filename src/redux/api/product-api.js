import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (params) => ({ 
        url: '/students', 
        params 
      })
    }),
  }),
})

export const {useGetProductQuery} = productApi