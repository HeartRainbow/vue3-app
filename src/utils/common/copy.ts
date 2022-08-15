export function copy(content: string) {
    let copy = (e) => {
        e.preventDefault()
        e.clipboardData.setData('text/plain', content)
        document.removeEventListener('copy', copy)
    }
    document.addEventListener('copy', copy)
    document.execCommand("Copy");
}