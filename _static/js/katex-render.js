// 在页面加载完成后调用 KaTeX auto-render 来渲染公式
document.addEventListener('DOMContentLoaded', function () {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      // 默认分隔符：行内 $...$ 或 \(...\)，块级 $$...$$ 或 \[...\]
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      // 忽略 pre, code, a 等标签内的内容
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    });
  }
});
