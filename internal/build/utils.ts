import { run } from './process'

import type { TaskFunction } from 'gulp'

const buildRoot = __dirname

// 为任务创建别名
export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name })

export const runTask = (name: string) => withTaskName(`shellTask:${name}`, () => run(`pnpm run start ${name}`, buildRoot))

// pnpm run start buildModels
// gulp --require sucrase/register/ts -f gulpfile.ts fullStyle
