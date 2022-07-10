import { shallowMount } from '@vue/test-utils'
import Counter from '../src/counter.vue'

describe("A suite", function() {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text).toBe('1')
  })
});
