# Contributing to Soroban-Buffar_Africa

Thank you for your interest in contributing to Soroban-Buffar_Africa! We're building a transparent micro-donation platform for African causes, and we welcome developers, designers, and blockchain enthusiasts to help us grow.

## Getting Started

### Prerequisites

- Rust 1.70+ and Cargo
- Node.js 18+ and npm
- Docker and Docker Compose
- Git

### Local Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/your-username/soroban-buffar-africa.git
   cd soroban-buffar-africa
   ```

2. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```

3. Start PostgreSQL:
   ```bash
   docker-compose up -d
   ```

4. Run the backend:
   ```bash
   cd backend-rs
   cargo run
   ```

5. Run the frontend (in a new terminal):
   ```bash
   cd frontend-nextjs
   npm install
   npm run dev
   ```

6. Visit `http://localhost:3000` to see the app

### Stellar Testnet Setup

For testing blockchain features:

1. Install [Freighter Wallet](https://www.freighter.app/) browser extension
2. Switch to Testnet mode in settings
3. Fund your testnet account at [Stellar Laboratory](https://laboratory.stellar.org/#account-creator?network=test)

## How to Contribute

### Finding Issues to Work On

- Check our [open issues](https://github.com/soroban-buffar-africa/soroban-buffar-africa/issues)
- Look for issues labeled `good first issue` or `help wanted`
- Comment on an issue to let others know you're working on it

### Submitting Changes

1. Create a new branch for your feature:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes following our coding standards
3. Test your changes thoroughly
4. Commit using conventional commits:
   ```bash
   git commit -m "feat: add donation progress bar"
   git commit -m "fix: resolve wallet connection issue"
   git commit -m "docs: update API documentation"
   ```

5. Push to your fork and submit a pull request

### Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues (e.g., "Closes #123")
- Include screenshots for UI changes
- Ensure all tests pass
- Keep PRs focused on a single feature or fix

## Development Guidelines

### Rust Backend

- Follow `rustfmt` defaults (run `cargo fmt`)
- Use modular service architecture
- Handle errors with proper `Result` types
- Write unit tests for business logic
- Document public APIs with rustdoc comments
- Run `cargo clippy` before committing

### Next.js Frontend

- Use TypeScript for type safety
- Follow Prettier defaults for formatting
- Optimize for mobile users (responsive design is critical)
- Minimize bundle size for slower connections
- Use semantic HTML and ARIA labels for accessibility
- Test on various screen sizes (320px to 1920px)

### Database Migrations

- Use SQLx migrations in `backend-rs/migrations/`
- Never modify existing migrations
- Always test migrations on a fresh database
- Use descriptive migration names with timestamps

### Code Style

- **Rust**: `cargo fmt` and `cargo clippy`
- **TypeScript/React**: Prettier with default config
- **Commits**: Conventional commits (feat:, fix:, docs:, chore:, test:)
- **Naming**: Use descriptive variable and function names

## Testing

### Backend Tests

```bash
cd backend-rs
cargo test
```

### Frontend Tests

```bash
cd frontend-nextjs
npm test
```

### Integration Testing

Test the full donation flow on Stellar Testnet:
1. Connect wallet
2. Select a cause
3. Submit donation
4. Verify transaction on [Stellar Expert](https://stellar.expert/explorer/testnet)

## Security Considerations

- Never commit private keys, mnemonics, or secrets
- Always use Testnet for development
- Validate all Stellar addresses before database insertion
- Sanitize user inputs to prevent SQL injection
- Review dependencies for known vulnerabilities

## Adding New Causes (Maintainers)

For maintainers adding verified NGOs to the platform:

1. Verify the organization's legitimacy
2. Confirm Stellar address ownership with the NGO
3. Add cause via API or database migration
4. Document verification process in PR

## Project Roadmap

Check our [project board](https://github.com/soroban-buffar-africa/soroban-buffar-africa/projects) for upcoming features:

- Ledger Listener (real-time donation tracking)
- Donation analytics dashboard
- Multi-language support
- Mobile app (React Native)

## Community

- Join discussions in [GitHub Discussions](https://github.com/soroban-buffar-africa/soroban-buffar-africa/discussions)
- Report bugs via [GitHub Issues](https://github.com/soroban-buffar-africa/soroban-buffar-africa/issues)
- Follow our progress on social media

## Code of Conduct

Be respectful, inclusive, and constructive. We're building this platform to help communities across Africa, and we expect contributors to uphold these values.

## Questions?

Open an issue or start a discussion. We're here to help you contribute successfully!
