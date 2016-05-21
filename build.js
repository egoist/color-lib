'use strict'
const fs = require('fs')
const aimer = require('aimer')
const camelcase = require('camelcase')

console.log('Fetching...')
const res = {}
aimer('https://rawgit.com/egoist/1e3b1151309235b8233ae221fa650e6c/raw/a2a70c52292cbab7a17d789b631e50a025c42721/colors.html')
	.then($ => {
		console.log('Fetched...')
		$('.color-group').each(function () {
			const group = $(this)
			let colorName = group
				.find('li').first()
				.find('.name').text().toLowerCase() || 'extra'
			colorName = camelcase(colorName)
			res[colorName] = {}
			group.find('li').each(function (li, index) {
				if (index !== 0) {
					const shade = camelcase($(this).find('.shade').text())
					const color = $(this).find('.hex').text()
					res[colorName][shade] = color
				}
			})
		})
		fs.writeFileSync('./color.json', JSON.stringify(res), 'utf8')
		console.log('done...')
	})
	.catch(e => console.log(e.stack))
