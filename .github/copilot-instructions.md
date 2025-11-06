# Copilot Instructions for Newgen

## Project Overview

Newgen is a planned Telltale-style interactive narrative RPG to be built with Genspark. This will be a choice-driven adventure game where player decisions shape the story and determine character fates. The game will feature branching narratives, character development, multiple endings, and a choice timer system for critical story moments.

**Current Status**: The project is in early planning stages. The repository currently contains documentation outlining the vision for the game.

## Target Audience

- Game developers working on narrative-driven games
- Contributors interested in interactive storytelling
- Players who enjoy choice-based RPG experiences

## Technology Stack

- **Runtime**: Node.js (v14 or higher)
- **Package Manager**: npm or yarn
- **Primary Language**: JavaScript
- **Framework**: Built with Genspark

## Project Structure

**Current Structure:**
```
Newgen/
├── .github/       # GitHub configuration and Copilot instructions
└── README.md      # Project documentation and vision
```

**Planned Structure:**
```
Newgen/
├── src/           # Source code for game logic (to be created)
├── assets/        # Game assets (images, audio, sprites) (to be created)
├── stories/       # Story content and branching logic (to be created)
├── .github/       # GitHub configuration and Copilot instructions
├── package.json   # Node.js project configuration (to be created)
└── README.md      # Project documentation
```

## Development Setup

### Prerequisites

1. Node.js (v14 or higher) must be installed
2. npm or yarn package manager

### Initial Project Setup

**The project is currently in planning stages.** If you're the first to implement code, consider:

1. Initialize Node.js project: `npm init -y`
2. Create the directory structure (src/, assets/, stories/)
3. Install necessary dependencies (Genspark framework and related packages)
4. Set up build tools and development environment
5. Update this instructions file with the actual implementation details

### Installation Steps

```bash
# Clone the repository
git clone <repository-url>
cd Newgen

# Once package.json is created:
# Install dependencies
npm install

# Start the game
npm start
```

**Note**: The project is in early stages. When contributing, you may need to initialize the Node.js project structure first if it hasn't been created yet.

## Building and Testing

**Note**: These commands will be available once the project structure is initialized with package.json.

### Build Commands

```bash
# Install dependencies (once package.json exists)
npm install

# Start the game in development mode
npm start

# Build the game
npm run build
```

### Testing Commands

```bash
# Run tests (when test suite is implemented)
npm test

# Run tests in watch mode
npm run test:watch
```

### Linting and Formatting

```bash
# Run linter (when configured)
npm run lint

# Format code (when configured)
npm run format
```

## Code Style and Conventions

### General Guidelines

- Write clear, readable code with meaningful variable and function names
- Follow JavaScript ES6+ standards
- Use consistent indentation (2 or 4 spaces as per project convention)
- Add comments for complex game logic and story branching
- Keep functions small and focused on a single responsibility

### File Organization

When creating the project structure:
- Place game logic in `src/` directory
- Store story content and branching logic in `stories/` directory
- Keep all assets (images, audio) in `assets/` directory
- Maintain clear separation between story content and game mechanics
- Initialize with a proper package.json for dependency management

### Story Content

- Keep story segments readable and well-structured
- Document branching logic clearly
- Use descriptive names for story choices and consequences
- Ensure character development is consistent across branches

## Key Files and Areas

### Important Files

- **README.md**: Main project documentation - keep up to date with new features
- **package.json**: Dependencies and scripts (to be created) - verify compatibility when updating
- **src/**: Core game logic (to be created) - ensure changes don't break existing mechanics
- **stories/**: Narrative content (to be created) - maintain story consistency and quality
- **assets/**: Game resources (to be created) - optimize for performance

### Areas to Focus On

- Story branching logic and choice systems
- Character relationship and development systems
- Choice timer implementation
- Save/load game functionality
- Story progression and multiple ending systems

## Files and Features to Preserve

### Do Not Modify Without Discussion

- Core game mechanics that affect existing story branches
- Character relationship algorithms
- Save game data structure (would break existing saves)
- Timer system for critical choices
- Existing story content without author approval

## Contributing

### Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the code style guidelines
4. Test your changes thoroughly
5. Commit with clear, descriptive messages (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request with detailed description

### Pull Request Guidelines

- Provide clear description of changes
- Include testing steps
- Reference related issues
- Ensure all tests pass
- Update documentation if needed

## Copilot Usage Guidelines

### When Working on This Repository

- Prioritize maintaining story consistency and narrative quality
- Ensure game mechanics changes don't break existing save files
- Test story branches thoroughly after changes
- Keep the player experience smooth and bug-free
- Document new story paths and character interactions
- Consider performance impact of new features

### Best Practices

- Review existing story structure before adding new branches
- Maintain consistency with established character personalities
- Test timing-critical choices thoroughly
- Ensure multiple playthroughs are possible without breaking
- Keep asset file sizes reasonable for web delivery

## License

This project is licensed under the MIT License.

## Contact

For questions or issues, please refer to the repository's Issues section.
