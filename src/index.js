//app
import { app } from "./app.js";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Address Book app is running at ${PORT}`);
});
