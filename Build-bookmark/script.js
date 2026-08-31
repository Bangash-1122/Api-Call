// Main conversion function
function convertMarkdown(inputValue) {
    // Accept input parameter or get from DOM
    const markdownInput = inputValue || document.getElementById('markdown-input').value;

    // Split input into lines for processing
    const lines = markdownInput.split('\n');
    let htmlOutput = '';

    // Process each line
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Skip empty lines
        if (line.trim() === '') {
            htmlOutput += '\n';
            continue;
        }

        // Convert headings (h1, h2, h3) - must be at start of line or preceded by spaces
        const headingMatch = line.match(/^(\s*)(#{1,3})\s+(.+)$/);
        if (headingMatch) {
            const spaces = headingMatch[1];
            const hashes = headingMatch[2];
            const text = headingMatch[3];

            // Only convert if # is at beginning of line or after spaces only
            if (spaces === '' || /^\s+$/.test(spaces)) {
                const level = hashes.length;
                const headingText = processInlineMarkdown(text);
                htmlOutput += `${spaces}<h${level}>${headingText}</h${level}>`;
                continue;
            }
        }

        // Convert blockquotes - must be at start of line or preceded by spaces
        const blockquoteMatch = line.match(/^(\s*)>\s*(.+)$/); // FIXED: allow optional space after >
        if (blockquoteMatch) {
            const spaces = blockquoteMatch[1];
            const text = blockquoteMatch[2];

            // Only convert if > is at beginning of line or after spaces only
            if (spaces === '' || /^\s+$/.test(spaces)) {
                const quoteText = processInlineMarkdown(text);
                htmlOutput += `${spaces}<blockquote>${quoteText}</blockquote>\n`;
                continue;
            }
        }

        // Process inline markdown for regular lines
        htmlOutput += processInlineMarkdown(line);
    }

    return htmlOutput.trim();
}

// Process inline markdown (bold, italic, links, images)
function processInlineMarkdown(text) {
    // Convert images: ![alt-text](image-source)
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

    // Convert links: [link text](URL)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Convert bold with double asterisks: **bold** - FIXED: allow * inside bold
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*\*([^*]+(?:\*[^*]+)*)\*\*/g, '<strong>$1</strong>');

    // Convert bold with double underscores: __bold__
    text = text.replace(/__([^_]+?)__/g, '<strong>$1</strong>');

    // Convert italic with single asterisks: *italic* - FIXED: handle within bold tags
    text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

    // Convert italic with single underscores: _italic_
    text = text.replace(/_([^_]+?)_/g, '<em>$1</em>');

    return text;
}

// Update HTML output and preview
function updateOutput() {
    const htmlOutput = convertMarkdown();
    document.getElementById('html-output').textContent = htmlOutput;
    document.getElementById('preview').innerHTML = htmlOutput;
}

// Example Markdown including the test case
const exampleMarkdown = `# Sample Markdown Document

## Introduction
This is a **sample Markdown document** to demonstrate the converter capabilities.

### Formatting Examples
You can use *italic* and **bold** text formatting. Also __alternative bold__ and _alternative italic_.

### Test Case for Nested Formatting
> **this is a *quote***

### Links and Images
Here's a link to [freeCodeCamp](https://www.freecodecamp.org) and an image:

![Markdown Logo](https://markdown-here.com/img/icon256.png)

### Blockquotes
> This is a blockquote with **bold** and *italic* text inside.
> 
> Blockquotes can span multiple lines.

### More Headings
# Main Title
## Subtitle
### Sub-subtitle

### Mixed Formatting
You can combine **bold and *italic* text** within the same element.`;

// DOM event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial conversion
    updateOutput();

    // Convert button
    document.getElementById('convert-btn').addEventListener('click', updateOutput);

    // Clear button
    document.getElementById('clear-btn').addEventListener('click', function() {
        document.getElementById('markdown-input').value = '';
        updateOutput();
    });

    // Example button
    document.getElementById('example-btn').addEventListener('click', function() {
        document.getElementById('markdown-input').value = exampleMarkdown;
        updateOutput();
    });

    // Real-time conversion as user types
    document.getElementById('markdown-input').addEventListener('input', updateOutput);

    // Add click event to markdown guide examples
    document.querySelectorAll('.markdown-example').forEach(example => {
        example.addEventListener('click', function() {
            const markdownInput = document.getElementById('markdown-input');
            markdownInput.value += '\n' + this.textContent;
            updateOutput();
            markdownInput.focus();
        });
    });

    // Test the specific test case
    console.log("Test case: > **this is a *quote***");
    console.log("Expected: <blockquote><strong>this is a <em>quote</em></strong></blockquote>");

    // Run a test - FIXED: call convertMarkdown with parameter
    const testInput = "> **this is a *quote***";
    const testResult = convertMarkdown(testInput);
    console.log("Actual result:", testResult);
    console.log("Test passed:", testResult === "<blockquote><strong>this is a <em>quote</em></strong></blockquote>");
});