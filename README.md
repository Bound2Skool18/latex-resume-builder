# LaTeX Resume Builder

A structured approach to building LaTeX-based resumes with JSON schema as the single source of truth.

## Project Goal

This project aims to provide a flexible and maintainable system for generating professional resumes in LaTeX format. By using a JSON schema as the foundation, users can:

- Define their resume data once in a structured, human-readable format
- Generate multiple resume variations using different LaTeX templates
- Maintain consistency across different resume versions
- Easily update and version control their resume data

## Current Status

**Phase 1: Foundation (Current)**

This is a starter repository containing:
- `resumeSchema.json` - The structured schema defining resume data format
- `/templates` - Directory for LaTeX template files (to be populated)
- `/renderer` - Directory for rendering engine code (to be implemented)

## Future Roadmap

### Phase 2: Template System
- Create LaTeX templates that consume the JSON schema
- Support multiple professional resume styles
- Implement template variables and conditional sections

### Phase 3: Rendering Engine
- Build a renderer to compile JSON data + LaTeX templates into PDF
- Support command-line interface for resume generation
- Enable template customization and theming

### Phase 4: Advanced Features
- Web-based UI for editing resume data
- Real-time preview of generated resumes
- AI-powered content suggestions and improvements
- Export to multiple formats (PDF, HTML, Markdown)

## Getting Started

Currently, this repository serves as a foundation. To use it:

1. Review `resumeSchema.json` to understand the data structure
2. Create your own resume data following the schema format
3. Stay tuned for template and rendering implementations

## Contributing

Contributions are welcome! Future areas for contribution include:
- LaTeX template designs
- Rendering engine implementation
- Documentation improvements
- Schema enhancements

## License

This project is open source and available under the MIT License.