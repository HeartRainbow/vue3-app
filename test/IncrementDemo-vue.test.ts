// 单文件组件测试用例

import IncrementDemo from '../src/components/IncrementDemovue';
import { mount } from '@vue/test-utils';

describe('IncrementDemoVue', () => {
  it('SFC: increments value on click', async () => {
    // render component.
    const wrapper = mount(IncrementDemo as any);

    // mounted
    const textNode = await wrapper.get('[data-test="clicked"]');
    expect(textNode).toBeTruthy();
    expect(textNode.text()).toContain('Times clicked: 0');

    // Click a couple of times.
    const button = await wrapper.get('[data-test="increment"]');
    await button.trigger('click');
    await button.trigger('click');

    expect(textNode.text()).toContain('Times clicked: 2');
  });
});