import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils'

await setup({
  rootDir: fileURLToPath(new URL('../', import.meta.url)),
  runner: 'jest'
})
describe('app', () => {
  it('runs a test', async () => {
    expect(true).toBe(true)
    // const html = await $fetch('/')
    // expect(html.slice(0, 15)).toMatchInlineSnapshot(`
    //   "<!DOCTYPE html>"
    // `)
  })
})
