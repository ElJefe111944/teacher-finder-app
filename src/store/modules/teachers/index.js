import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state(){
        return {
            lastFetch: null,
            teachers: [
                {
                    id: 't1',
                    firstName: 'Pablo',
                    lastName: 'Gonzalez',
                    areas: ['dele', 'adults'],
                    description: 'Pablo has been a teacvher for over 15 years',
                    hourlyRate: 25,
                },
                {
                    id: 't2',
                    firstName: 'Clara',
                    lastName: 'Fernandez',
                    areas: ['dele', 'adults', 'children', 'gcse'],
                    description: 'Clara has been a teacvher for over 10 years',
                    hourlyRate: 30,
                }
            ]
        }
    },
    mutations,
    actions,
    getters,
}