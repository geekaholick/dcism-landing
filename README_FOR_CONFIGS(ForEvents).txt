########################### CONFIGURATIONS #################################

-added a link to Events in SideBar Announcements

-Created AllEvents and EventsContents in dcism/events

-my wiremock configuration is to start the server at port 8000 (http://localhost:8000):
	'java -jar wiremock-jre8-standalone-2.32.0.jar --port 8000 --verbose'

-my json files for the wiremock can be found at 'public/__files' (for the response by json), 'public/eventImages' (for the sample images of events), and 'public/mappings' (for the request by json)

-I also added the sample images from 'public/eventImages' to 'src/assets/img/eventImages

-I also added 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT' in the src/api/api.js to stop CORS error

