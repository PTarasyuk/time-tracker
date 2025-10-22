import { mount, shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import BaseSelect from '../../src/components/BaseSelect.vue'
import BaseButton from '../../src/components/BaseButton.vue'
import BaseIcon from '../../src/components/BaseIcon.vue'
import { ButtonType, IconName } from '../../src/types'

it('renders select with reset button', () => {
  const wrapper = mount(BaseSelect, {
    props: {
      placeholder: '',
      options: [],
      selected: null,
    },
  })

  expect(wrapper.findComponent(BaseButton).vm.type).toBe(ButtonType.NEUTRAL)
  expect(wrapper.findComponent(BaseIcon).vm.name).toBe(IconName.XMARK)
})

it.todo('renders select with placeholder')

it.todo('renders select with options')
