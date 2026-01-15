# Farm-X Implementation Plan

Overview:
- Implement core features from flowchart: auth, language detection, permissions, dashboard, image disease detection, cattle voice expert, gov schemes audio, weather integration, voice assistant, market prices, e-farm marketplace, community.

Priority (phase 1):
1. Authentication (mobile OTP, Aadhaar/DigiLocker placeholder)
2. Language detection & store in user profile
3. Permissions handling (GPS, mic, camera)
4. Home dashboard scaffold

Phase 1 deliverables (this commit):
- PLANNING.md (this file)
- Prisma schema update: add User model
- API routes: /api/auth/otp (send/verify), /api/auth/aadhaar (placeholder)
- Frontend page: /login to perform OTP flow and detect browser language
- Server helper: src/server/auth.js

Next steps after phase 1:
- Run prisma migrate (requires DATABASE_URL)
- Implement permissions and dashboard UI
- Add image-based disease detection service and model integration
- Implement voice features and OpenAI/Apertus integration

Notes:
- Migrations and production DB setup require DATABASE_URL; say "provide DB" to set it up.
