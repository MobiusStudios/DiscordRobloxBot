const rbx = require("noblox.js")
const settings = "./settings.json"


async function startApp () {
    await rbx.cookieLogin()
    // Do everything else, calling functions and the like.
    rbx.promote(5039991,422980958)
}

startApp()
