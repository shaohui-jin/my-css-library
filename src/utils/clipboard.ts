import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'
const clipboardSuccess = () => {
  ElMessage.success('复制成功')
}

const clipboardError = () => {
  ElMessage.error('复制失败')
}

const handleClipboard = (text: any, event: any) => {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  }) as any
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}

export default handleClipboard
