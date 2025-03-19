import TaoButton from './components/ui/TaoButton.vue'
import TaoBorder from './components/ui/TaoBorder.vue'

const components = [TaoButton , TaoBorder]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name || component.__name, component)
  })
}

export { TaoButton , TaoBorder }
export default { install }