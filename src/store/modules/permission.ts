import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

/**
 * 权限类型接口
 */
interface IPermission {
    [key: string]: boolean;
}

@Module
export default class Permission extends VuexModule {
  btnPermission: IPermission = {
    login: true
  };

  @Mutation
  setBtnPermission(payload: IPermission) {
    this.btnPermission = payload;
  }
}
