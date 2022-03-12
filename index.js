const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const { PORT, articles, newspapers } = require('./constatnts');
const app = express();

newspapers.forEach((paper) => {
    axios.get(paper.address)
        .then((response) => {
            const html = response.data

            //WEB SCRAPING USING CHEERIO
            const $ = cheerio.load(html)
            $('a:contains("climate")', html).each(function () {
                const title = $(this).text();
                let address = $(this).attr('href');
                if (address.charAt(0) === '/') {
                    address = `${paper.base}${address}`
                }
                articles.push({
                    source: paper.name,
                    title,
                    address
                })
            })
        })
})

//ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to my climate change news API")
})
app.get('/news', (req, res) => {
    res.json(articles)
})
app.get('/news/:newspaperId', (req, res) => {
    const newsId = req.params.newspaperId

    const specificPaper = newspapers.filter((newspaper) => newspaper.name === newsId)[0].address
    const specificPaperBase = newspapers.filter((newspaper) => newspaper.name === newsId)[0].base
    axios.get(specificPaper)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                let address = $(this).attr('href');
                if (address.charAt(0) === '/') {
                    address = `${specificPaperBase}${address}`
                }
                specificArticles.push({
                    source: newsId,
                    title,
                    address
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err.message))
})

//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})