require("dotenv").config();

const express = require("express");
const body_parser = require("body-parser");
const get_routes = require("./routes/get-routes");
const post_routes = require("./routes/post-routes");
const delete_routes = require("./routes/delete-routes");
const put_routes = require("./routes/put-routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(body_parser.json());
app.use(express.urlencoded({extended: true}));
app.use(get_routes);
app.use(post_routes);
app.use(delete_routes);
app.use(put_routes);

app.listen(port, () => {
    console.log("API is running")
})
