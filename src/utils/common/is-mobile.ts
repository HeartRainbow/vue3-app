//判断是否是移动端 
export function isMobile() {
    return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
}