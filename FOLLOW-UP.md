# General:

### Q) If you had more time, what further improvements or new features would you add?

1. Set up a more advanced Server with eg Express or NestJS instead of just returning data. Eventually using GraphQL instead of REST.
2. Pagination of Works to control the number of works being loaded at once
3. Tests for backend and Frontend

### Q) Which parts are you most proud of? And why?

1. Migrated the complete project to Typescript. Unfortunately using Typescript components with JS Parent components is very difficult so I started over the whole project with typescript and state of the art css-styled components and themes :)
2. Setup a whole server instead of fetching the data from file directly into react
3. Got rid of sass and introduced global styles and theming with styled-components

### Q) Which parts did you spend the most time with? What did you find most difficult?

1. Migrating JS Project to Typescript: It was both difficult since dependencies sometimes did not add up or configs were set in a way that I could not run the project. But it was worth it in the end :) The Components and their props as well as data have types now and the code can be used in a safer way!

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

There were some spelling errors in the works.json like Avialable ect and I was not sure if it was part of the test but I simply removed them because irl this kind of data would be sent from the server if it is saved correctly. Other than that the task was good :) I would maybe also make clear if the header should be sticky or not because on the live website it is. In the task its not.
