# angular-drills

## Set 1

``1``
Create a basic angular app where you type in a text box and it shows up as text somewhere else on the screen.

``2``
Create an app where there is an array of data in the service that is shown on the screen as a list

``3``
Create an app where there is a list of data on the screen (stored in a service) where you can type to filter what's shown in the list

``4``
Create an app hitting an api (swapi.co, birdapi.com, pokeapi, [smurfs](http://smurfs.devmounta.in/smurfs/), marvel api, etc)

``5``
Make a larger app if you have time.

## Set 2

``6``
Create an app that has three routes (using ui-router):
* home `/`
* sign up `/signup`
* details `/details`

Create templates for each and a simple menu that allows you to navigate between all three routes.

Use any of the APIs listed in app #4 above.  Get data in the details screen. Show that data on the details state/view. Be sure the call to retrieve the data resides in a service.

``7``
Create a simple element directive that loads in a header from a template using templateUrl

``8``
Create a "login" element directive that includes two text inputs, "username" and "password", and a button ("login"). When the login button is clicked, show an alert.

``9``
Create an attribute directive that will be applied to an input type=text. When clicked, the directive should highlight/select all the text in the input.

``10``
Create an element directive that is passed an image string via an attribute (isolated scope) and renders the img via an HTML img tag.

Example markup
```
<my-directive img-src="https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg"></my-directive>
```

To go further, have the above directive make the image's opacity fade by 50% when hovered over. (You'll need to use Angular's built-in jQuery implementation and the linker function).

## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
