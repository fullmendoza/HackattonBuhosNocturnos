import Vue3Storage from "vue3-storage-secure";

export const storageSecureCollection = {
  appIsLaunched: 'appIsLaunched',
  language: 'language',
}

export default (app) => app.use(Vue3Storage, {
  namespace: process.env.SECURE_STORAGE_NAME_SPACE,
  secureKey: process.env.SECURE_STORAGE_KEY
})
