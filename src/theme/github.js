import hljs from '@/utils/highlight';
import markdownIt from '@/utils/markdown-it';

// style
import '@/assets/css/github-markdown';
import 'highlight.js/styles/github';

const markdownItInstance = markdownIt({
  highlight(str, lang) {
    let res = markdownItInstance.utils.escapeHtml(str);

    if (lang && hljs.getLanguage(lang)) {
      res = hljs.highlight(lang, str).value;
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

export default {
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(markdownItInstance, hljs);
  },
  markdownLoader(text) {
    return markdownItInstance.render(text);
  },
};