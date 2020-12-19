1. Log in to Container Registry:

```
heroku container:login

```
2. Get code to be deployed:

```
git clone https://github.com/xx/xx.git

```
3. Navigate to the app’s directory and create a Heroku app:

```
heroku create -a nameOfAppUrl

```

4. Build the image and push to Container Registry:

```
heroku container:push web -a nameOfAppUrl

```

5. Then release the image to your app:

```
heroku container:release web -a nameOfAppUrl

```

Now open the app in your browser:

```
heroku open

```
