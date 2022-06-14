# Leaning node

## Pros
- Fast, efficient and highly scalable
- Event driven, non-blocking I/O model
- Same language on FE and BE

### Non blocking I/O
- single thread using non-blocking I/O calls
- supports tens of thousands of concurrent connections (events & callbacks)
- `EventEmitter` class is used to bind events and listeners

## Good for
- REST API & Microservices
- Real Time Services (Chat, Live updates)
- CRUD Apps - Blog, shopping carts, Social networks
- Tools and Utilities
- `Anything not CPU intensive`

Every module is wrapped in `Module wrapper Function`
```
(function (exports, require, module, __filename, __dirname))

console.log({file: __filename, folder: __dirname})
```

