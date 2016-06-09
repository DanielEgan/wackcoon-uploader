https=require ('https');
fs=require("fs");

fs.readFile("LocalFile.jpg", function(err, data) {
    if (err)
        console.log("read jpg fail " + err);
    else {
        var post_options = {
            host: 'api.projectoxford.ai',
            method: 'POST',
            data: data,
            path: '/face/v0/detections?subscription-key=***',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Length': data.length
            }
        };

        var post_req = https.request(post_options, function (response) {

            var responseText;

            response.on('data', function (rdata) {

                responseText+=rdata;
            });

            response.on('end', function () {

                console.log(responseText)
            });

        });

        post_req.write(data);

        post_req.end();
    }
});