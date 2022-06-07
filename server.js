console.log("hello")
const app = require("express")()
//const cors = require("cors")
const PORT = 3000;
const router = require('./src/routes/index')
//app.use(cors());

app.use('/api/v1',router)
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});