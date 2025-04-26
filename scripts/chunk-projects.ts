#!/usr/bin/env ts-node

import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

const NUM_GROUPS = 4
const NODE_VERSION = '22'
const SCRIPT_NAME = process.env.SCRIPT_NAME || 'test'

interface TestMatrixEntry {
  scriptName: string
  packageName: string
  packageNameFormatted: string
  chunkNumber: string
  runner: string
  nodeVersion: string
  path: string
  testScript: string
  testCoverageScript: string
  testPaths?: string[]
}

const FILES = ['@tap/ui']

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks = Array.from({ length: size }, () => [] as T[])
  array.forEach((item, index) => {
    chunks[index % size].push(item)
  })
  return chunks
}

function getChangedProjects(): string[] {
  const base =
    process.env.NX_BASE || 'origin/' + (process.env.GITHUB_BASE_REF || 'main')
  const head = process.env.NX_HEAD

  try {
    const result = execSync(
      `npx nx show projects --affected --base=${base} --head=${head} --json`,
      {
        encoding: 'utf-8',
      }
    )
    return JSON.parse(result) as string[]
  } catch (err) {
    console.error('Failed to detect affected projects:', (err as Error).message)
    return []
  }
}

function getNodeVersion(projectName: string): string {
  try {
    const output = execSync(`npx nx show project ${projectName} --json`, {
      encoding: 'utf8',
    })
    const meta = JSON.parse(output)
    const pkgPath = path.join(process.cwd(), meta.root, 'package.json')

    if (!fs.existsSync(pkgPath)) {
      console.warn(`No package.json found at ${pkgPath}`)
      return NODE_VERSION
    }

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
    const version = pkg.engines?.node
    return version?.replace(/[^\d.]/g, '') || NODE_VERSION
  } catch (err) {
    console.warn(
      `Could not get node version for ${projectName}:`,
      (err as Error).message
    )
    return NODE_VERSION
  }
}

function getProjectPath(projectName: string): string {
  try {
    const output = execSync(`npx nx show project ${projectName} --json`, {
      encoding: 'utf8',
    })
    const meta = JSON.parse(output)
    return meta.root
  } catch (err) {
    console.warn(
      `Could not get path for ${projectName}:`,
      (err as Error).message
    )
    return ''
  }
}

function formatProjectName(packageName: string): string {
  return packageName.includes('/') ? packageName.split('/')[1] : packageName
}

function main() {
  const changedProjects = getChangedProjects()
  const testable = changedProjects.filter(name =>
    FILES.some(baseName => baseName === name)
  )

  if (testable.length === 0) {
    console.log('[]')
    return
  }

  const chunks = chunkArray(testable, NUM_GROUPS)

  const matrix: TestMatrixEntry[] = []

  chunks.forEach((group, i) => {
    group.forEach(pkg => {
      matrix.push({
        scriptName: SCRIPT_NAME,
        packageName: pkg,
        packageNameFormatted: formatProjectName(pkg),
        chunkNumber: `${i + 1}/${NUM_GROUPS}`,
        path: getProjectPath(pkg),
        runner: 'ubuntu-latest',
        nodeVersion: getNodeVersion(pkg),
        testScript: 'test',
        testCoverageScript: 'test:coverage',
      })
    })
  })

  console.log(JSON.stringify(matrix))
}

main()
