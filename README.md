# portfolio api server using puppeteer

## Hosted on heroku using pipelines

1. Go to https://dashboard.heroku.com/apps --> New -> Create new pipeline
2. Production --> Add app --> Create new app... | add staging if required
3. Choose app name and region --> create app
4. Click on app name you just created
5. IMPORTANT! Settings --> Buildpacks, add buildpack --> enter https://github.com/jontewks/puppeteer-heroku-buildpack
6. config environment variables from config.env || .env 
7. Deploy --> connect app to github --> enable automatic deploys --> deploy

