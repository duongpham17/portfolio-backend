const puppeteer = require('puppeteer');
const {catchAsync} = require('../utils/CatchError');

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

exports.getCoinGeckoPrice = catchAsync(async(req, res, next) => {

    const crypto_price = {};

    const price = await CoinGeckoClient.coins.markets({
        vs_currency: "gbp",
        ids:[ "bitcoin", "cardano", "ergo", "binancecoin", "vechain", "crypto-com-chain"]
    });
    
    price.data.forEach(el => {
        crypto_price[el.symbol] = Number(el.current_price)
    });

    res.status(200).json({
        status: "success",
        data: crypto_price
    });
});

exports.getCardanoNews = catchAsync(async(req, res, next) => {
    const browser = await puppeteer.launch({headless: true, args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],});
    const page = (await browser.pages())[0];
    await page.goto('https://iohk.io/en/blog/posts/2021/10/page-1/');

    const data = await page.evaluate(() => {
        const news = document.querySelectorAll('.Post__Container-sc-1lacib6-0');

        let newsArray = [];

        news.forEach((el) => {
            const className = (c, index) => el.querySelectorAll(c)[index].innerText;

            const date = className('.Post__HeadContent-sc-1lacib6-3 p span', 0);
            const title = className('a', 0);
            const description = className('h3', 0);

            const image = el.querySelectorAll('.Post__Thumbnail-sc-1lacib6-6 picture img')[0].src
            const link = el.querySelectorAll('a')[0].href;

            newsArray.push({
                date,
                title,
                link,
                description,
                image
            })
        })

        return newsArray
    });

    await browser.close();

    res.status(200).json({
        status: "success",
        data
    })

});

exports.getErgoNews = catchAsync(async(req, res, next) => {
    const browser = await puppeteer.launch({headless: true, args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],});
    const page = (await browser.pages())[0];
    await page.goto('https://ergoplatform.org/en/');

    const data = await page.evaluate(() => {
        const news = document.querySelectorAll('.news-section__item');

        let newsArray = [];

        news.forEach((el) => {
            const className = (c, index) => el.querySelectorAll(c)[index].innerText;

            const date = className('h3', 0);
            const title = className('a', 0);
            const description = className('a', 1);
            const link = el.querySelectorAll('a')[0].href;

            newsArray.push({
                date,
                title,
                link,
                description,
            })
        })

        return newsArray
    });

    await browser.close();

    res.status(200).json({
        status: "success",
        data
    })
});