const log = Cypress.log
Cypress.log = function (options, ...args) {
  if (options.displayName === 'script' || options.name === 'request') return
  return log(options, ...args)
} as typeof log

Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false
})