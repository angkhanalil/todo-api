## ToDo List - Backend NodeJS (javascript)


- ทำ REST API โดยใช้ Node JS (JavaScript หรือ TypeScript) สำหรับโปรแกรม To do list โดยห้ามเชื่อมต่อกับ database

{
 "title":"title 1",
  "description":"description",
  "status" :true
}


{ 
 "title":"title edit",
  "description":"update desc.",
  "status" :true
}

| Method  | URL  | Description | Input | Output |
|-------------| ------------- | ------------- | ------------- | ------------- |
GET| /api/v1/todos  | Get All To-Do List |JSON| JSON |
GET| /api/v1/todos/:id | Get To-Do by Id |  | JSON  |
POST| /api/v1/todos | Add New To-Do List |  | JSON  |
PUT| /api/v1/todos/:id | Update To-Do by Id |  | JSON  |
DELETE| /api/v1/todos/:id | Delete To-Do by Id |  | JSON  |