## Overwiew

1. Welcome
2. How to Setup
3. How to Customize
4. Error Handling
5. Attribution


## Welcome

Welcome to my Neighboorhood Map! This is the final Project for the Udacity FEND course.
Nevertheless this project was created with lots of dedication and scaleability in mind!

But what is it?

Well. it shows you a Map around coordinates you provide. It uses the Google Maps API for the Maps
and the Foresquare API for the information provided.

https://cloud.google.com/maps-platform/?hl=de
https://de.foursquare.com/

The App is meant to be easy to setup and customize. You dont even have to be a programmer, isn't that awesome?
Well, you might need to inform yourself a little about how to get a server running when you want to publish it though!
Anyway, lets start!


## How to Setup

Well, you cloned the Git repository? To get your development Enviroment up and running open up your terminal.
If you haven't yet: Install Node and NPM from
https://www.npmjs.com/get-npm

Done? Great! Now navigate into your Project folder, wherever you cloned the project into. Run the command "npm install".
It will now install all node module automatically. When its finished run "npm start" and a web page will open.
Your local map should now be hosted on localhost:3000

It probably does not look too impressive, because, well, i am not a very good designer. But no worries! We will talk about what you can change later!

First open the Map.js. If you scroll down a little you will find a line which looks like this:

bootstrapURLKeys={{ key: '' }}

Just add your google maps api key in between the ''.

You can close that file again if you want! Now open the App.js. Here you find a the following two lines:

clientID: '1I34DCFI2OSGBL3D0M... EXCHANGE WITH YOURS',
clientSecret: 'UDPZGP0PSA5A03... EXCHANGE WITH YOURS'

The long number is actually my login credential for my foresquare testing account. Just enter your own credentials here, otherwise chances are good you will get request limits reached errors.

Now if you scroll down a little more you will find something like this:

placesArr: ['Tower Musicclub',
            'Paddys',
            'Dannys',
            'Übersee Museum',
            'Universum Bremen',
            'DMK Hauptverwaltung',
            'Tattoo',
            'Sportradar'
],

Thats the places array. Here you just add all the places, or delete the places you want to show. The app will do the rest! But keep in mind that these are query searches. So foresquare will respond
with all locations the api can find and the app will choose the best one. So be as spezific as possible! Or if you just want to add a marker for the first venue that fits the describtor just add that. Like Restaurant.

A littlebit aboth you will find something like this:

this.lat = 53.079296;
this.lng = 8.801694;
this.zoom = 13;  

the lat lng values are actually the coordinates of the map center and api venue search. the zoom is just the zoom level. Just change the coordinates to something you like and adjust the zoom to your needs!

Now everythign is setup! If you like to deploy your web app to the web you might like to setup an actual production server. That process is a little complicated but without you cant use the servers workers caching and offline abilitys provided by the team of the create-react-app team. A link to a guide here: https://react-server.io/docs/guides/production

## How to customize

Well, the app is build in a way that you can customize everything. Open the App.css at the top you can find all the main element stylings, followed by the map stylings. The most Important are probably the .map-marker class and the .info-window class, because, you guessed it, these are for the markers and info windows.
HINT: if you want the markers to not have a label, just add the class .marker-text and give it the display value none!
You can change the styling the way you like it, there are some really nice tutorials on how to transform serveral gemoetric forms in css.

IMPORTANT: If you change a value in the marker hover class, that shuld not be shown in the info window, add the initial value to the info window  class with the suffix !important, because both share the same component.

## Error Handling

There might happen to be API errors, if thats the case just have a look into the console. You will see if a request was rejected or if the app for example cant find a spezific venue. If something does not work, and the console does not give you any usefull information, please open an issue and i will have a look!

## Attribution

Map Provided with the Google Maps API by Google

All Information and pictures on the Map are provided by foresquare

this app uses the 'google-map-react' librarie
