use sqlx::PgPool;
use uuid::Uuid;
use crate::models::{Donation, DonationWithCause};

pub async fn get_donations(
    pool: &PgPool,
    cause_id: Option<String>,
) -> Result<Vec<DonationWithCause>, sqlx::Error> {
    let query = if let Some(id) = cause_id {
        let cause_uuid = Uuid::parse_str(&id).map_err(|_| sqlx::Error::RowNotFound)?;
        sqlx::query_as::<_, (Donation, String)>(
            "SELECT d.id, d.tx_hash, d.amount, d.cause_id, d.donor_address, d.created_at, c.name
             FROM donations d
             JOIN causes c ON d.cause_id = c.id
             WHERE d.cause_id = $1
             ORDER BY d.created_at DESC"
        )
        .bind(cause_uuid)
        .fetch_all(pool)
        .await?
    } else {
        sqlx::query_as::<_, (Donation, String)>(
            "SELECT d.id, d.tx_hash, d.amount, d.cause_id, d.donor_address, d.created_at, c.name
             FROM donations d
             JOIN causes c ON d.cause_id = c.id
             ORDER BY d.created_at DESC"
        )
        .fetch_all(pool)
        .await?
    };

    Ok(query.into_iter().map(|(donation, cause_name)| {
        DonationWithCause {
            donation,
            cause_name,
        }
    }).collect())
}
