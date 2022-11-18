<template>
    <div class="table-item">
        <table>
            <thead>
                <tr>
                    <th v-for="(item, key) in columns" :key="key">{{ item.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, key1) in data" :key="key1">
                    <td v-for="(col, key2) in columns" :key="key2">
                        {{ row[col.key] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import Render from './table.js';
export default {
    // table 组件编写
    components: { Render },
    props: {
        columns: {
            type: Array,
            require: true,
            default() {
                return []
            }
        },
        data: {
            type: Array,
            require: true,
            default() {
                return []
            }
        }
    }
}
</script>
  
<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
}

table th {
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
}

table td,
table th {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}
</style>