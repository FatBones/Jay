import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    keepSongs:[],
    currentSong: ''
}

const mutations = {
    ADDSONG(state,song){
        state.keepSongs.push(song);
    },
    KEEPCURRENTSONG(state, url){
        state.currentSong = url
    }
    
};

const actions = {
    addSong({commit}, song){
        commit('ADDSONG', song)
    },

    keepCurrentSong({commit}, url){
        commit('KEEPCURRENTSONG', url)
    }
};

const getters = {};

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

