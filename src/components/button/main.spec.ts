import { shallowMount } from '@vue/test-utils';
import MButton from './main.vue';

describe('Button.vue', () => {
  const wrapper = shallowMount(MButton, {
    propsData: {
      disabled: 'disabled',
      maxWidth: '200px',
      height: '50px',
      icon: true
    }
  });

  test('renders button classes', () => {
    expect(wrapper.classes('m-button')).toBe(true);
  });

  /**
   * button size
   */
  test('When specified disabled, m-button--disabled', () => {
    expect(wrapper.classes()).toContain('m-button--disabled');
  });

  test('When no specified, m-button--medium', () => {
    expect(wrapper.classes()).toContain('m-button--medium');
  });

  /**
   * button type
   */
  test('When no specified, m-button--standard', () => {
    expect(wrapper.classes()).toContain('m-button--standard');
  });

  /**
   * button height
   */
  test('When height is specified, set style="height:50px;"', () => {
    expect(wrapper.element.style.height).toBe('50px');
  });

  /**
   * button maxWidth
   */
  test('When maxWidth is specified, set style="max-width:200px;"', () => {
    expect(wrapper.element.style.maxWidth).toBe('200px');
  });

  /**
   * no props
   */
  test('Do not set any class specified in props', () => {
    expect(wrapper.classes()).not.toContain('m-button--small');
    expect(wrapper.classes()).not.toContain('m-button--large');
    expect(wrapper.classes()).not.toContain('m-button--primary');
    expect(wrapper.element.style.height).not.toBe('');
    expect(wrapper.element.style.maxWidth).not.toBe('');
  });
});
