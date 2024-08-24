
import app from "./app"
import env from "./util/validateEnv"
import mongoose from "mongoose";

const port = env.PORT;

/* Connect to database and start server */
mongoose.connect(env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log("Mongoose connected");
    /* Start the server */
    app.listen(port, () => {
        console.log("Server running on port: " + port);
    });

})
.catch(console.error);



