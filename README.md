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

`GET` http://localhost:3000/api/letter/:id
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
    "letter": [
      {
        "_id": "63a1d0329bf42d80c1e42646",
        "userId": {
          "email": "20521566@gm.uit.edu.vn",
          "name": "Long Nguyễn Đức",
          "photoURL": "https://lh3.googleusercontent.com/a/ALm5wu1Dzo3TGYtrsKxylr65RYq7dT6g6Fmbl5lHuqNq=s96-c",
          "__v": 0
        },
        "jobId": "63a06b09f0f5d3f307d978c9",
        "__v": 0
      },
      {
        "_id": "63a1d0419bf42d80c1e42648",
        "userId": {
          "email": "duclong2002317@gmail.com",
          "name": "Long Nguyễn",
          "photoURL": "https://lh3.googleusercontent.com/a/AEdFTp6LBhqA4egOSbRXrjAyDOBDYuUxfp-se5r4MgCe=s96-c",
          "__v": 0
        },
        "jobId": "63a06b09f0f5d3f307d978c9",
        "__v": 0
      }
    ]
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
      "location": "Thành phố Hồ Chí Minh",
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
  }
]
```
