# Dog Find API
 - Using Node.js with Typescript and Express
 - Others: Docker
 - Search with autocomplete? results for dog breed details, or shelters for dog adoption
 - middleware validation etc? apis ? api catalog?, api testing or unit test
## Dev Journey
 ### Set up Project - Basic init. 
    - Create Project folder : mkdir <name>
        -- Init Node js : npm init -y && set scripts
        -- Install Dependencies express, dotenv ,(dev) nodemon ,(dev) concurrently, (dev) rimraf(pkg to del dist and recreate with build with current files)
        -- Create basic files & folders
    - Set Up Typescript : npm i -D typescript @types/node @types/express
        - Create tsconfig: tsc --init
        - enable some rules
        - set up copy assets
    - Set up git
        -- Set up gitignore
        -- commit init commit & push
    - Set up ejs as view
        -