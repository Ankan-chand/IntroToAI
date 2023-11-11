Intro To Artificial Intelligence


#Technology used -
    1) Node.js (Express.js)
    2) MongoDB (ODM - mongoose)
    3) node-cache (for caching the results for faster response of api)
    4) dotenv (for environment variables)
    5) cors (cross origin resource sharing)



#architecture - 

/INTRO_TO_AI            // Project root
|-- /config
|   |--config.env       // environment variables
|-- /src                // Source code
|   |-- /controllers    // Request handlers
|   |-- /db             // Database configuration
|   |-- /middlewares    // Custom middleware functions
|   |-- /models         // MongoDB schema definitions
|   |-- /routes         // API route definitions
|   |-- /utils          // utility function definitions
|   |-- app.js          // Application file
|   |-- constants.js    // constant variables
|   |-- server.js       // Entry point of the application
|-- package.json        // Node.js project configuration
|-- package-lock.json   // Node.js project configuration
|-- README.md           // Project documentation



#API endpoints - 

1) POST --'/api/v1/article/add' ==> Create a new article.

    example request - {
                        "title": "New Article",
                        "content": "Dolor sit amet...",
                        "author": "Jane Doe"
                      }

2) GET --'/api/v1/articles' ==> Fetch all the articles.

3) GET --'/api/v1/article/search' ==> Search a article by title.

4) PUT --'/api/v1/article/:articleId' ==> Update a article.

5) DELETE --'/api/v1/article/:articleId' ==> Delete a article.

