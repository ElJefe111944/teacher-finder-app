import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state(){
        return {
            teachers: [
                {
                    id: 't1',
                    firstName: 'Pablo',
                    lastName: 'Gonzalez',
                    areas: ['DELE', 'Adults'],
                    description: 'Pablo has been a teacvher for over 15 years',
                    hourlyRate: 25,
                },
                {
                    id: 't2',
                    firstName: 'Clara',
                    lastName: 'Fernandez',
                    areas: ['DELE', 'Adults', 'children', 'GCSE & A-levels'],
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