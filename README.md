# test-ideil
To run app you should firstly install all dependencies in both strapi and react folders.
To do that for React part use:
```
cd .\ideil-test\
npm install
```
To install strapi dependencies use: 
```
cd .\strappi\
npm install
```
Next important part is to import data into your strapi, because after cloning it from Github database will be empty. 
To do that you should find zip file named "export_20230713182019.tar.gz" in "/strapi" directory and run next script
```
 npm run strapi import -- -f .\export_20230713182019.tar.gz  
```
You should confirm the operation. 
After that data will be imported into your strapi database so you can run it with script from "./strapi" directory
```
 npm run develop 
```
After that run the Vite React from /ideil-test directory app using:
```
npm run dev 
```
Now when everything ready you can use that.
