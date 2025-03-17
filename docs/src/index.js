import TaoButton from './components/ui/TaoButton.vue'

const components = [TaoButton]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name || component.__name, component)
  })
}

export { TaoButton }
export default { install }