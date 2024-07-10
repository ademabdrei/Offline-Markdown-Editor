
# Offline Markdown Editor

The Offline Markdown Editor is a web-based application that allows users to write and preview Markdown content without an internet connection. It also provides features to download the Markdown content as a file or convert it to a Word document.

## Demo
You can try the Offline Markdown Editor live at: [https://offline-markdown-editor-tool.netlify.app](https://offline-markdown-editor-tool.netlify.app)

## Features
- Write Markdown content in a text area
- Live preview of the Markdown content
- Word count display
- Download the Markdown content as a file
- Convert the Markdown content to a Word document
- Clear the editor
- Copy the Markdown content as plain text

## Technologies Used
- HTML
- CSS
- JavaScript
- [Marked.js](https://marked.js.org/) (for Markdown to HTML conversion)
- [html-docx-js](https://github.com/evidenceprime/html-docx-js) (for converting HTML to Word document)

## How to Use
1. Open the Offline Markdown Editor in your web browser.
2. Start typing your Markdown content in the text area.
3. The Markdown preview will update in real-time as you type.
4. Use the provided buttons to perform the following actions:
   - **Download Markdown**: Download the Markdown content as a file.
   - **Download Word Document**: Convert the Markdown content to a Word document and download it.
   - **Clear Editor**: Clear the Markdown content from the text area.
   - **Copy Markdown**: Copy the Markdown content as plain text to the clipboard.
5. The word count will be displayed below the text area.

## Code Explanation
The Offline Markdown Editor is built using HTML, CSS, and JavaScript. It utilizes the following libraries:

1. **Marked.js**: This library is used to convert the Markdown content to HTML, which is then displayed in the preview area.
2. **html-docx-js**: This library is used to convert the HTML content to a Word document, which can then be downloaded by the user.

The main JavaScript functions include:

- `updatePreview()`: This function updates the Markdown preview based on the content in the text area.
- `downloadMarkdown()`: This function generates a Markdown file and triggers the download.
- `downloadWord()`: This function converts the Markdown content to HTML and generates a Word document for download.
- `clearEditor()`: This function clears the Markdown content from the text area and resets the preview.
- `copyMarkdown()`: This function copies the Markdown content as plain text to the clipboard.

The HTML structure includes the text area, preview area, and the various buttons for the different functionalities. The CSS styles the layout and appearance of the application.

## Getting Started
To use the Offline Markdown Editor, simply open the `index.html` file in a web browser. No server-side setup is required, as the application is entirely client-side.

## Contributions
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request on the [GitHub repository](https://github.com/your-username/offline-markdown-editor).
