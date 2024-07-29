import process from 'node:process'
import * as fs from 'node:fs'
import path from 'node:path'
import { input } from '@inquirer/prompts'

(async () => {
  const answer = await input({ message: 'Enter the name of new directive\n starts with "v", e.g. "vWatermark":' })

  if (!/v[A-Z]/.test(answer)) {
    console.error('Error: directive name must start with "v[A-Z]"')
    process.exit(0)
  }

  // check if the directive already exists
  if (fs.existsSync(`${process.cwd()}/directives/src/${answer}`)) {
    console.error('Error: directive already exists')
    process.exit(0)
  }
  // if not, create a new directive and its files
  console.log('Creating new directive...')
  fs.mkdirSync(`${process.cwd()}/directives/src/${answer}`)
  fs.writeFileSync(`${process.cwd()}/directives/src/${answer}/index.ts`, `import { ${answer} } from './${answer}'\nexport { ${answer} }\n`)
  fs.writeFileSync(`${process.cwd()}/directives/src/${answer}/${answer}.ts`, fs.readFileSync(`${path.join(__dirname, './template')}`, 'utf-8'))
  fs.writeFileSync(`${process.cwd()}/directives/src/index.ts`, `export * from './${answer}'\n`, { flag: 'a' })
  console.log('Success!')
})()
