# MuseProject

MuseProject is an open-source project management tool for tracking work items, cycles, modules, pages and analytics.

> MuseProject is a rebranded fork of [Plane](https://github.com/makeplane/plane) (© Plane Software, Inc. and contributors), distributed under the **GNU AGPL-3.0**. See [LICENSE.txt](LICENSE.txt). Copyright headers in source files are kept as the license requires. If you run a modified version as a network service, you must offer its source to its users (AGPL §13).

## Run it (Docker, everything built from source)

Prerequisites: Docker with Compose v2.

```bash
./setup.sh                      # creates .env files from .env.example (Windows: run in Git Bash)
docker compose up -d --build    # builds web, admin, space, live, api + starts postgres/redis/rabbitmq/minio/proxy
```

Then open:

| App                              | URL                        |
| -------------------------------- | -------------------------- |
| Web app                          | http://localhost/          |
| Instance admin (first-run setup) | http://localhost/god-mode/ |
| Public spaces                    | http://localhost/spaces/   |

On first start, go to `/god-mode/` to create the instance admin, then sign up in the web app.

Stop: `docker compose down` (add `-v` to wipe data).

## Local development

```bash
./setup.sh
docker compose -f docker-compose-local.yml up -d   # API + infra on :8000
pnpm install
pnpm dev                                           # web :3000, admin :3001, space :3002, live :3100
```

See [AGENTS.md](AGENTS.md) for commands, code style and tests.

## What was rebranded

User-facing text (all locales), page titles and metadata, PWA manifests, the logo mark/lockup and favicons. Internal identifiers (`@plane/*` packages, the Python `plane` module, database and container names) are unchanged so the codebase stays mergeable with upstream.
