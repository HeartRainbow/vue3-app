import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module
export default class User extends VuexModule {
    userName: ''
    userID: ''
    number: number

    @Mutation
    SET_NUMBER(n: number) {
        this.number = n;
    }

    @Action
    async setNumber(payload: number) {
        this.context.commit('SET_NUMBER', payload)
    }
}