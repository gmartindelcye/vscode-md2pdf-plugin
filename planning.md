# MD2PDF Exporter - Project Planning

## Technology Stack

### Core Technologies

- **Extension Platform**: VS Code Extension API
- **Language**: TypeScript (compiled to JavaScript)
- **PDF Generation**: Puppeteer (headless Chrome)
- **Markdown Processing**: Marked.js
- **Diagram Rendering**: Mermaid.js
- **Build Tool**: npm scripts with TypeScript compiler

### Key Dependencies

```json
{
  "dependencies": {
    "puppeteer": "^21.0.0+",
    "marked": "^9.0.0+",
    "mermaid": "^10.0.0+"
  },
  "devDependencies": {
    "@types/vscode": "^1.85.0+",
    "typescript": "^5.0.0+",
    "vsce": "^2.15.0+"
  }
}
```

## System Architecture

### High-Level Architecture

```
Markdown File (.md)
        ↓
VS Code Extension (TypeScript)
        ↓
Marked.js (Markdown → HTML)
        ↓
Mermaid.js (Diagrams → SVG)
        ↓
HTML + CSS + Images
        ↓
Puppeteer (HTML → PDF)
        ↓
PDF File (.pdf)
```

### Component Architecture

#### 1. Extension Core (`src/extension.ts`)

- VS Code command registration
- File system event handlers
- Configuration management
- Error handling and logging

#### 2. Configuration Manager (`src/config/`)

- Load and validate `md2pdf.config.json`
- Apply default values
- Schema validation
- Configuration merging (workspace vs user)

#### 3. Markdown Processor (`src/processors/markdown.ts`)

- Parse Markdown with Marked.js
- Extract Mermaid code blocks
- Generate table of contents
- Handle special elements (code blocks, tables, etc.)

#### 4. Mermaid Renderer (`src/processors/mermaid.ts`)

- Initialize Mermaid.js
- Render diagrams to SVG
- Apply Mermaid themes
- Handle diagram sizing and scaling

#### 5. PDF Generator (`src/generators/pdf.ts`)

- Puppeteer instance management
- HTML template generation
- PDF rendering with headers/footers
- Page break optimization

#### 6. Template Engine (`src/templates/`)

- HTML template with CSS styling
- Header/footer template system
- Dynamic placeholder replacement
- Asset management (images, fonts)

## Development Approach

### Phase 1: Core MVP (Weeks 1-3)

1. **Week 1**: Basic extension scaffolding

   - VS Code extension setup
   - Command palette integration
   - Basic Markdown to HTML conversion

2. **Week 2**: Mermaid integration

   - Mermaid.js rendering pipeline
   - Diagram detection and processing
   - Basic error handling

3. **Week 3**: PDF generation
   - Puppeteer setup and configuration
   - Basic PDF output
   - File I/O operations

### Phase 2: Styling & Configuration (Weeks 4-6)

4. **Week 4**: Configuration system

   - JSON configuration schema
   - Configuration validation
   - Default value management

5. **Week 5**: Styling engine

   - CSS template system
   - Font and size configuration
   - Responsive design for diagrams

6. **Week 6**: Headers and footers
   - Dynamic content system
   - Page numbering
   - Image support in headers/footers

### Phase 3: Polish & Optimization (Weeks 7-8)

7. **Week 7**: Batch processing and performance

   - Multiple file conversion
   - Progress reporting
   - Error recovery

8. **Week 8**: Testing and documentation
   - Unit tests
   - Integration tests
   - User documentation
   - Marketplace publication

## File Structure

```
vscode-md2pdf-plugin/
├── src/
│   ├── extension.ts          # Main extension entry point
│   ├── config/
│   │   ├── configManager.ts
│   │   └── schema.ts
│   ├── processors/
│   │   ├── markdown.ts
│   │   └── mermaid.ts
│   ├── generators/
│   │   └── pdf.ts
│   ├── templates/
│   │   ├── base.html
│   │   └── styles.css
│   └── utils/
│       ├── fileSystem.ts
│       └── logger.ts
├── 01-Markdown_to_PDF_Exporter_vscode_plugin_PRD.md
├── package.json
├── tsconfig.json
├── md2pdf.config.json       # Example configuration
├── README.md
├── planning.md              # This file
├── tasks.md                 # Current task tracking
└── assistant_rules.md       # Project guidelines
```

## Key Technical Decisions

### 1. Puppeteer over other PDF libraries

- **Reason**: Best CSS support, consistent with web standards
- **Trade-off**: Larger bundle size, requires Chrome

### 2. Configuration via JSON file

- **Reason**: Familiar to VS Code users, version control friendly
- **Trade-off**: Less user-friendly than GUI configuration

### 3. Mermaid.js server-side rendering

- **Reason**: Consistent rendering, no browser dependencies
- **Trade-off**: More complex setup, potential performance issues

### 4. TypeScript over JavaScript

- **Reason**: Better maintainability, type safety, VS Code integration
- **Trade-off**: Build step required, learning curve for some

## Risk Assessment

### High Risk

- **Mermaid rendering performance** with large diagrams
- **Puppeteer dependency management** in different environments

### Medium Risk

- **CSS compatibility** across different PDF engines
- **Configuration schema evolution** and backward compatibility

### Low Risk

- **VS Code API stability**
- **Markdown processing complexity**

## Success Criteria

### Technical Success

- [ ] Extension loads without errors in VS Code/Codium
- [ ] Mermaid diagrams render correctly in PDF
- [ ] Configuration changes reflect in output
- [ ] Batch processing completes without memory leaks

### User Success

- [ ] Users can generate PDF with one click
- [ ] Configuration is intuitive and well-documented
- [ ] Performance meets expectations (<10s for typical documents)
- [ ] Error messages are helpful and actionable

## Current Project Status

**Phase**: Planning and initial setup
**Next Priority**: Set up basic extension structure and development environment

## Development Environment Setup

1. Initialize npm project in `vscode-md2pdf-plugin` folder
2. Install VS Code extension generator
3. Set up TypeScript configuration
4. Create basic extension scaffolding
5. Install core dependencies (Puppeteer, Marked, Mermaid)

## Dependencies to Investigate

- **VS Code Extension API**: Commands, file system, configuration
- **Puppeteer**: PDF generation options, performance tuning
- **Mermaid.js**: API usage, theme customization, error handling
- **Marked.js**: Extensions for special Markdown features

This plan provides a roadmap for developing the MD2PDF Exporter extension while maintaining focus on the core value proposition: simple, consistent PDF generation from Markdown with Mermaid diagrams.
