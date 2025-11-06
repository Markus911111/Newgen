# Copilot Instructions for Newgen

## Project Overview

Newgen is a Telltale-style interactive narrative RPG built with Genspark. This is a choice-driven adventure game where player decisions shape the story and determine character fates. The game features branching narratives, character development, multiple endings, and a choice timer system for critical story moments.

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

```
Newgen/
├── src/           # Source code for game logic
├── assets/        # Game assets (images, audio, sprites)
├── stories/       # Story content and branching logic
├── .github/       # GitHub configuration and Copilot instructions
└── README.md      # Project documentation
```

## Development Setup

### Prerequisites

1. Node.js (v14 or higher) must be installed
2. npm or yarn package manager

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/Markus911111/Newgen.git
cd Newgen

# Install dependencies
npm install

# Start the game
npm start
```

## Building and Testing

### Build Commands

```bash
# Install dependencies
npm install

# Start the game in development mode
npm start

# If build script exists
npm run build
```

### Testing Commands

```bash
# Run tests (if test suite exists)
npm test

# Run tests in watch mode (if available)
npm run test:watch
```

### Linting and Formatting

```bash
# Run linter (if configured)
npm run lint

# Format code (if configured)
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

- Place game logic in `src/` directory
- Store story content and branching logic in `stories/` directory
- Keep all assets (images, audio) in `assets/` directory
- Maintain clear separation between story content and game mechanics

### Story Content

- Keep story segments readable and well-structured
- Document branching logic clearly
- Use descriptive names for story choices and consequences
- Ensure character development is consistent across branches

## Key Files and Areas

### Important Files

- **README.md**: Main project documentation - keep up to date with new features
- **package.json**: Dependencies and scripts - verify compatibility when updating
- **src/**: Core game logic - ensure changes don't break existing mechanics
- **stories/**: Narrative content - maintain story consistency and quality
- **assets/**: Game resources - optimize for performance

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

Project Link: [https://github.com/Markus911111/Newgen](https://github.com/Markus911111/Newgen)
