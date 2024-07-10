    const markdownInput = document.getElementById('markdownInput');
    const markdownPreview = document.getElementById('markdownPreview');
    const downloadMarkdownButton = document.getElementById('downloadMarkdownButton');
    const downloadWordButton = document.getElementById('downloadWordButton');
    const clearButton = document.getElementById('clearButton');
    const copyButton = document.getElementById('copyButton');
    const wordCount = document.getElementById('count');
  
    // Function to update preview
    function updatePreview() {
      const markdownContent = markdownInput.value;
      const convertedHtml = marked(markdownContent);
      markdownPreview.innerHTML = convertedHtml;
  
      // Update word count
      const words = markdownContent.match(/\S+/g);
      wordCount.textContent = words ? words.length : 0;
    }
  
    // Function to download Markdown
    function downloadMarkdown() {
      const markdownContent = markdownInput.value;
      const blob = new Blob([markdownContent], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'markdown_content.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  
    // Function to download Word document
    function downloadWord() {
      const markdownContent = markdownInput.value;
      const convertedHtml = marked(markdownContent);
      const blob = htmlDocx.asBlob(convertedHtml);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'markdown_content.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  
    // Function to clear editor
    function clearEditor() {
      markdownInput.value = '';
      markdownPreview.innerHTML = '';
      wordCount.textContent = '0';
    }
    function copyMarkdown() {
        const markdownPreviewContent = markdownPreview.innerHTML;
        const plainTextContent = markdownToPlainText(markdownPreviewContent);
      
        if (plainTextContent) {
            navigator.clipboard.writeText(plainTextContent)
                .then(() => {
                    console.log('Markdown preview copied to clipboard as plain text');
                })
                .catch(err => {
                    console.error('Failed to copy markdown preview as plain text: ', err);
                });
        } else {
            console.log('No content in markdown preview to copy');
        }
    }
    
    function markdownToPlainText(markdown) {
        // Replace heading syntax with plain text equivalent
        const headingRegex = /#+\s(.+?)\n/g;
        const plainText = markdown.replace(headingRegex, (match, p1) => {
            const level = match.match(/#+/)[0].length;
            const headingText = p1.trim();
            return `${'='.repeat(level)} ${headingText}\n`;
        });
    
        // Replace other Markdown formatting syntax if needed
    
        return plainText;
    }
    
  
    // Event listeners
    markdownInput.addEventListener('input', updatePreview);
    downloadMarkdownButton.addEventListener('click', downloadMarkdown);
    downloadWordButton.addEventListener('click', downloadWord);
    clearButton.addEventListener('click', clearEditor);
    copyButton.addEventListener('click', copyMarkdown);
