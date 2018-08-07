let fs = require('fs')
let cheerio = require('cheerio')
let url = "https://oxidemod.org/plugins/serverinfo.1317/"
let request = require('request-promise')
let options = {
	uri:url,
	transform(dat){return cheerio.load(dat)}
}
function cbRequest($){
	console.log(toUnity($('.innerContent').text()))
}
function toUnity(str) {
	if (typeof(str) != 'string') {
		console.log(typeof(str))
	} else {
		let regexp = 

		res = str.replace(/^[\s]+?$/gm, "")
						 .replace(/(\n\n:?)+/gm, "")
						 .replace(/^([\s\S]*?)$/gm, "[$1]")


		return console.log(res) 
	}
}
function Info() {
	let configPath = "./ServerInfo.json"
	let configObj = JSON.parse(fs.readFileSync(configPath,'utf8'))

	this.getTab = function() {
		let res = {}
		let n = 1
		configObj.settings.Tabs.forEach((tab)=>{
			tab.Pages.forEach((page)=>{
				res[n] = page.TextLines
				n++
			})

		})
		return res
	}
	this.setTab = function (name,pages) {
		let tab = {
			"ButtonText":name,
			"HeaderText":name,
			"Pages":pages,
			"TabButtonAnchor":4,
			"TabButtonFontSize":16,
			"HeaderAnchor":0,
			"HeaderFontSize":32,
			"TextFontsize":16,
			"OxideGroup":""
		}
	}
	
	
	this.createPage = function (text, image) {
		let page
		//text to lines
		//lines how long?	
		return page
	}

	this.setConfigTmp = function (template) {
		if (template == 'rust') {
			configObj.settings.ActiveButtonCollor = "#273327255"
		}
	}
	this.save = function () {
		fs.writeFileSync(configPath, JSON.stringify(configObj))
	}
}

let info = new Info()
info.setConfigTmp('rust')
info.save()



//console.log(new Info().getTab())
//request(options).then(cbRequest)
