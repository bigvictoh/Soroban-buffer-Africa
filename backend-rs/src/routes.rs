use axum::{
    Router,
    routing::{get, post},
    extract::{State, Query},
    Json,
    http::StatusCode,
};
use sqlx::PgPool;
use serde::Deserialize;

use crate::models::{Cause, CreateCause, DonationWithCause};
use crate::services;

pub fn create_routes() -> Router<PgPool> {
    Router::new()
        .route("/causes", get(get_causes).post(create_cause))
        .route("/donations", get(get_donations))
}

async fn get_causes(
    State(pool): State<PgPool>,
) -> Result<Json<Vec<Cause>>, StatusCode> {
    services::cause_service::get_all_causes(&pool)
        .await
        .map(Json)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

async fn create_cause(
    State(pool): State<PgPool>,
    Json(payload): Json<CreateCause>,
) -> Result<Json<Cause>, StatusCode> {
    services::cause_service::create_cause(&pool, payload)
        .await
        .map(Json)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

#[derive(Deserialize)]
struct DonationQuery {
    cause_id: Option<String>,
}

async fn get_donations(
    State(pool): State<PgPool>,
    Query(params): Query<DonationQuery>,
) -> Result<Json<Vec<DonationWithCause>>, StatusCode> {
    services::donation_service::get_donations(&pool, params.cause_id)
        .await
        .map(Json)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}
