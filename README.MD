## SPA-application on Vue.js
SPA dummy on [Vue.js](https://vuejs.org/v2/guide/) 
with [Vue-router](https://router.vuejs.org/) and [Vuex](https://vuex.vuejs.org)

#### Development
```bash
docker-compose up --build -d

# Run watcher
docker-compose run --rm node yarn watch
```

#### File structure
```
app
    -dist # Folder with built files(index.html would be created here)
    -node_modules 
    -src
        -components # Single File Components
        -router
        -store
            -modules # Vuex modules
            index.js # Registration of Vuex modules
        App.vue # Main app
        main.js 
docker # Docker files and server configs
    -nginx
    -node
docker-compose.yml
README.MD
```
