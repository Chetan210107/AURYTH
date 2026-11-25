# API

## Current status

Phase 1 does not expose commerce APIs or application server functions. The
current root route only renders a development-foundation status page.

TanStack Start server functions may be introduced in later phases. Keep input
validation at the server boundary, move business rules into server-side domain
modules, and enforce authorization on the server. Do not make client input
authoritative for prices, inventory, payment status, roles, or shipment status.

## Planned integration boundary

Razorpay and Shiprocket adapters are approved for later phases but are not
implemented. Their provider credentials and API calls must remain server-side.
Webhook signatures, deduplication, and state transitions must be verified
before events affect application records.
