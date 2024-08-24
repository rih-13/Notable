import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

/* Define the environment variables we need 
Clean environment variables and export */
export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),

});