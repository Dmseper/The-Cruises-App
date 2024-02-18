import {mount} from "@vue/test-utils";
import AboutUs from "@/views/AboutUs.vue";

describe('AboutView', () => {
    it('renders the about view correctly', () => {
        const wrapper = mount(AboutUs);
        expect(wrapper.find('h1').text()).toEqual('Посейдон');
        expect(wrapper.find('.about').exists()).toBe(true);
        expect(wrapper.findAll('p')).toHaveLength(3);
    })
})
