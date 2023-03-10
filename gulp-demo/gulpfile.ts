import { series, parallel, watch } from 'gulp'

export const task1 = () => new Promise((resolve, reject) => {
  console.log('【第一个任务】keep moving')
  resolve(true)
})
task1.displayName = 'task1'

export const task2 = () => new Promise((resolve, reject) => {
  console.log('【第二个任务】keep moving')
  resolve(true)
})
task2.displayName = 'task2'

export const task3 = () => new Promise((resolve, reject) => {
  console.log('【第三个任务】keep moving')
  resolve(true)
})
task3.displayName = 'task3'

export const task4 = () => new Promise((resolve, reject) => {
  console.log('【第四个任务】keep moving')
  resolve(true)
})
task4.displayName = 'task4'

export const task5 = () => new Promise((resolve, reject) => {
  console.log('【第五个任务】keep moving')
  resolve(true)
})
task5.displayName = 'task5'

const taskAll = series(
  task1,
  task2,
  parallel(
    task3,
    task4,
    task5
  )
)

// watch('./src/**/*.ts', taskAll)

export default taskAll
