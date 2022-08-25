import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
import axios from 'axios';
import {API_URL, RPC_NODE, SOCKET_URL} from '@/config';
import { Connection } from "@solana/web3.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: null,
    user: null,
    config: null,
    rpc: null,
    multiWindow: false,
    modals: {
        manageBalance: false,
        fairPlay: false,
        checkFairPlay: false,
        terms: false,
        playResponsibly: false,
        faq: false,
        bugBounty: false,
        startPlayResponsibly: false,
        changeName: false,
    },

    fairPlayData: null,
    loader: true
  },

  getters: {
  },

  mutations: {
    setSocket(state, socket) {
        state.socket = socket;
    },

    setUser(state, user) {
        state.user = user;
    },

    setWallet(state, wallet) {
        state.user.wallet = wallet;
    },

    setName(state, name) {
        state.user.name = name;
    },

    setBalance(state, balance) {
        state.user.balance = balance;
    },

    setRPC(state, rpc) {
        state.rpc = rpc;
    },

    openModal(state, id) {
        state.modals[id] = true;
        document.body.classList.add('modal-open');
    },

    closeModal(state, id) {
        state.modals[id] = false;
        document.body.classList.remove('modal-open');
    },

    setFairPlay(state, game) {
        state.fairPlayData = game;
    },

    setLoader(state, isLoading) {
        state.loader = isLoading;
    },

    setConfig(state, config) {
        state.config = config;
    }
  },

  actions: {
    connectSocket({ state, commit }) {
        const socket = io(SOCKET_URL);
        commit('setSocket', socket);

        socket.on('noty', (data) => {
            Vue.noty[data.type](data.text);
        });

        socket.on('multiwindow', () => {
            state.multiWindow = true;
        });

        socket.on('balance', balance => {
            if(state.user) {
                state.user.balance = +balance;
            }
        });

        socket.on('disconnect', () => {
            Vue.noty.error("The connection to the server has been lost. Please refresh the page");
        });
    },

    authSocket({ state }) {
        state.socket.emit('auth', localStorage.getItem("token"));
    },

    async processLogin({ dispatch, commit }) {
        const token = localStorage.getItem("token");

        if(!token) {
            return;
        }

        const response = await axios.get(`${API_URL}/users/session`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        if(response.data.id) {
            dispatch('authSocket');
        }

        commit('setUser', response.data);
    },

    async fetchConfig({  commit }) {
        const response = await axios.get(`${API_URL}/config`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        commit('setConfig', response.data);
    },

    logout({ state, commit }) {
        state.socket.emit('logout');
        localStorage.removeItem("token");
        commit('setUser', null);
    },

    connectSolanaRPC({ commit }) {
        const connection = new Connection(RPC_NODE)
        commit('setRPC', connection)
    }
  },
  modules: {
  }
})
