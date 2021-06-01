## User account dashboard Web app

This project was made by using [React.js](https://reactjs.org/) library and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

*This app have the functionalities of displaying the 4 user sections:
 - Personal info page that displays personal informations,
 - Credit card details where user can choice and activate/deactivate credit card,
 - Payment plan for user payment subscription type,
 - Billings info with a table for credit card transactions.*


## Available Scripts in project

Source code is written in Visual Studio Code, where we can use terminal to start app.
I have installed and configured *yarn* package manager because of shorter commands and higher speed.
    
``` npm install -g yarn ```

Once in the project root, for installing all dependencies: 

```yarn``` or ```yarn install```

To ensure that existing React app project uses TypeScript :

```yarn add typescript @types/node @types/react @types/react-dom @types/jest```

In the project directory, app can be run with the following script:

```yarn start```

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### Project structure

:mag: *The project has the following structure as shown below :*
```
  [+] movie-finder
   |
   | - [*] .node_modules
   |
   | - [*] public
   |
   | - [*] src
   |    | - [*] components
   |    |    |
   |    |    | - [*] footer
   |    |    |    | - Footer.tsx
   |    |    |    | - Footer.module.css
   |    |    |
   |    |    | - [*] header
   |    |    |    | - Haeder.tsx
   |    |    |    | - Header.module.css
   |    |    |    | - SidebarToggle.tsx
   |    |    |    | - SidebarToggle.module.css
   |    |    |
   |    |    | - [*] info
   |    |    |    | - UserInfo.tsx
   |    |    |    | - UserInfo.module.css
   |    |    |  
   |    |    | - [*] navigation
   |    |    |    | - Navbar.tsx
   |    |    |    | - Navbar.module.css
   |    |    |    | - MobileNavbar.tsx
   |    |    |    | - MobileNavbar.module.css
   |    |    |
   |    |    | - [*] main
   |    |    |    | - MainSection.tsx
   |    |    |    | - MainSection.module.css
   |    |    |    | - [*] forms
   |       |    |    |    | - [*] personal-info
   |       |    |    |    |    | - PersonalInfo.tsx
   |       |    |    |    |    | - PersonalInfo.module.css
   |       |    |    |    | - [*] credit-cards
   ...
   |       |    |    |    | - [*] payment
   ...
   |       |    |    |    | - [*] billing
   ...
   |    |
   |    | - [*] context
   |    |    | - UserContext.tsx   <- main context for passing props in our app
   |    |
   |    | - [*] reducers
   |    |    | - UserReducer.ts    <- main reducer
   |    |
   |    | - [*] data
   |    |    | - users.json  <- some users data
   |    |    | - info.js     <- helper data scructure
   |    |
   |    | - [*] types
   |    |    | - index.ts    <- all data interfaces and action types
   |    |
   |    ...
   | 
   |    
   ...
   
   ```

#### **Short description:**

 * HTML/CSS Layout is made by using **CSS Grid** and **Flexbox layout engines**,
 * App contains 4 main sections:
    *  **personaInfo**
    *  **crediCard**,
    *  **paymentPlan**,
    *  **billing**
    
 * ***React router*** library defines behaviour of all these sections(rendering, ...).
   
 * User informations are contained inside one state object called *userState*. That state object is maintained by **react reducer** using defined *actions* and *dispatch* methods. 
 * All availabe data scructure(*userState*) and dispatch methods are shared across all react components by using react **Context API**. 
 * Entire app is wrapped inside react router and context api provider to ensure that all components will gain access to main data structure and be able to manage url routes. 
* Setting up all necessary packages (react-router-dom, eslint, ...)

Our react app is SPA project, which means that all our components are rendered inside one main page(*App.tsx*), and that component inside *index.tsx*(*root* HTML element). Our document head section is not easily accessible/changeable inside react. In that purpose, the **react-helmet** package will help us to manage all changes to the document head. It also allows us to use basic HTML tags to set all the content.

        ```
            yarn add react-helmet-async
            yarn add @types/react-helmet-async 
            
        ```
        ```
            ...
            <Helmet>
                <meta charSet="utf-8" />
                <title>My title</title>
            </Helmet>
            ...
        ```


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
