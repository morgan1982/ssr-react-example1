import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';

const app = express();

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
    const markup = renderToString(
        <App/>
    )
    res.send(`
        <!DOCTYPE html>
        <head>
            <title>Universal React</title>
            <!--
            <link rel="stylesheet" href="/css/main.css"/>
            <script src="/bundle.js" defer></script>
            -->
        </head>
        <body>
            <div id="root">${markup}</div>
        </body>
        </html>
    `)

})

app.listen(port, () => {
    console.log('Server is listening on port: 3000')
})