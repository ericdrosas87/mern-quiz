var express  = require('express');
var app = express();

app.use(express.static("build"));

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
    console.log(`Express server running on port ${app.get("port")}`)
});