# Address Book App

## How to Run

```
npm install
npm run dev
```

### Runs on `localhost:5000`

## API Contract

| Name   | Endpoint  | Method | Payload                                                                 | Response                                                                  |
| ------ | --------- | ------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Create | `/create` | POST   | An array of objects, each containing `name`, `phone` and `emailId`.     | An array of objects, each containing `id`, `name`, `phone` and `emailId`. |
| Update | `/update` | PUT    | An array of objects, each containing `id` and the fields to be updated. | An array of objects, each containing `id`, `name`, `phone` and `emailId`. |
| Delete | `/delete` | DELETE | An array of `id`.                                                       | An object containing `deleted` field.                                      |
| Search | `/search` | POST   | An object containing `query` field.                                      | An array of objects, each containing `id`, `name`, `phone` and `emailId`. |
