import { describe, it, expect } from 'vitest' // 必须显式引入
import { mount } from '@vue/test-utils'
import TaoButton from '../src/components/ui/TaoButton.vue'

describe('TaoButton', () => {
  it('渲染默认按钮', () => {
    const wrapper = mount(TaoButton, {
      slots: { default: '测试按钮' }
    })
    expect(wrapper.text()).toContain('测试按钮')
  })
})