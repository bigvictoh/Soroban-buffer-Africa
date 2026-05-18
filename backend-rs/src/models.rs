use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Cause {
    pub id: Uuid,
    pub name: String,
    pub description: String,
    pub country: String,
    pub stellar_address: String,
    pub goal_amount: f64,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize)]
pub struct CreateCause {
    pub name: String,
    pub description: String,
    pub country: String,
    pub stellar_address: String,
    pub goal_amount: f64,
}

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Donation {
    pub id: Uuid,
    pub tx_hash: String,
    pub amount: f64,
    pub cause_id: Uuid,
    pub donor_address: String,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize)]
pub struct DonationWithCause {
    #[serde(flatten)]
    pub donation: Donation,
    pub cause_name: String,
}
