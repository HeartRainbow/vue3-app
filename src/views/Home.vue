<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <Card /> -->
    <!-- <div v-cloak>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAMAv6BQHIwgGEgkEFwsFGQgEFTsQUSEKNBMHIwgEFQMEEBQHIwcFFwADBQYFDtQy8w4HGdEx9dY26xEGEgcGD9cz8hEHFBYIGJ4ZiYsDIfR/9d049+s0+0QPRiUKIukw/P2/+48fsSkKHGUSVudg3K0TdbAbpQoGD6MamPZR9oYmm34VcUsGIu107/2H/WYYY+EJ6qUJS+9q/NhG0noPa2UDBqgjxOM08zkIKO9I7/2Q+o0gk9cF17EPvcEgr30HMtMb2pINV+lr8vZa/z4NNtJj1vtg/3UqguMT7qcPXFYGFeZl7cIvvr04lpgdsdZW4/de/q5Lvfhq+/qE+99U5KI/suEG65AqkKgnmmwciU0LN2IHKMA53mIQS10bbf40/70fpvGh8P6c/kAECfiF/vXA9f6w/rRIwoEKOo0Uf9In3v4x//AL9N8n83ILTuoo8cw+1MIcxP////9d/v+P//+L//9M+f9h//9R/f+m//9Y/v///v+I//+e//+U//+0//xK9/93/v99/9ojyP+a//+r//+h//9V/v9m/v8t//+w//9w/f+D//9N///E/v9r//80//9B/fEl1//u//7X/f/0/skdkfgv8/+X//+5/+Ejyfk48P/6//kn4P0y9+MkzfxG9uAo0d0nzP8g/+0t3f85/tYhwf8D/fs/8/xo+P9H//++/9wjxqMEJOsC8f/n/rIRW/Uz7bsWofQn7/8E9v8n/f8P/70DpK8EJPud+sYTsdMgrsIdiP7e/fxT9P1c9tgats8budIHKekfv4wACPt19q0VivAt6bgVcOc38dgenP2r+9YXg8kbosoZhn4BBfkA8v0k9ekl0P4q7aYRg6wINu4hs9ot2JgBFP/N/roCF6sBEfdc+OIhpMEZf8oNv70FMNQZlM0juv8b9tUkxrcYksIdmskUdswOX6EBC50IOuki58QOZtYzxvEX+fSM8vda5t0z5I0IOt8GHZYNc+8Z1/144ocThvhnx7wLWv6C8/BCretB1/1YwvpBw1ECbpsAAAD5dFJOUwAHAzYjEwoBAgcOKRgdRT4dMBE5XE4pa37r/vdFarCQV/0Sorz+9v5y9/w71Zv8/KD9/vz6+/sqfoH+/ov9nP7w/P3NpaDYjlqw9tD7/vxRrniW3+Degci13S6+2lvRa8fn/tnHwezsqszrmdH+jP7bzOH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////////////////////////////////////////kwCGIwAAAwOSURBVFjD7ZhlWJtZFseTECcUh2ItVKftTKm7u3dmOu7usrvJGyLEiSfEgYRA0ECw4i7FXQqUtkBLW+ruoys3gVCZ2a1sPuyH/T88T3jg3t97zj3nnnPywmBPEhbmWGEQHjA4xqHE7Z8vd6yNr3zq5lAeHAeHwxwtDOz/+p+UwwOD87DeQwdiMYHBPp4ejjQxsPrLIIf6HRzyhZsjAwL38Qx0EBA+zRoO64X2cExxdPN0cO4E/+DQfMb4fP5FsJsDK5jbisHwA8EeGIcZCPfY/pon3JFXBOYT/Ogj/uscxI1dOLf33/d084A/PxPzwKJp7+xft/MvJ5rmb968+RW350TaWxMCNm3nm28eTOHlMjO5fAhiHAhye56MxLp5jA8O6J2HD2aUVxOJRCmFB5FZEBTwqs+zE7GePuMOrytZFUIcUzXTYODz+Xr+a688MxEeFDjm2IeUwThi3DjRcChEl0XTk1nkLQQY4pmQPh8F2Rx2/ptqMLw6ikgMDwcWRkoSm0J0Cr6cwdjm9GxzVGDIdtvnAklJyiAxymZfbqRZSTUZmzrYfAZP/jYKBOzp8gXu4Ra4JfzL/W4eWOxLDar0swobT0tXKUlUkTqmcK6cS6dH+z6liVi4m+eKublEIvRdkCfBu+eoJL2oA/CilGaZmCSihnEKjTwyQ/DL1/inI2JtxNfCQ7YEBboRnD8balCVFJUTiVyJWEwi0QEwP0MqZWcJRryf5RSD5VusH3jC1JzTGnNJUQethKqkUKzAsJgTBjZbwP79pWfJneUfBdq6sYv3huGyeFV6GI0aSaWIKSRgYcwJNttAk/60C/kMUZ4WZEtsGGH/jLLjOffNBoWAL6OLSACYCFwW0PQQI9rr6S3EwH3Grh7u/XX+ZY3+S3QKAGFxbUExZgjBnZYp/77yGVyGjxUqGGz/R7OGy3o2tc3vYAuFUpZSxOFY5vJk4kMctXnr01wW+xL4eNYiPw24eKmza+OpczPLQ+fW1CRa8ltaCo2Fhamp5gVoxBMrPiDNm7f8HfQEe9qnxA7u/cpj505VbLxx0K7vMzKOVWjeQj3BRGvn8Ny5cO3G1/+6bo37mKHbwTW5dTrv2LmKU2vXLly4sG3V3LnzyzOUUNOt6y8SnugtfMXCwzdOZMVRSnr9wGqMR9B3obmDnXcv7Z19fWbAJ5+E6KLi4kCdiFJHQnLenlfn/YdUxIC093zz8NX5uvC4uIz04k4vGMLNM9jT51tS61DenFMkbVSUvYyBQqbikuVk6EDQv/3yhgW1/tvD5pugNOfqtLL0lEu7UYhp1lATfvh42Y9XU0poWoUu11Z3QCUj8qkQi8Egy9/A/XmHATz311VC6/o4bVQcAF677DXeBJBrlt0rlhSpo6p12gkbw8lcpp4FkckvT/tTrxEw/DYeP9y+PCM95eLw1zhrxcMgUK67/TWSs+lMYq52wmdiFJvGZPIhFvTy8j85SAQW9ipLZAPaoGFFks7LZa7jJRQ/ddk1SXFRsTZ83GPbutXsQaFQCLFYr/uA/MA87vAOSC6ThtsqPXi6JV1y5vJpUE7mvRHouWPH1GWNDcVni2R2d8GPTnl4lU5Ho4FbyA+Y91hkMAjYvFCIwVXYXdYa01XdPY0b1qxbwpWtJvOWbFq2qLi4qGhwwmG+pJhkilFopUImRGYGLH+UiIGhN/PJZHKUfbk2pkjSdad0bYlcW54pY5GVVY2NDZKzhxPHYhKuoKdkipViU0yIVqDXkxnQy5hHiBiYEwNi8aW66txcrRYEObc4PeX7gzcWh1g3cxm0xc05ly9JALHc9jheikosI1GpJFMvLUpAhhgM+YqHAgN+waxh6VlZ5SZ1ZqQI1DwKj2w+uHCVbjycWeUd+47nDDeoJEW9ucRwtjqFzlWS6KB402NulOfSGKAH8nY8FGmQaQf4fKGuKSVyTCrS4J7bn0wcAC1mz76cnOOXJKqzh5XVshSzUkYh2dpLWI2x8DcFjczjyhe/88BpDOxDsp5v0CWqKRRwMkoxXR+w8WZ4XPXYgWWp1W0XcgCxQVWcTuKWRHJBs7K2F1FYWCLHeLVmNZnBI5PfQj84QvRXehZf19GbKaKDlRQ6pXzPjXQeMdwWAq1ITcqsy8kZaFwkKVEpFFwRnWLVGNBiaakhiTPCeLc+QD7w2D1ADwl1Gb1UqsgKFPHKLzSkpJNybQZyzWKS+lxZ2UBOzxmRQcrMkmcCotjWABOBhRaIzAjNoJ7c7Y7A2m/dDgZEZiv6TdQwKjCRRIegff4NkvRiA+AxVRQxKfLYwNDpgR7/AC2TIcyCqCKrgXQqBwDzMwR8plBA+33DJBzCDlwjJzMUqwsTORwq8Eck5ssXbwB5l160OlyhoirFJOqxRUP1A/6bTs1UsBl8NoseCQ7GCuRY8ldLaVKaUPHLIi+c3UL0G2Q5ZFhVCB4YBpym8vTyxUt7yo6CiaGJa6YDB6m388rqT/dcuFq6xCBlsARMSqStQydyYiwCMEawaVk//eqLw4wXVvxXPB6ziZNvDAvjhImoIhaLtWTppsuX21UlaimfJ6bTI9tah+rL/K+3pZWOdhggBk0gzgQxAcDCE2CGAHOE4adrK8ctxMJctjHkMhIztLAQLKFmUvh65t6flw7kNLYWM3VSAROSkdpmDdUPXzmWlJxcuv6mgcwTCmTqyDDQUQtDaUwpWMMGQLwd6L6NRTrEZ7L1+TEcTpiaq2cGrF//853TOT2zTtykCQQCpvzEkeG7w7vaktMAsXS+gcXjC7hqNccaYxbEFPIhYdO1l1BjQcHikB/8U6YHR5FFM8YALxgs4ZKKtNlLy+qP39m4FvQmoYDFnX38bn1VW1pEWnZyRenMLD6XTONZLJz8GjkPtBbQXmQX7UAMHjX519/YNAOYf/hGi+UQXx86mhZRN+dO/dCV5OS6U6cAk7fXf+ju6O20CKCkutKZBiEoGaFqk7EmQynjcrkyJaXTDoThCK7v/SNLwJbSyGSZ0cxlsRbXnUvOjjh/un4gDZxadl3F6N7mK43+t1NtwIikc6XXaTSenMbimDOpNYeAajiRJ1eicOM3D4WcftE6ubDk4kMmo5QGpWo0qZokYGI9mBgiIpKT02ZvGji+Kz8hNnmMGFE6upom5wmlf0+zZGZajMb8fHOlrx2Ixbt4bfjFAA6CeygyP2/fTag/Pray4OelP5bdrbqdnZydHQvMvdI4kp+doEnITo4FxOTSiiYalyVsXVRVmWoym1pSTXO88Tj7Ox6C87udIHPENZmWkby8X9evP3KkuaBr6fT3hkdaEvo0mr7U/gv+PV0tscl98ZrY2IQEYHRd7S2atOrKSGteXlV2akybyc9pAggGX69dt8QcS4y5O6/rTPe9e82VdXOmvOA19fjFq2C/pt80+56/f9KxtL7shP74vr6E2OzY+Pv3uTMXdUdXRXe35rVGj5reQqInCiKOgJx+MrMlXxWdF90dPbugttZvyguuQLsvpSZEpCUldP38wbIrxtTsNCspXqOJtyqh4t6sM52d3dHR0SOtre0LXPAPCiwe6fquKbWlMq+qu72gog7gJjk5I5HIyXlgd3989KwZkz+7aOrTJIxmxyb0SkzxfbUXmpuPHDnffP5Me7RVJ2d5odAP9XmCs9fbasAbOZlWYMW5uiNRODzB6T1NTG8DwHl7f9Zuytb0pyalJjTEFgDWkebzFwoKCmYXdNUePXryaPtKJAr30JyJRjr7jp7sHDma8M0U30lOVhw4EJSLb5LJb7qvt5OT+/RUVXx8f29fZVdVM4hYZW1tbWVFBSDOmePn9/bHM5xc8JiHOz0a6T75xfajH1uddbc/DOfivmCGje+CXqBuia1tP3Omapafn983LwLNmDFlypStW6dOnTz5Bd9JzgTco8MICunutXXBA+tsJ4FCOrmCw0Sh0XjvGe9Onw52g+1WgJeXlzfQJCBXVydXZyQB99jAhMMjnYAA7sEkjsGhCC4u4A9YHArpattt3e/qZFvp7u4MBEKHdHEh4P8wv2NxaIILEuzGPjJEodG2ToFFo5DOY/tdrCIQCCgUCg+EBsLhcNg/ju8YDAKHxiEe+1KAmfgffnw7zioEEMaq537BhsFiEVjsk1+w/AtMFZuwNJ28ngAAAABJRU5ErkJggg=="
        alt=""
      />
    </div> -->
    <el-button type="primary" @click="exportHandler">导出数据</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';
import { jsonToExcel } from '@/utils';
import { Inject, ConfigLoaderBase, DateLoader } from '@app/.';

const data = [
  {
    data: [
      { name: '大作战', date: '2022-10-10' },
      { name: '大作战1', date: '2022-10-11' },
      { name: '大作战2', date: '2022-10-12' },
      { name: '大作战3', date: '2022-10-13' },
    ],
    fields: ['name', 'date'],
    alias: {
      // 修改表头别名
      name: '游戏名称',
      date: '日期'
    }
  }
]

@Options({
  components: {
    HelloWorld,
    Card
  }
})
export default class Home extends Vue {

  @Inject()
  public dateLoader: DateLoader
  @Inject()
  public jsYamlConfigLoader: ConfigLoaderBase

  exportHandler() {
    console.log(this.dateLoader.unix());
    jsonToExcel(data, 'execl表格');
  }
}

</script>

<style lang="scss" scoped> </style>