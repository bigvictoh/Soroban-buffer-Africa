# Soroban-Buffar_Africa

**Empowering African grassroots causes through transparent, low-fee XLM micro-donations.**

Soroban-Buffar_Africa is a decentralized micro-donation platform built on the Stellar network, designed to connect donors worldwide with verified African NGOs and community causes. By leveraging Stellar's fast, low-cost transactions, we enable transparent giving with minimal overhead.

## Project Structure

```
soroban-buffar_africa/
├── backend-rs/          # Rust backend (Axum + SQLx + Stellar SDK)
├── frontend-nextjs/     # Next.js frontend with Stellar wallet integration
├── docker-compose.yml   # PostgreSQL and development services
└── CONTRIBUTING.md      # Guidelines for adding causes and testing
```

## Quick Start

1. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```

2. Start PostgreSQL:
   ```bash
   docker-compose up -d
   ```

3. Run backend (from `backend-rs/`):
   ```bash
   cargo run
   ```

4. Run frontend (from `frontend-nextjs/`):
   ```bash
   npm install
   npm run dev
   ```

## Features

- **Cause Explorer**: Browse verified African NGOs and community projects
- **Wallet Integration**: Connect via Freighter or LOBSTR wallets
- **Real-time Tracking**: Monitor donations directly from the Stellar ledger
- **Transparent**: All transactions verifiable on-chain

## Tech Stack

- **Backend**: Rust (Axum, SQLx, stellar-sdk)
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, stellar-wallets-kit
- **Database**: PostgreSQL
- **Blockchain**: Stellar Network (Testnet for development)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding new causes and testing donation flows.

## License

MIT
