# test-ideil
To run app you should firstly install all dependencies in both strapi and react folders.
To do that use 
```
cd ideil-test
cd src
npm install
```
for React part of app and 
```
cd strapi
npm install
```
for strapi
After that run the Vite React app using 
```
npm run dev from /ideil-test directory
```
Very important part is to import data into your strapi, because after cloning it from Github database will be empty. 
To do that you should find zip file named "export_20230713182019.tar.gz" in "/strapi" directory and run next script
```
 npm run strapi import -- -f .\export_20230713182019.tar.gz  
```
You should confirm the operation. 
After that data will be imported into your strapi database so you can run it with script from "./strapi" directory
```
 npm run develop 
```
