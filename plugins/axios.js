export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    const token = store.state.token
    token && (config.headers.Authorization = token)
    console.log('Making request to ' + config.url)
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}