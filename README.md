#### Employee API

##### Update employee by id

`PUT` http://localhost:3000/api/employee/:id

##### example :

- url: http://localhost:3000/api/employee/6396907df87cf714eb73d1ee
- body:

```json
{
  "position": "Thượng đế",
  "phoneNumber": "0906592674"
}
```

- response:

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

#### Cover Letter API

##### Create cover letter

`POST` http://localhost:3000/api/letter
##### example:

- url: http://localhost:3000/api/letter
- body:

```json
{
  "userId": "6396185a9cc58d527a6871e8",
  "jobId": "63a06b09f0f5d3f307d978c9"
}
```

##### Get user list group by job

`GET` http://localhost:3000/api/letter/employee/:id
##### example:
- url: http://localhost:3000/api/letter/employee/6396907df87cf714eb73d1ee

- response:

```json
[
  {
    "job": {
      "_id": "63a06b09f0f5d3f307d978c9",
      "userId": "6396907df87cf714eb73d1ee",
      "jobName": "Thực tập JAVA",
      "location": "Thành phố Hồ Chí Minh",
      "createdAt": "2022-12-19T08:57:35.239Z",
      "updatedAt": "2022-12-19T08:57:35.239Z",
      "__v": 0,
      "status": true
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a06e71992ddfedeb2a63aa",
      "userId": "6396907df87cf714eb73d1ee",
      "jobName": "Thực tập NodeJs",
      "location": "Thành phố Hồ Chí Minh",
      "createdAt": "2022-12-19T14:00:17.965Z",
      "updatedAt": "2022-12-19T14:00:17.965Z",
      "__v": 0,
      "status": true
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a09063a6a9b33ce2485bda",
      "userId": "6396907df87cf714eb73d1ee",
      "jobName": "Fresher Android Dev",
      "location": "Đà Nẵng",
      "createdAt": "2022-12-19T16:25:07.193Z",
      "updatedAt": "2022-12-19T16:25:07.193Z",
      "__v": 0,
      "status": true
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a09169a6a9b33ce2485be2",
      "userId": "6396907df87cf714eb73d1ee",
      "jobName": "INTERNSHIP BACKEND (NODEJS+PYTHON)",
      "location": "Đà Nẵng",
      "createdAt": "2022-12-19T16:29:29.230Z",
      "updatedAt": "2022-12-19T16:29:29.230Z",
      "__v": 0,
      "status": true
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a11d0c98ec92d252535ac6",
      "userId": "6396907df87cf714eb73d1ee",
      "jobName": "Dot Net Developer",
      "location": "Thành phố Hồ Chí Minh",
      "createdAt": "2022-12-20T02:25:16.557Z",
      "updatedAt": "2022-12-20T02:25:16.557Z",
      "__v": 0,
      "status": false
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a4625a503cb2f662d4d19f",
      "userId": "6396907df87cf714eb73d1ee",
      "status": true,
      "jobName": "Thực tập sinh FrontEnd ReactJS",
      "location": "Thành phố Hồ Chí Minh",
      "createdAt": "2022-12-22T13:57:46.370Z",
      "updatedAt": "2022-12-22T13:57:46.370Z",
      "__v": 0
    },
    "letter": []
  },
  {
    "job": {
      "_id": "63a463b6503cb2f662d4d1ab",
      "userId": "6396907df87cf714eb73d1ee",
      "status": true,
      "jobName": "Backend Dot Net",
      "location": "Đà Nẵng",
      "createdAt": "2022-12-22T14:03:34.962Z",
      "updatedAt": "2022-12-22T14:03:34.962Z",
      "__v": 0
    },
    "letter": [
      {
        "infoUser": {
          "fullName": "Long Nguyễn",
          "email": "duclongmobiedev@gmail.com",
          "phoneNumber": "0906592672",
          "address": "Thành phố Hồ Chí Minh",
          "education": "hightSchool",
          "experience": "1",
          "someDescription": "Sinh viên cấp 3",
          "questions": "Em không có câu hỏi gì ạ",
          "photoURL": "https://lh3.googleusercontent.com/a/AEdFTp7Tt7p4XwPcru4ZWkK_W6vz7jgp6iw-9wFz51o1=s96-c"
        },
        "__v": 0
      }
    ]
  }
]
```
