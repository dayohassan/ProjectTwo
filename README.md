My Personal FSBO House Tracker:


My Personal FSBO House Tracker lets you keep track of potential home purchases by adding them, deleting them, and make a favorites list.  You will also have the ability to be able to add a house you purchased to the sold list, which is great for investors that purchase multiple investment properties.

TOOLS USED:

Node.js, MySql, Sequalize, Bootstrap and Handlebars to build the app.

THE MVC REQUIREMENT:

This basically states the minimumn coding requirement for the project and how the project files are arranged, the front-end and the back-end. 

  <img width="260" alt="Screen Shot 2019-08-15 at 11 15 50 AM" src="https://user-images.githubusercontent.com/36799420/63106340-97686180-bf50-11e9-92ec-dc6f0c5c2e6f.png">



LAYOUTS:


This application runs on a server.js with a Port which listens and sync the database. 

```js
        require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 8000;
// Sets up the Express App
const app = express();

 app.listen(PORT, function ()

 ```


HANDLEBARS:


The Main and Partial Handle bars were created in the list of view file. 

```html


{{!-- Main handlebars page --}}

<!DOCTYPE html>
<html lang="en">



   </ul>
        </div>
    </nav>

    {{{ body }}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>

```

about.handlebars handles the about section of the application page. 

```html

div class="container">
    <div class="row">
        <div class="col-6">
            {{> about/about-description}}
        </div>
    </div>
</div>

```

 home.handlebars has the about and listings.

```html

 <div class="container">
    <div class="row">
        <div class="col-6">
            {{> about/about-description}}
        </div>
        <div class="col-6">
            <div class="jumbotron">
                Top listings
                <ul>
                    {{#each house}}
                    <li>
                        {{> listing/listing-block}}
                    </li>
                    {{/each}}
                </ul>

            </div>
        </div>
    </div>
</div>

```

 listing-bloc.handlebars 

```html

<div>
    <h3>{{address}}</h3>
    <h5>${{price}}.00</h5>
    <hr />
    <p>{{description}}</p>
    Beds: {{beds}} <br />
    Bathrooms: {{baths}} <br />

    {{#if isAvailable}}
    <form action="/api/sellhouse" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Buy House"  class="btn btn-success"/>
    </form>
    {{/if}}
    <form action="/api/removehouse" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Delete House"  class="btn btn-danger"/>
    </form>

    {{#if favorite}}
    {{#if isAvailable}}
    <form action="/api/dropfav" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Remove Fav" class="btn btn-warning" />
    </form>
    {{/if}}
    {{else}}
    <form action="/api/addfav" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Save House"  class="btn btn-light"/>
    </form>
    {{/if}}
</div>

```
 index.js:


<img width="712" alt="Screen Shot 2019-08-16 at 11 30 52 AM" src="https://user-images.githubusercontent.com/36799420/63179069-58eaa980-c019-11e9-805b-067d0b88d973.png">


listing.js:


<img width="435" alt="Screen Shot 2019-08-16 at 11 32 34 AM" src="https://user-images.githubusercontent.com/36799420/63179186-8fc0bf80-c019-11e9-98a6-723ef7245207.png">




The final product of this application can be viewed on:


```https://fsbo-home-tracker.herokuapp.com/```
