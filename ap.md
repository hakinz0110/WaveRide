[Payment Agent](/docs)

# Payment Agent REST

Discover payment agents and execute agent-facilitated deposits and withdrawals.

## Overview

The Payment Agent APIs let applications find active payment agents, retrieve an agent's full profile, and move funds — agent deposits and client withdrawals — through them. Payment agents deposit funds into a client's wallet via the `transfer` endpoint, while clients withdraw through an agent using a one-time verification code. All endpoints are standard REST calls and require the `payment` OAuth2 scope.

##### REST API

These are standard REST APIs using HTTP methods (GET, POST). All requests require the `Deriv-App-ID: YOUR_APP_ID` header and an `Authorization: Bearer YOUR_OAUTH_TOKEN` token carrying the `payment` scope.

##### OpenAPI Specification

View the complete OpenAPI 3.1.0 specification for detailed schema definitions and examples:

[OpenAPI Spec →](/data/production-openapi.json)

## Typical Workflow

**Discovering agents**

1. Call `GET /payment-agents/v1/agent-statistics` to find which currencies and countries are served.
2. List agents for a currency with `GET /payment-agents/v1/agents`, optionally filtered by country. Results are paginated; use `page` and `per_page` to page through them.
3. Fetch a single agent's full profile with `GET /payment-agents/v1/agents/{id}`.

**Client withdrawal**

1. Request a one-time code via `POST /payment-agents/v1/withdraw/verification_code`. The code is sent to the client's registered email or phone and is valid until it expires.
2. Submit the withdrawal with the 6-digit code via `POST /payment-agents/v1/withdraw`.
3. If you supplied a `request_id`, poll `GET /payment-agents/v1/withdraw/{request_id}` until the status settles.

**Agent deposit** — an authenticated payment agent deposits funds directly into a client's wallet with `POST /payment-agents/v1/transfer` (completes synchronously).

## Available Endpoints

