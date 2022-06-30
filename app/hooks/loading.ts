import { ElLoading } from 'element-plus';

/**
 * 自定义加载动画
 */
export class OsLoading {
  static loading;

  static open() {
    this.loading = ElLoading.service({
      // target: document.body,
      // body: true,
      // spinner: 'el-icon-loading',
      lock: true,
      background: 'rgba(255, 255, 255, 0.8)',
      customClass: 'osloading'
    });
  }

  static close() {
    this.loading.close()
  }
}