use sqlx::PgPool;
use uuid::Uuid;
use crate::models::{Cause, CreateCause};

pub async fn get_all_causes(pool: &PgPool) -> Result<Vec<Cause>, sqlx::Error> {
    sqlx::query_as::<_, Cause>(
        "SELECT id, name, description, country, stellar_address, goal_amount, created_at 
         FROM causes 
         ORDER BY created_at DESC"
    )
    .fetch_all(pool)
    .await
}

pub async fn create_cause(pool: &PgPool, cause: CreateCause) -> Result<Cause, sqlx::Error> {
    sqlx::query_as::<_, Cause>(
        "INSERT INTO causes (id, name, description, country, stellar_address, goal_amount) 
         VALUES ($1, $2, $3, $4, $5, $6) 
         RETURNING id, name, description, country, stellar_address, goal_amount, created_at"
    )
    .bind(Uuid::new_v4())
    .bind(cause.name)
    .bind(cause.description)
    .bind(cause.country)
    .bind(cause.stellar_address)
    .bind(cause.goal_amount)
    .fetch_one(pool)
    .await
}