[List Payment Agents Get

Returns a paginated list of active payment agents that support the requested currency. Results include publicly listed agents, plus any agent you've previously received a transfer from even if that agent isn't publicly listed. An optional country filter further restricts to agents that serve that country. Each result includes the agent's profile and its commission rates for the requested currency. `/payment-agents/v1/agents`](/docs/payment-agents/payment-agent-list/)

[Get Payment Agent Get

Returns the full profile of a single payment agent, including agents not publicly listed in the directory. Use this when you already have an agent's id and need their full details. The response always includes a currencies array with the agent's commission rates and withdrawal limits for each supported currency, and a urls array with the agent's associated websites. Pass me as the id to return the authenticated client's own agent profile. `/payment-agents/v1/agents/{id}`](/docs/payment-agents/payment-agent-get/)

[Payment Agent Statistics Get

Returns the aggregate set of countries and currencies covered by at least one active, publicly listed payment agent. Use this to determine which currency and country filter values are meaningful before calling the agent list - results may lag newly onboarded agents by a short period. `/payment-agents/v1/agent-statistics`](/docs/payment-agents/payment-agent-statistics/)

[Client Settings Get

Returns the authenticated client's current payment agent settings: whether they can receive deposits from payment agents, whether they can withdraw funds through a payment agent, and whether their real name is shared with agents on transactions. Clients who have never used a payment agent see the defaults deposit_enabled: true, withdraw_enabled: true, and show_real_name: false. `/payment-agents/v1/clients/me`](/docs/payment-agents/payment-agent-client-settings/)

[Update Client Settings Patch

Updates the authenticated client's preference for whether payment agents can see their real name on transactions. Set show_real_name to true to reveal it, or false to withhold it; the updated settings are returned. A client's first-ever payment agent interaction registers their account, so some 400 and 500 errors only occur on that first call. `/payment-agents/v1/clients/me`](/docs/payment-agents/payment-agent-client-settings-update/)

[Transfer (Deposit) Post

Lets an authenticated payment agent deposit funds directly into a client's Deriv wallet, identified by their account nickname (to_nickname). On success returns a TransferResult - status "complete" with a transaction_id for a real transfer, or status "dry_run_ok" with transaction_id null when dry_run is true. client_real_name and client_is_agent describe the recipient. `/payment-agents/v1/transfer`](/docs/payment-agents/payment-agent-transfer/)

[Transfer Status Get

Returns the current status of a transfer previously initiated with a request_id. Both the payment agent who sent the transfer and the receiving client can check it. Most transfers return complete in the initial response and don't need polling; if the initial status is pending, it progresses to complete, rejected, or failed. A request_id that doesn't match any of your transfers returns RequestIDNotFound. `/payment-agents/v1/transfer/{request_id}`](/docs/payment-agents/payment-agent-transfer-status/)

[Withdrawal Verification Code Post

Requests a one-time verification code be sent to the client's registered contact (email or phone). Call this before submitting a withdrawal via POST /payment-agents/v1/withdraw - the code must be included as verification_code in that request. The code is valid until expires_at (epoch seconds). A new code cannot be requested before next_request_at (epoch seconds). `/payment-agents/v1/withdraw/verification_code`](/docs/payment-agents/payment-agent-withdraw-verification/)

[Withdraw Post

Withdraws funds from the authenticated client's account through a payment agent. Requires a 6-digit verification_code obtained from POST /payment-agents/v1/withdraw/verification_code. A withdrawal is initially requested (transaction_id is null at this stage), then pending, and finally complete, rejected, or failed. Supply an optional request_id to track status afterwards via GET /payment-agents/v1/withdraw/{request_id}. `/payment-agents/v1/withdraw`](/docs/payment-agents/payment-agent-withdraw/)

[Withdrawal Status Get

Returns the current status of a withdrawal previously submitted with a request_id. Use this to poll a withdrawal through its lifecycle — requested, then pending — until it reaches complete, rejected, or failed (transaction_id is null while the status is requested). A request_id that doesn't match any of your withdrawals returns RequestIDNotFound. `/payment-agents/v1/withdraw/{request_id}`](/docs/payment-agents/payment-agent-withdraw-status/)

## Authentication

All endpoints require the `Deriv-App-ID` header and an `Authorization: Bearer YOUR_OAUTH_TOKEN` header. The token must carry the `payment` scope; otherwise the API returns `403 Forbidden`.

### OAuth2 Scopes

| Endpoint | Scope |
| --- | --- |
| `GET /payment-agents/v1/agents` | `payment` |
| `GET /payment-agents/v1/agents/{id}` | `payment` |
| `GET /payment-agents/v1/agent-statistics` | `payment` |
| `POST /payment-agents/v1/transfer` | `payment` |
| `POST /.../withdraw/verification_code` | `payment` |
| `POST /payment-agents/v1/withdraw` | `payment` |
| `GET /.../withdraw/{request_id}` | `payment` |

```bash
curl -X GET "https://api.derivws.com/payment-agents/v1/agents?currency=USD" \
  -H "Deriv-App-ID: YOUR_APP_ID" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN"
```

## Response Status Codes

The API uses standard HTTP status codes to indicate success or failure:

2xx Success

**200 OK** — Request successful

4xx/5xx Errors

**400 Bad Request** — Invalid parameters or business rule failure

**401 Unauthorized** — Invalid or missing authentication

**403 Forbidden** — Token lacks the `payment` scope

**404 Not Found** — Agent not found

**500 Internal Server Error** — Server-side error

**504 Gateway Timeout** — Upstream service timeout

Not all codes apply to every endpoint. `404 Not Found` applies only to `GET /payment-agents/v1/agents/{id}`, and `GET /payment-agents/v1/agent-statistics` does not return `400`.

## Error Response Format

All error responses follow a consistent envelope with an empty `data` object, an `errors` array, and `metadata`:

```json
{
  "data": {},
  "errors": [
    {
      "status": 400,
      "code": "WalletFundsInsufficient",
      "detail": {
        "message": "The agent's wallet does not hold enough funds for this transfer"
      }
    }
  ],
  "metadata": {
    "endpoint": "/payment-agents/v1/transfer",
    "method": "POST",
    "timing": 38
  }
}
```

Error codes include: `AgentIDInvalid`, `AgentNotFound`, `AgentInactive`, `AgentSelfTransfer`, `AgentSelfWithdraw`, `AgentCurrencyUnsupported`, `InvalidAgentID`, `NicknameNotFound`, `NoClientWallet`, `ClientCountryUnsupported`, `WithdrawalAmountMinimum`, `WithdrawalAmountMaximum`, `WalletFundsInsufficient`, `InvalidOTP`, `OtpRateLimitExceeded`, `RequestIDUsed`, `RequestIDNotFound`, `InvalidRequestIDFormat`, `TransferFailed`, `WithdrawalFailed`, `OTPValidationFailed`, `OtpValidationRateLimitExceeded`, `VerificationCodeFormatInvalid`, `VerificationCodeRequestFailed`, `WalletLookupFailed`, `NicknameLookupFailed`, `ClientIdentityLookupFailed`