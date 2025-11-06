# Assistant Rules: MD2PDF Exporter Project

## Session Startup Protocol

1. **ALWAYS start by reading `planning.md`** to understand the current project state, recent developments, and any context from previous sessions.

2. **ALWAYS check `tasks.md`** before beginning any work to see:
   - What tasks are currently in progress
   - What tasks are blocked or waiting
   - What the current priorities are
   - Any dependencies between tasks

## Task Management

3. **When completing work:**

   - Mark tasks as completed in `tasks.md` with the completion date
   - Include a brief summary of what was delivered
   - Note any follow-up work needed

4. **When discovering new work:**

   - Immediately add new tasks to `tasks.md`
   - Categorize them (bug, feature, documentation, etc.)
   - Note dependencies and priority
   - Don't let discovered work get lost

5. **When encountering blockers:**
   - Document the blocker in `tasks.md`
   - Note what's needed to unblock
   - Consider alternative approaches

## Project Context

6. **Reference these key documents regularly:**

   - `PRD.md` - Project Requirements Document (source of truth)
   - `README.md` - User-facing documentation

7. **Maintain consistency with existing patterns:**
   - Follow established code style and architecture
   - Use consistent configuration schema
   - Maintain backward compatibility where possible

## Communication & Documentation

8. **When making significant changes:**

   - Update relevant documentation
   - Consider impact on existing users
   - Document breaking changes clearly

9. **When answering user questions:**
   - Reference the appropriate documentation
   - Consider if the answer should be added to README or FAQs
   - Be consistent with previous answers

## Quality Standards

10. **Before considering work complete:**
    - Verify it meets acceptance criteria from PRD
    - Check that success metrics are achievable
    - Ensure configuration remains backward compatible
    - Test with sample Markdown files containing Mermaid diagrams

## Session Handoff

11. **At end of session:**
    - Ensure all completed work is documented
    - Update task statuses accurately
    - Note any important context for next session in `planning.md`
    - Flag any urgent items that need immediate attention

**Remember:** This project serves technical writers, developers, and team leads who need consistent, branded PDF documentation from Markdown with Mermaid diagrams. Always prioritize user experience and configuration flexibility.

## Session Summary

### Session 1: Project Initialization (2024-01-15)

**Accomplishments:**

- ✅ Established complete project foundation in `vscode-md2pdf-plugin` directory
- ✅ Created `package.json` with VS Code extension configuration and all required dependencies (Puppeteer, Marked, Mermaid)
- ✅ Set up TypeScript configuration (`tsconfig.json`) for ES2020 target
- ✅ Implemented basic extension scaffolding with command registration
- ✅ Created project structure with proper source organization
- ✅ Added necessary configuration files (`.vscodeignore`, `.gitignore`)

**Technical Decisions Made:**

1. Using TypeScript for better maintainability and VS Code integration
2. Puppeteer as PDF generation engine for best CSS support
3. Organized source code in `src/` directory with compiled output to `out/`
4. Registered three main commands in package.json manifest

**Next Session Starting Point:**

- Continue with Milestone 1: "Set up build system and scripts"
- The extension foundation is ready for development
