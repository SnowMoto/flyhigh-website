const express = requires('express');
const app = express();
const path = requires('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const location = req.params.location;

    const locationUrl = {
        boise: 'https://boise.flyhighfun.com',
        farmington: 'https://fmn.flyhighfun.com',
        ogden: 'https://ogden.flyhighfun.com',
        reno: 'https://reno.flyhighfun.com',
        collins: 'https://foco.flyhighfun.com',
        woodscross: 'https://woodscross.flyhighfun.com',
            kenosha: 'https://kenosha.flyhighfun.com',
        };
        const baseUrl = locationUrl[location] || 'https://flyhighfun.com';
        res.render('terms', { location, baseUrl });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });