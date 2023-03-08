/**
 * constants
 */
import path from 'path'

export const root = path.resolve(__dirname, '../../')

export const packages = path.resolve(root, './packages')

export const componentPath = path.join(packages, 'components')

export const shared = path.join(packages, 'shared')
