import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TaoBorder from '../src/components/ui/TaoBorder.vue'

describe('TaoBorder', () => {
  // 基础功能
  it('渲染默认插槽内容', () => {
    const wrapper = mount(TaoBorder, { slots: { default: '内容' } })
    expect(wrapper.text()).toContain('内容')
  })

  // Props 验证
  it('正确应用所有 border 相关 props', () => {
    const wrapper = mount(TaoBorder, {
      props: {
        color: '#00ff00',
        width: '3',      // 测试字符串类型
        borderType: 'double',
        radius: 10
      }
    })

    const style = wrapper.element.style
    expect(style.borderColor).toBe('rgb(0, 255, 0)')
    expect(style.borderWidth).toBe('3px')
    expect(style.borderStyle).toBe('double')
    expect(style.borderRadius).toBe('10px')
  })

  // 样式类验证
  it('根据 borderType 设置边框样式', () => {
    const wrapper = mount(TaoBorder, {
      props: { borderType: 'dotted' }
    })
    expect(wrapper.element.style.borderStyle).toBe('dotted')
  })

  // 默认值验证
  it('使用默认 props 值', () => {
    const wrapper = mount(TaoBorder)
    const style = wrapper.element.style
    expect(style.borderColor).toBe('rgb(0, 0, 0)')
    expect(style.borderWidth).toBe('1px')
    expect(style.borderStyle).toBe('solid')
    expect(style.borderRadius).toBe('0px')
  })
})