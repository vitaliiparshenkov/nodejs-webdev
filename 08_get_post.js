const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response) => {  // * request- то что посылаем на сервер, response - то что отвечает
    console.log('server work');
    if (request.method == 'GET') {      // ! GET -> получить, обработать
        console.log(request.method);    // ! Method

        let urlRequest = url.parse(request.url, true);
        // console.log(urlRequest);
        console.log(urlRequest.query.test); // ! Get Params

        if (urlRequest.query.test % 2 == 0) {
            response.end('even');
        }
        response.end('odd');
    }
    else {                              // ! POST -> получить, обработать
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(bparams);
            console.log(params.hi);

            response.end('ok');

        });
    }
}).listen(3000);