# Project Requirements Document: Markdown to PDF Exporter (MD2PDF)

**Document Version:** 1.0
**Date:** October 26, 2023
**Project:** VS Code/Codium Extension: "MD2PDF Exporter"

### 1. Overview & Vision

The **MD2PDF Exporter** is a VS Code/Codium extension designed to convert Markdown (`.md`) files containing Mermaid diagrams into professionally formatted PDF documents. The core vision is to provide a seamless, configurable, and repeatable workflow for generating PDFs with consistent branding and layout, directly from the editor, without relying on external online services.

### 2. Problem Statement

Users frequently need to share Markdown documentation (e.g., technical specs, architecture diagrams, reports) in a universal format like PDF. Manually converting this content is tedious and error-prone:

- Mermaid diagrams must be manually screenshot and embedded.
- Consistent styling (fonts, headers, footers) across multiple documents is difficult to achieve.
- Existing tools often lack fine-grained control over PDF appearance or require complex command-line setups.

### 3. User Stories

#### Epic 1: Core Conversion Functionality

|     ID     | As a...          | I want to...                                                                            | So that I can...                                                 |
| :--------: | :--------------- | :-------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| **US-101** | Technical Writer | convert a single open Markdown file to PDF with one click                               | quickly generate a PDF for review without leaving my editor.     |
| **US-102** | Technical Writer | convert multiple selected Markdown files in the Explorer to PDF in a batch process      | generate documentation for an entire project or module at once.  |
| **US-103** | Developer        | have all Mermaid code blocks in my document automatically rendered as images in the PDF | ensure my diagrams are included accurately without manual steps. |

#### Epic 2: Styling and Configuration

|     ID     | As a...          | I want to...                                                                                                       | So that I can...                                                        |
| :--------: | :--------------- | :----------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **US-201** | Team Lead        | define all PDF styling (fonts, sizes, colors, margins) in a single configuration file (`md2pdf.config.json`)       | enforce a consistent corporate identity across all generated documents. |
| **US-202** | Technical Writer | configure different font families and sizes for normal text, main titles (`H1`), headings (`H2-H6`), and subtitles | create a clear and professional visual hierarchy in my documents.       |
| **US-203** | Technical Writer | define a header and footer for the PDF, including dynamic content like page numbers, document title, and date      | make the PDFs more formal and easier to navigate.                       |
| **US-204** | Technical Writer | include images (like a company logo) in the header or footer                                                       | brand all generated PDFs appropriately.                                 |

#### Epic 3: Advanced Mermaid & Layout Handling

|     ID     | As a...            | I want to...                                                                                             | So that I can...                                                                     |
| :--------: | :----------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **US-301** | Software Architect | control the rendering size (width/height) of the generated Mermaid images within the PDF                 | ensure complex diagrams are legible and fit the page layout correctly.               |
| **US-302** | Developer          | specify a custom theme (e.g., `dark`, `forest`) for the Mermaid diagrams                                 | make the diagrams match the visual style of the rest of my document or presentation. |
| **US-303** | User               | the extension to automatically handle page breaks, preventing diagrams from being split across two pages | maintain the readability and professional appearance of the PDF.                     |

### 4. Technical Requirements

#### 4.1. Core Functionality & Architecture

