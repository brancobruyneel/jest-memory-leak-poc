# Jest Memory Leak PoC

Small proof of concept repo that shows that Jest `29.X` leaks memory using the mongodb `4.x` driver.

## Environment used

```json
"devDependencies": {
  "@jest/globals": "29.4.1",
  "jest": "29.4.1",
  "mongodb-memory-server": "8.11.4",
  "ts-jest": "29.0.5",
  "typescript": "4.9.5"
},
"dependencies": {
  "mongodb": "4.12.1"
},
"engine": {
  "node": ">16.10"
}
```
