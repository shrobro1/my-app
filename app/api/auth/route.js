export function GET() {
  return Response.json({ message: "You just hit an API" });
}

export function POST() {
  // 1. get email and pasword from request body
  // 2. create a connection with the database
  // 3. query the database to see if user exists
  // 4a. if user exists, create a session
  // 4b. if not, create a new users and a session
  // 5. Return a session tok/*
}
