import { series, parallel } from 'gulp'
import { runTask, withTaskName } from './utils'
import { run } from './process'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildModules'),
    runTask('buildFull')
  )
)

export * from './src'