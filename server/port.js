module.exports = (app) => {
    const port = process.env.PORT || 8000;
    return app.listen(port, () => console.log(`Listening on port ${port}`));
}