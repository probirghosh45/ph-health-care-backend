import app from "./app";
import { envVars } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on http://localhost:5000`);
    });
  } catch (err) {
    console.error("Error occurred while bootstrapping the server:", err);
  }
};

bootstrap();
