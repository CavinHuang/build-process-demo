import { defineComponent, h } from 'vue'

export default defineComponent({
  render() {
    const html = `<div style="color: red;">jsx innerHTML</div>`
    return <div innerHTML={html}></div>
  }
})