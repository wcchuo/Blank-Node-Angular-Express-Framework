#Basic UI Framework

###This is a basic UI framework ready for MVC with the following features:
1. ngRoute routing to multiple pages
2. Bootstrap ready
3. Angular, Angular Route or Angular UI route ready
4. Morgan middleware is built-in for HTTP request logging
5. Body-Parser middleware is built-in for body parsing 

##Customize content
1. Add/modify new static html files in ui\public\views.
2. Modify \ui\public\config\application.routes.js by modifying new templateURLs.
3. Edit \ui\server\views\index.ejs - this is where the navigation menu, scripts, css are located. If you plan to add more frontend JS, CSS, please add it here.
4. Please add new frontend scripts and css in ui\public\assets\css & ui\public\assets\scripts respectively.