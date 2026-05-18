-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
    id UUID PRIMARY KEY,
    tx_hash VARCHAR(64) NOT NULL UNIQUE,
    amount DECIMAL(20, 7) NOT NULL,
    cause_id UUID NOT NULL REFERENCES causes(id) ON DELETE CASCADE,
    donor_address VARCHAR(56) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_donations_cause_id ON donations(cause_id);
CREATE INDEX idx_donations_tx_hash ON donations(tx_hash);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);
