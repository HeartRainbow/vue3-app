export default {
    // mounted(el, binding) {
    //     // 弹框可拉伸最小宽高
    //     const minWidth = 400
    //     const minHeight = 300
    //     // 初始非全屏
    //     let isFullScreen = false
    //     // 当前顶部高度
    //     let nowMarginTop = 0
    //     // 获取弹框头部（这部分可双击全屏）
    //     const dialogHeaderEl = el.querySelector('.el-dialog__header')
    //     console.log('dialogHeaderEl>>>>>>>>', dialogHeaderEl);


    //     // 弹窗
    //     const dragDom = el.querySelector('.el-dialog')
    //     // 给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
    //     dragDom.style.overflow = 'auto'
    //     // 清除选择头部文字效果
    //     // dialogHeaderEl.onselectstart = new Function("return false");
    //     // 头部加上可拖动cursor
    //     dialogHeaderEl.style.cursor = 'move'
    //     // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    //     const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    //     const moveDown = e => {
    //         // 鼠标按下，计算当前元素距离可视区的距离
    //         const disX = e.clientX - dialogHeaderEl.offsetLeft
    //         const disY = e.clientY - dialogHeaderEl.offsetTop
    //         // 获取到的值带px 正则匹配替换
    //         let styL, styT
    //         // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
    //         if (sty.left.includes('%')) {
    //             styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
    //             styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
    //         } else {
    //             styL = +sty.left.replace(/\px/g, '')
    //             styT = +sty.top.replace(/\px/g, '')
    //         }
    //         document.onmousemove = function (e) {
    //             // 通过事件委托，计算移动的距离
    //             const l = e.clientX - disX
    //             const t = e.clientY - disY
    //             // 移动当前元素
    //             dragDom.style.left = `${l + styL}px`
    //             dragDom.style.top = `${t + styT}px`
    //             // 将此时的位置传出去
    //             // binding.value({x:e.pageX,y:e.pageY})
    //         }
    //         document.onmouseup = function (e) {
    //             document.onmousemove = null
    //             document.onmouseup = null
    //         }
    //     }
    //     dialogHeaderEl.onmousedown = moveDown
    //     // 当前宽高
    //     let nowWidth = 0
    //     // let nowHight = 0
    //     // 双击头部全屏效果
    //     dialogHeaderEl.ondblclick = e => {
    //         if (isFullScreen === false) {
    //             // nowHight = dragDom.clientHeight
    //             nowWidth = dragDom.clientWidth
    //             nowMarginTop = dragDom.style.marginTop
    //             dragDom.style.left = 0
    //             dragDom.style.top = 0
    //             dragDom.style.height = '100VH'
    //             dragDom.style.width = '100VW'
    //             dragDom.style.marginTop = 0
    //             isFullScreen = true
    //             dialogHeaderEl.style.cursor = 'initial'
    //             dialogHeaderEl.onmousedown = null
    //         } else {
    //             dragDom.style.height = 'auto'
    //             dragDom.style.width = nowWidth + 'px'
    //             dragDom.style.marginTop = nowMarginTop
    //             isFullScreen = false
    //             dialogHeaderEl.style.cursor = 'move'
    //             dialogHeaderEl.onmousedown = moveDown
    //         }
    //     }
    //     dragDom.onmousemove = function (e) {
    //         // let moveE = e
    //         if (
    //             e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 ||
    //             dragDom.offsetLeft + 10 > e.clientX
    //         ) {
    //             dragDom.style.cursor = 'w-resize'
    //         } else if (
    //             el.scrollTop + e.clientY >
    //             dragDom.offsetTop + dragDom.clientHeight - 10
    //         ) {
    //             dragDom.style.cursor = 's-resize'
    //         } else {
    //             dragDom.style.cursor = 'default'

    //             dragDom.onmousedown = null
    //         }
    //         dragDom.onmousedown = e => {
    //             const clientX = e.clientX
    //             const clientY = e.clientY
    //             const elW = dragDom.clientWidth
    //             const elH = dragDom.clientHeight
    //             const EloffsetLeft = dragDom.offsetLeft
    //             const EloffsetTop = dragDom.offsetTop
    //             dragDom.style.userSelect = 'none'
    //             const ELscrollTop = el.scrollTop
    //             // 判断点击的位置是不是为头部
    //             if (
    //                 clientX > EloffsetLeft &&
    //                 clientX < EloffsetLeft + elW &&
    //                 clientY > EloffsetTop &&
    //                 clientY < EloffsetTop + 100
    //             ) {
    //                 // 如果是头部在此就不做任何动作，以上有绑定dialogHeaderEl.onmousedown = moveDown;
    //             } else {
    //                 document.onmousemove = function (e) {
    //                     // 移动时禁用默认事件
    //                     e.preventDefault()
    //                     // 左侧鼠标拖拽位置
    //                     if (clientX > EloffsetLeft && clientX < EloffsetLeft + 10) {
    //                         // 往左拖拽
    //                         if (clientX > e.clientX) {
    //                             dragDom.style.width = elW + (clientX - e.clientX) * 2 + 'px'
    //                         }
    //                         // 往右拖拽
    //                         if (clientX < e.clientX) {
    //                             if (dragDom.clientWidth < minWidth) {
    //                                 console.log()
    //                             } else {
    //                                 dragDom.style.width = elW - (e.clientX - clientX) * 2 + 'px'
    //                             }
    //                         }
    //                     }
    //                     // 右侧鼠标拖拽位置
    //                     if (
    //                         clientX > EloffsetLeft + elW - 10 &&
    //                         clientX < EloffsetLeft + elW
    //                     ) {
    //                         // 往左拖拽
    //                         if (clientX > e.clientX) {
    //                             if (dragDom.clientWidth < minWidth) {
    //                                 console.log()
    //                             } else {
    //                                 dragDom.style.width = elW - (clientX - e.clientX) * 2 + 'px'
    //                             }
    //                         }
    //                         // 往右拖拽
    //                         if (clientX < e.clientX) {
    //                             dragDom.style.width = elW + (e.clientX - clientX) * 2 + 'px'
    //                         }
    //                     }
    //                     // 底部鼠标拖拽位置
    //                     if (
    //                         ELscrollTop + clientY > EloffsetTop + elH - 20 &&
    //                         ELscrollTop + clientY < EloffsetTop + elH
    //                     ) {
    //                         // 往上拖拽
    //                         if (clientY > e.clientY) {
    //                             if (dragDom.clientHeight < minHeight) {
    //                                 console.log()
    //                             } else {
    //                                 dragDom.style.height = elH - (clientY - e.clientY) * 2 + 'px'
    //                             }
    //                         }
    //                         // 往下拖拽
    //                         if (clientY < e.clientY) {
    //                             dragDom.style.height = elH + (e.clientY - clientY) * 2 + 'px'
    //                         }
    //                     }
    //                 }
    //                 // 拉伸结束
    //                 document.onmouseup = function (e) {
    //                     document.onmousemove = null

    //                     document.onmouseup = null
    //                 }
    //             }
    //         }
    //     }
    // },

    mounted(el, binding) {
        // body当前宽度
        // const screenWidth = document.body.clientWidth;
        // // body高度
        // const screenHeight = document.documentElement.clientHeight;
        // 拖拽按钮
        console.log('1223', binding.value);

        // const DragButton = el.querySelector(binding.value.DragButton);

        console.log(el);

        // DragButton.style.cssText += ';cursor:move;';



        // 拖拽窗口 DragVindow
        // const DragVindow = el.querySelector(binding.value.DragVindow)
        // // 如果是自定义组件 设置窗口默认居中
        // if (binding.value.custom) {
        //     const [left, top] = [screenWidth - DragVindow.offsetWidth, screenHeight - DragVindow.offsetHeight]
        //     DragVindow.style.cssText += `;left:${left / 2}px;top:${top / 2}px;`
        // }
        // const sty = (function () {
        //     if ((window.document as any).currentStyle) {
        //         return (dom, attr) => dom.currentStyle[attr]
        //     } else {
        //         return (dom, attr) => getComputedStyle(dom)[attr]
        //     }
        // })()

        // 按下鼠标处理事件
        // DragButton.onmousedown = (e) => {
        //     // 鼠标按下，计算当前元素距离可视区的距离
        //     const disX = e.clientX - DragButton.offsetLeft
        //     const disY = e.clientY - DragButton.offsetTop

        //     const dragDomWidth = DragVindow.offsetWidth // 对话框宽度
        //     const dragDomheight = DragVindow.offsetHeight // 对话框高度

        //     const minDragDomLeft = DragVindow.offsetLeft
        //     const maxDragDomLeft = screenWidth - DragVindow.offsetLeft - dragDomWidth

        //     const minDragDomTop = DragVindow.offsetTop
        //     const maxDragDomTop = screenHeight - DragVindow.offsetTop - dragDomheight

        //     let styL = sty(DragVindow, 'left')
        //     let styT = sty(DragVindow, 'top')
        //     if (styL.includes('%')) {
        //         styL = +document.body.clientWidth * (+styL.replace(/%/g, '') / 100)
        //         styT = +document.body.clientHeight * (+styT.replace(/%/g, '') / 100)
        //     } else {
        //         styL = +styL.replace(/px/g, '')
        //         styT = +styT.replace(/px/g, '')
        //     }
        //     document.onmousemove = (e) => {
        //         // 通过事件委托，计算移动的距离
        //         let left = e.clientX - disX
        //         let top = e.clientY - disY

        //         // 边界处理
        //         if (-(left) > minDragDomLeft) {
        //             left = -(minDragDomLeft)
        //         } else if (left > maxDragDomLeft) {
        //             left = maxDragDomLeft
        //         }

        //         if (-(top) > minDragDomTop) {
        //             top = -(minDragDomTop)
        //         } else if (top > maxDragDomTop) {
        //             top = maxDragDomTop
        //         }
        //         // 设置当前元素
        //         DragVindow.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
        //     }
        //     document.onmouseup = () => {
        //         document.onmousemove = null
        //         document.onmouseup = null
        //     }
        // }
    }

    // mounted(el) {
    //     // binding.arg
    //     // binding.value
    //     // 可视窗口的宽度
    //     const clientWidth = document.documentElement.clientWidth
    //     // 可视窗口的高度
    //     const clientHeight = document.documentElement.clientHeight
    //     // 记录坐标
    //     let domset = {
    //         x: clientWidth / 4, // 默认width 50%
    //         y: clientHeight * 15 / 100  // 根据 15vh 计算
    //     }

    //     // 弹窗的容器
    //     const domDrag = el.firstElementChild.firstElementChild

    //     console.log(domDrag);
        

    //     // 重新设置上、左距离
    //     domDrag.style.marginTop = domset.y + 'px'
    //     domDrag.style.marginLeft = domset.x + 'px'

    //     // 记录拖拽开始的光标坐标，0 表示没有拖拽
    //     let start = { x: 0, y: 0 }
    //     // 移动中记录偏移量
    //     let move = { x: 0, y: 0 }

    //     // 鼠标按下，开始拖拽
    //     domDrag.onmousedown = (e) => {
    //         // 判断对话框是否重新打开
    //         if (domDrag.style.marginTop === '15vh') {
    //             // 重新打开，设置 domset.y  top
    //             domset.y = clientHeight * 15 / 100
    //         }
    //         start.x = e.clientX
    //         start.y = e.clientY
    //         domDrag.style.cursor = 'move' // 改变光标形状
    //     }

    //     // 鼠标移动，实时跟踪
    //     domDrag.onmousemove = (e) => {
    //         if (start.x === 0) { // 不是拖拽状态
    //             return
    //         }
    //         move.x = e.clientX - start.x
    //         move.y = e.clientY - start.y

    //         // 初始位置 + 拖拽距离
    //         domDrag.style.marginLeft = (domset.x + move.x) + 'px'
    //         domDrag.style.marginTop = (domset.y + move.y) + 'px'
    //     }
    //     // 鼠标抬起，结束拖拽
    //     domDrag.onmouseup = (e) => {
    //         move.x = e.clientX - start.x
    //         move.y = e.clientY - start.y

    //         // 记录新坐标，作为下次拖拽的初始位置
    //         domset.x += move.x
    //         domset.y += move.y
    //         domDrag.style.cursor = '' // 恢复光标形状
    //         domDrag.style.marginLeft = domset.x + 'px'
    //         domDrag.style.marginTop = domset.y + 'px'
    //         // 结束拖拽
    //         start.x = 0
    //     }
    // }
}

