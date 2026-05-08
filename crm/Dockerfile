FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json package-lock.json* ./
# Force devDependencies to install even when Coolify passes NODE_ENV=production
# as a build ARG. Tailwind v4 + @tailwindcss/postcss + typescript are needed
# at build time (next build invokes postcss on globals.css).
ENV NODE_ENV=development
RUN if [ -f package-lock.json ]; then npm ci --include=dev --ignore-scripts --no-audit --fund=false; \
    else npm install --include=dev --no-audit --fund=false; fi

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
