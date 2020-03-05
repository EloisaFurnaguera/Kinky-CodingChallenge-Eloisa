# Kink.com Backend Coding Challenge - Comments API

## Goal

At Kink.com, users can comment on individual scenes. Each scene is identified by an unique positive integer known as a "shootId".

Create a REST API with [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) that stores and retrieves comments associated with a scene.

## Payloads

When creating a comment, use the following payloads:

```json
{
    "shootId": 1,
    "comment": "Nice!"
}
```

```json
{
    "shootId": 2,
    "comment": "I don't like it."
}
```

```json
{
    "shootId": 1,
    "comment": "<script>alert('hello!');</script>"
}
```

## Guidelines

- Comments should be at least 10 latin characters and less than 100 characters.
- Store comments in memory (no need to write to a database).
- Accept and return JSON.
- Use POST to create a comment.
- Use GET to retrieve comments associated with a shoot.
- Return appropriate HTTP status codes for operations, including errors.
- Use Node.js 8 and Express 4.
- Use any additional npm modules as appropriate.
- Documentation and maintainability is a plus.
- Tests are not a requirement, but will be considered favorably.

### Time Allotment

We respect your time and would prefer you not spend more than 3-5 hours on these challenges. Feel free to include code comments to indicate any features you don't have time to implement.
