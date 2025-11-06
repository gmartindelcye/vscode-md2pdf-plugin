# MD2PDF Exporter

A powerful VS Code and VSCodium extension that converts Markdown files with Mermaid diagrams to professionally formatted PDF documents with consistent styling and layout.

## ✨ Features

- **One-Click Conversion**: Convert individual Markdown files or batch process multiple files
- **Mermaid Diagram Support**: Automatically renders Mermaid diagrams as images in the PDF
- **Customizable Styling**: Configure fonts, sizes, colors, and layout through a simple configuration file
- **Headers & Footers**: Add dynamic content like page numbers, dates, document titles, and images
- **Consistent Branding**: Ensure all generated documents follow the same styling guidelines
- **Flexible Sizing**: Control Mermaid diagram dimensions to fit your document layout
- **Dark/Light Themes**: Support for different Mermaid themes to match your document style

## 🚀 Installation

### VS Code

1. Open VS Code
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "MD2PDF Exporter"
4. Click Install

### VSCodium

1. Open VSCodium
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Download the VSIX file from releases and install using "Install from VSIX..."

## 📖 Quick Start

1. **Create a configuration file** in your workspace root:

   ```bash
   touch md2pdf.config.json
   ```

2. **Add basic configuration**:

   ```json
   {
     "styles": {
       "fontFamily": "Arial, sans-serif",
       "baseFontSize": "12pt"
     }
   }
   ```

3. **Right-click on any Markdown file** in the Explorer and select "Export to PDF"

## ⚙️ Configuration

Create a `md2pdf.config.json` file in your workspace root with the following structure:

### Complete Configuration Example

```json
{
  "pdf": {
    "format": "A4",
    "margin": {
      "top": "2cm",
      "bottom": "2cm",
      "right": "2cm",
      "left": "2cm"
    }
  },
  "styles": {
    "fontFamily": "Arial, sans-serif",
    "baseFontSize": "12pt",
    "h1": {
      "fontSize": "24pt",
      "color": "#2C3E50",
      "textAlign": "center",
      "marginBottom": "1cm"
    },
    "h2": {
      "fontSize": "18pt",
      "color": "#2C3E50",
      "borderBottom": "1px solid #eee",
      "paddingBottom": "0.3cm"
    },
    "h3": {
      "fontSize": "14pt",
      "color": "#2C3E50"
    },
    "code": {
      "fontFamily": "Courier New, monospace",
      "backgroundColor": "#f8f8f8",
      "padding": "0.2em 0.4em",
      "borderRadius": "3px"
    },
    "blockquote": {
      "borderLeft": "4px solid #ddd",
      "paddingLeft": "1em",
      "color": "#666",
      "fontStyle": "italic"
    }
  },
  "header": {
    "enabled": true,
    "height": "2cm",
    "contents": "<div style='text-align: center; border-bottom: 1px solid #eee; padding-bottom: 0.5cm;'><strong>{{document_title}}</strong> - Page {{page_number}} of {{total_pages}}</div>"
  },
  "footer": {
    "enabled": true,
    "height": "1.5cm",
    "contents": "<div style='text-align: center; font-size: 10pt; color: #666;'>Generated on {{current_date}} | <img src='file:///absolute/path/to/logo.png' height='15' style='vertical-align: middle;' /> Company Name</div>"
  },
  "mermaid": {
    "theme": "default",
    "width": "100%",
    "backgroundColor": "transparent",
    "maxHeight": "400px"
  }
}
```

### Configuration Options

#### PDF Settings

- `format`: Page size (A4, Letter, Legal, etc.)
- `margin`: Page margins in cm, mm, or inches

#### Style Settings

- `fontFamily`: Font family for text
- `baseFontSize`: Base font size
- `h1`-`h6`: Styles for headings
- `code`: Styles for inline and block code
- `blockquote`: Styles for blockquotes

#### Header/Footer Settings

- `enabled`: Enable/disable header or footer
- `height`: Height of header/footer area
- `contents`: HTML content with supported placeholders:
  - `{{page_number}}`: Current page number
  - `{{total_pages}}`: Total number of pages
  - `{{current_date}}`: Current date
  - `{{document_title}}`: Document title (first H1)
  - `{{file_name}}`: Markdown file name

#### Mermaid Settings

- `theme`: Mermaid theme (default, dark, forest, neutral)
- `width`: Diagram width (px, %, cm)
- `maxHeight`: Maximum diagram height
- `backgroundColor`: Background color for diagrams

## 🎯 Usage

### Method 1: Right-Click Menu

1. Navigate to the file in Explorer
2. Right-click on a Markdown file (.md)
3. Select "Export to PDF"

### Method 2: Command Palette

1. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "MD2PDF: Export current document to PDF"
3. Press Enter

### Method 3: Batch Export

1. Select multiple Markdown files in Explorer
2. Right-click and select "Export to PDF"
3. Or use Command Palette: "MD2PDF: Export selected documents to PDF"

## 📋 Supported Mermaid Diagram Types

- Flowcharts
- Sequence diagrams
- Class diagrams
- State diagrams
- Entity Relationship diagrams
- User Journey maps
- Gantt charts
- Pie charts
- Quadrant charts
- Requirement diagrams
- Git graphs
- Mindmaps
- Timeline

## 🐛 Troubleshooting

### Common Issues

1. **Mermaid diagrams not rendering**

   - Check Mermaid syntax for errors
   - Ensure diagrams are wrapped in ` ```mermaid ` code blocks

2. **Fonts not applying correctly**

   - Use web-safe fonts or provide absolute paths to font files
   - Check font family names are correct

3. **Images in header/footer not displaying**

   - Use absolute file paths with `file:///` protocol
   - Ensure image files are accessible

4. **Page breaks in wrong places**
   - Adjust margins and element spacing in configuration
   - Use CSS `page-break-before` and `page-break-after` in custom styles

### Viewing Logs

1. Open Output panel (`Ctrl+Shift+U` or `Cmd+Shift+U`)
2. Select "MD2PDF Exporter" from the dropdown
3. Check for any error messages or warnings

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Clone the repository
2. Run `npm install`
3. Open in VS Code
4. Press `F5` to start debugging

### Building from Source

```bash
npm run compile
npm run package
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

- [ ] Real-time PDF preview
- [ ] Graphical configuration editor
- [ ] Support for PlantUML and other diagram languages
- [ ] Custom CSS injection
- [ ] Export to other formats (Word, HTML)
- [ ] Template system for different document types

## 📞 Support

- 📧 **Email**: gmartindelcye@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/gmartindelcye/vscode-md2pdf-plugin/issues)
- 📚 **Documentation**: [Wiki](https://github.com/gmartindelcye/vscode-md2pdf-plugin/wiki)

## 🙏 Acknowledgments

- [Mermaid.js](https://mermaid.js.org/) for the excellent diagramming library
- [Puppeteer](https://pptr.dev/) for PDF generation capabilities
- VS Code team for the extensible editor platform

---

**Note**: This extension requires an internet connection for the first run to download required dependencies. All subsequent conversions happen offline.