- **Platform:** Must be built as a standard VS Code/Codium extension using the Extension API.
- **Conversion Engine:** Utilize **Puppeteer** (or a similar headless browser library) to render HTML/CSS to PDF. This provides the most control over styling and layout.
- **Markdown Parsing:** Use a robust Markdown parser (e.g., `marked`) to convert Markdown to HTML.
- **Mermaid Rendering:** Integrate the **Mermaid.js** library. The extension must be able to:
  1.  Detect Mermaid code blocks (` ```mermaid `) in the source Markdown.
  2.  Use the Mermaid API to render these blocks to SVG/PNG images.
  3.  Inject the generated images into the HTML that is passed to Puppeteer.

#### 4.2. Configuration System

- **File Format:** A JSON file named `md2pdf.config.json` at the workspace root.
- **Schema:** The configuration file must support the following properties:
  ```json
  {
    "pdf": {
      "format": "A4",
      "margin": { "top": "2cm", "bottom": "2cm", "right": "2cm", "left": "2cm" }
    },
    "styles": {
      "fontFamily": "Arial, sans-serif",
      "baseFontSize": "12pt",
      "h1": { "fontSize": "24pt", "color": "#2C3E50", "textAlign": "center" },
      "h2": { "fontSize": "18pt", "color": "#2C3E50" },
      "h3": { "fontSize": "14pt", "color": "#2C3E50" },
      "code": {
        "fontFamily": "Courier New, monospace",
        "backgroundColor": "#f4f4f4"
      }
      // ... styles for h4, h5, h6, blockquote, etc.
    },
    "header": {
      "enabled": true,
      "height": "2cm",
      "contents": "<div style='text-align: center;'><strong>{{document_title}}</strong> - Page {{page_number}} of {{total_pages}}</div>"
    },
    "footer": {
      "enabled": true,
      "height": "1.5cm",
      "contents": "<div style='text-align: center; font-size: 10pt;'>Generated on {{current_date}} | <img src='file:///absolute/path/to/logo.png' height='20' /></div>"
    },
    "mermaid": {
      "theme": "default",
      "width": "100%",
      "backgroundColor": "transparent"
    }
  }
  ```
- **Dynamic Content:** Support for placeholders in header/footer `contents`:
  - `{{page_number}}`, `{{total_pages}}`
  - `{{current_date}}`, `{{document_title}}`
  - `{{file_name}}`

#### 4.3. User Interface (UI/UX)

- **VS Code Commands:** Provide commands in the Command Palette (`Ctrl+Shift+P`):
  - `MD2PDF: Export current document to PDF`
  - `MD2PDF: Export selected documents to PDF`
  - `MD2PDF: Create Configuration File`
- **Context Menus:** Add "Export to PDF" options to the right-click context menu for files and folders in the Explorer.
- **Output Channel:** Use a dedicated VS Code output channel ("MD2PDF") to log the conversion process, including success messages and any errors (e.g., Mermaid syntax errors, missing config file).

#### 4.4. Error Handling & Performance

- **Graceful Failure:** If a Mermaid diagram fails to render, the process should not halt. Instead, it should log a clear error and place a placeholder error message in the PDF.
- **Configuration Validation:** Validate the `md2pdf.config.json` file against a JSON schema and provide helpful error messages if it's invalid.
- **Performance:** For documents with many large diagrams, the conversion should provide progress feedback. Batch operations should process files sequentially to avoid overloading the system.

### 5. Success Metrics

1.  **Conversion Reliability:** 99% of valid Markdown files with valid Mermaid syntax are successfully converted to PDF without manual intervention.
2.  **Performance:** The conversion of a standard 10-page document with 5 Mermaid diagrams completes in under 10 seconds on a mid-range development machine.
3.  **Configurability:** 100% of the defined styling and layout options in the configuration file are correctly applied to the generated PDF.
4.  **Usability:** A new user can install the extension and generate their first PDF within 5 minutes by following the README instructions.
5.  **Adoption:** The extension maintains a 4.5+ star rating in the VS Code Marketplace with positive reviews citing its reliability and configurability.

### 6. Out of Scope (For V1)

- Real-time preview of the PDF.
- A graphical UI for editing the configuration file (users will edit the JSON directly).
- Support for other diagramming languages (e.g., PlantUML).
- Custom CSS injection beyond the defined configuration schema.
- Export to other formats (e.g., Word, HTML).

---

This PRD provides a clear roadmap for development. The next steps would involve creating a technical design document, setting up the extension boilerplate, and beginning iterative development, starting with the core conversion (Epic 1).
