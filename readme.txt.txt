1) Created a server side rendered single page application using Angular Universal. 
   It compiles the code on server itself and immediately renders the compiled code on browser when requested by user giving a better performance.
2) Have created two different components :
	-> space-launch-filter (containing filter attributes for space launch)
	-> space-launch-list (displaying filtered result resturned by the server)
   Both components act as siblings to each other and as child components of app.component. Therefore data transmission between the components has
   been done using Input, Output, Event Emiiters.
3) Selecting the filter criteria dynamically displays the data returned by service without refreshing the complete application. Static data remains as it is.
   Only dynamic data i.e. launch data is changed.
4) Maps have been used to toggle the values of launch year, successful launch attribute and successful land attribute with button text as key and their toggled value as
   respective map element value.
5) Boostrap cards have been used to display the launch information.
6) Implemented CSS media queries for responsive design.
7) Code quality check has also been implemented using tslint.
