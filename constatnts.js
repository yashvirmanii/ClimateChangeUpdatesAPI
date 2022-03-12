const PORT = process.env.PORT || 5000
const articles = [];
const newspapers = [
    {
        name: 'thetimes',
        base: 'https://www.thetimes.co.uk',
        address: 'https://www.thetimes.co.uk/environment/climate-change/'
    },
    {
        name: 'theguardian',
        base: 'https://www.theguardian.com',
        address: 'https://www.theguardian.com/environment/climate-crisis/'
    },
    {
        name: 'telegraph',
        base: 'https://www.telegraph.co.uk',
        address: 'https://www.telegraph.co.uk/climate-change/'
    },
    {
        name: 'sun',
        base: 'https://www.thesun.co.uk',
        address: 'https://www.thesun.co.uk/topic/climate-change-environment/'
    },
    {
        name: 'es',
        base: 'https://www.standard.co.uk',
        address: 'https://www.standard.co.uk/topic/climate-change'
    },
    {
        name: 'bbc',
        base: 'https://www.bbc.co.uk',
        address: 'https://www.bbc.co.uk/news/science_and_environment/'
    },
    {
        name: 'un',
        base: 'https://www.un.org',
        address: 'https://www.un.org/climatechange/'
    },
    {
        name: 'nyt',
        base: 'https://www.nytimes.com',
        address: 'https://www.nytimes.com/international/section/climate/'
    },
    {
        name: 'cityam',
        base: 'https://www.nytimes.com',
        address: 'https://www.nytimes.com/international/section/climate/'
    },
]

module.exports.PORT = PORT;
module.exports.articles = articles;
module.exports.newspapers = newspapers;