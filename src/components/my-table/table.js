// 创建一个函数式组件 Functional = true 
export default {
    functional: true,
    // 接受四个参数 row , column, index, render
    props: {
        row: Object, // 当前行的数据
        column: Object, // 当前列的数据
        index: Number, // 当前是第几行
        render: Function, // 具体的函数内容
    },
    render(h, ctx) {
        // console.log(h, ctx)
        // 将row , column, index 合并
        const params = {
            row: ctx.props.row,
            column: ctx.props.column,
            index: ctx.props.index
        }
        return ctx.props.render(h, params);
    }
}