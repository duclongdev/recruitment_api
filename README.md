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
  "userId": "63a7384b23b7a9e719159592",
  "jobId": "63a4625a503cb2f662d4d19f",
  "infoUser": {
    "fullName": "Long Nguyễn",
    "email": "sv2htth@gmail.com",
    "phoneNumber": "0906592672",
    "address": "Quảng Bình",
    "education": "middleSchool",
    "experience": "3",
    "someDescription": "",
    "questions": "",
    "photoURL": "https://lh3.googleusercontent.com/a/ALm5wu0PKVEY__pr9dmb_PIw8aUC-eN35j05AIFLkgxvtA=s96-c"
  }
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

##### Update Job By Job Id

###### `PUT` http://localhost:3000/api/job/:id

###### example:

`url` http://localhost:3000/api/63a09169a6a9b33ce2485be2
`request body`:

```json
{
  "jobName": "Thưc tập JAVA",
  "location": "Đà Nẵng",
  "jobDetail": {
    "jobType": ["partTime"],
    "amountOfJob": "7",
    "amountOfWeek": "Trên 4 tuần"
  }
}
```

`response`

```json
{
  "_id": "63a09169a6a9b33ce2485be2",
  "userId": "6396907df87cf714eb73d1ee",
  "companyName": "CÔNG TY CỔ PHẦN SPACE",
  "jobName": "Thưc tập JAVA",
  "location": "Đà Nẵng",
  "jobDetail": {
    "jobType": ["partTime"],
    "amountOfJob": "7",
    "amountOfWeek": "Trên 4 tuần"
  },
  "salary": {
    "salaryType": "range",
    "startAmount": "8.000.000",
    "endAmount": "30.000.000",
    "time": "perMonth"
  },
  "jobDescription": "{\"blocks\":[{\"key\":\"digg8\",\"text\":\"Junior Backend (NodeJS/TypeScript/NextJS/NestJS)\",\"type\":\"header-one\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":48,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5lth3\",\"text\":\"HUB Technology\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"djg7v\",\"text\":\"Ứng Tuyển\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"aklvg\",\"text\":\"NodeJS Java TypeScript\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7t4mi\",\"text\":\"Đăng nhập để xem mức lương\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8u9am\",\"text\":\"07 Trúc Đường, Phường Thảo Điền, Thu Duc City, Ho Chi Minh\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"74bjp\",\"text\":\"Xem bản đồ\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2nt6f\",\"text\":\"Tại văn phòng\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c2jqb\",\"text\":\"29 ngày trước\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"75n3b\",\"text\":\"Mô Tả Công Việc\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"ajtqa\",\"text\":\"Actively contribute in the technical solutions design and full development life cycle.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ctmf2\",\"text\":\"Design and update architecture diagrams and sequence diagrams in a microservices context.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5l9ok\",\"text\":\"Perform hands-on design, prototypes, and proof-of-concept and development as required in blockchain technologies or any other technologies.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6e1h1\",\"text\":\"Provides leadership to technical resources to meet project deadlines and ensure project objectives are met in an efficient way.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"31jr8\",\"text\":\"Promote and ensure good coding practices to ensure maintainability, simplicity and loose coupling of components; Guarantee enough coverage of unit testing, and provide guidance for proper integration testing.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"224sk\",\"text\":\"Working closely with Front End, Back End, Manual Testing and DevOps teams.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"adp5n\",\"text\":\"Yêu Cầu Công Việc\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":17,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"26pan\",\"text\":\"1.5+ years’ experience in backend development required.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5tgq7\",\"text\":\"Experience with microservices architectures deployed on the cloud.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5m66q\",\"text\":\"Sound experience with strongly typed, compiled languages such as NodeJS, Golang, Rust, Java (Spring/SpringBoot) or C++.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ah5ql\",\"text\":\"Understanding code written in Node.js, NestJS, Golang and Express.js development using TypeScript is a must.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8kq2s\",\"text\":\"Preference for experience with message broker / queue systems (eg. Kafka, RabbitMQ) to feed multiple consuming services or receive from multiple producing services; Familiar with concurrency and experience in dealing with concurrent design patterns, best practices and troubleshooting.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3ce6e\",\"text\":\"Familiar with docker, CI/CD pipelines and deployments on cloud environments.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bs5sm\",\"text\":\"Familiar with OpenAPI standards documentation and declarations.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"51i77\",\"text\":\"Experience in using Kubernetes clusters as a developer would be a plus.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"86ie8\",\"text\":\"Familiar with the fundamentals of security and advocate in terms of api design, secrets management, data encryption, dependency management.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"937f8\",\"text\":\"Experience in relational DBs and data schema management.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1dgec\",\"text\":\"Experience with no-SQL DB would be a plus (eg. MongoDB).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"b976\",\"text\":\"Strong communication skills in English\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f3rad\",\"text\":\"Strong and proven skills in team leadership\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7qi0b\",\"text\":\"Attention to detail, with the ability to work independently in an ambiguous, and often fast-paced environment.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5142j\",\"text\":\"Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":41,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"eevsp\",\"text\":\"Salary min 870$/ month.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cn9ku\",\"text\":\"Team building, Birthday, Year end party activities.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"46nam\",\"text\":\"2 salary reviews per year.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ele7s\",\"text\":\"Young, friendly, professional, dynamic working environment - working with many advanced technologies, diverse projects in various fields.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cdud2\",\"text\":\"Full benefits under labor law.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"320oi\",\"text\":\"Enjoy the 13th-month salary as well as participate in social insurance and health insurance contributions.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f7lfa\",\"text\":\"Preferred stock policy.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
  "createdAt": "2022-12-19T16:29:29.230Z",
  "updatedAt": "2022-12-25T07:01:56.523Z",
  "__v": 0,
  "status": true
}
```

#### delete by Job ID

##### `DELETE` http://localhost:3000/api/job/:id

##### example

`URL` http://localhost:3000/api/job/63a09169a6a9b33ce2485be2

response:

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```
