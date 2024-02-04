## ToDo List - Backend NodeJS (javascript)


- ทำ REST API โดยใช้ Node JS (JavaScript หรือ TypeScript) สำหรับโปรแกรม To do list โดยห้ามเชื่อมต่อกับ database
 

### Input Data
 
  <summary>Input Body</summary>
 
 ```json 
   {
 "title":"title 1",
  "description":"description",
  "status" :true
}

   ```
   
### Endpoint

| Method  | URL  | Description | Input | Output |
|-------------| ------------- | ------------- | ------------- | ------------- |
GET| /api/v1/todos  | Get All To-Do List || JSON |
GET| /api/v1/todos/:id | Get To-Do by Id | :id | JSON  |
POST| /api/v1/todos | Add New To-Do List | [Input Body](#Input) | String  |
PUT| /api/v1/todos/:id | Update To-Do by Id | :id | JSON  |
DELETE| /api/v1/todos/:id | Delete To-Do by Id | :id  | JSON  |
 