-- Create causes table
CREATE TABLE IF NOT EXISTS causes (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    country VARCHAR(100) NOT NULL,
    stellar_address VARCHAR(56) NOT NULL UNIQUE,
    goal_amount DECIMAL(20, 7) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_causes_country ON causes(country);
CREATE INDEX idx_causes_stellar_address ON causes(stellar_address);
