
Hello There!

Hope you'll enjoy my dinosaur game!

For the nginx server to know what files to host e.g index.html, index.php,
the configuration is in this file: /etc/nginx/sites-available/default

Edit that file using a text editor like nano
Under this line: "# Add index.php to the list if you are using PHP",
simply type * so that the nginx server will host any file whatever the name
		(in this case it's game.html)

So to build the image containing this app(files) run these commands:

cd to the donat directory where the Dino app is with:
cd donat 
docker build --tag <your_image_name> .
docker run -d --name Dinosaur -p 8080:80 <your_image_name>

Now go to your browser and type:
localhost://8080

Have Fun!
