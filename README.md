# IdeaDump
Dump your beautiful (garbage) ideas for use anywhere at any time.

## Todos
- [] Write installation/setup docs for frontend
- [] Move frontend to Next.js and consider dockerizing the entire application
- [x] Write installation/setup docs for backend
- [] Implement authentication system
- [] Make backend production-ready and host it
  - [] Explicit versions in requirements.txt
  - [] Production config setup that's secure and private
  - [] Throw it in a droplet or something

## Frontend setup

Coming soon!

## Server setup

1. The backend is dockerized, so please make sure to have [Docker]() installed on your system.

2. Then create a .env.api file for the development environment variables

```
DEV_DATABASE_URI=postgresql://devUser:devPassword@db:5432/devDB
```

3. Build and run the application with Docker

```sh
cd server && docker-compose up --build
```

4. Profit!
