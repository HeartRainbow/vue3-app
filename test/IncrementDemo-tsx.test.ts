// tsx组件测试用例

import IncrementDemo from '../src/components/IncrementDemotsx';
import { mount } from '@vue/test-utils';

describe('IncrementDemoTsx', () => {
  it('TSX: increments value on click', async () => {
    // render component.
    const wrapper = mount(IncrementDemo);

    // mounted
    const textNode = await wrapper.get('[data-test="clicked"]');
    expect(textNode).toBeTruthy();
    expect(textNode.text()).toContain('Times clicked: 0');

    // Click a couple of times.
    const button = await wrapper.get('[data-test="increment"]');
    await button.trigger('click');
    await button.trigger('click');

    console.log(textNode.text());

    expect(textNode.text()).toContain('Times clicked: 2');
  });
});