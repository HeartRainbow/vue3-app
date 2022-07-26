import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module
export default class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}

// https://juejin.cn/post/6844904003633954829
// https://www.jianshu.com/p/7aaa28414180