const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="X-Botz"
global.ownernumber = "6285754058907"
global.botname = "Haruka-Bot"
global.thumbnail = fs.readFileSync("./settings/Haruka.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = '1aee1cb4b814f3bd4e1fc1c2' //register lolhuman.xyz klo mau apikey
global.zenzkey = '711b44771644' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
