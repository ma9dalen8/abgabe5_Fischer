<h1><strong>Geosoftware 1 - Exercise 5</strong></h1>
<h4><strong> by Magdalena Fischer</strong></h4>
<p> This Repository contains all the scripts for the exercise 5 for the Geosoftware 1 course.<br/>
    The project has two HTML pages. On the first page all the busstops from Münster are displayed in a map.
    If they are clicked, the next busconnections will be shown in the table below. 
    Also all the Objects can be loaded from the Mongodb database. If there are already some entries, the distance to the next Busstop can be calculated.
    <br/>
    On the second HTML page- a user can enter locations. Whether using an adress, the browser location or dropping a marker.
    All Points will be safed in the Database. After loading the Database to the Website again, single or multiple Objects can be deleted.
    Using the Update button, after checking one Object, loads the coordinates to an textarea so they can be changed. Afterwards they are updated in the database.</p>
    
<h2>Getting Started</h2>
<p> I used npm express and Mongodb for that project. After initiating the server, set the main page to "mainIndex.html" and the start scripts to "node start.js"
    <br/><strong>Packages</strong><br/>
    npm install express<br/>
    npm install mongodb<br/>
    npm install body-parser<br/>
    npm install jquery<br/><br/>
    For the mapping and the geocoding I used Mapbox.<br/>
    --> Please fill your accessTokens into the scripts. Twice in "usermap.js", once in "map.js"
    </p>
<h2></h2>
<p></p>
