
export const buildFull = () => new Promise((resolve, reject) => {
  console.log('================这里是另外一个build full task')
  resolve(true)
})