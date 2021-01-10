# 언택트 시대 배달비가 부담되는 대학생을 위한 배달비 공동 부담 플랫폼, N빵

[구경하러 가기~](https://nbbang.kro.kr)

## 👥 Team

|                                                           강근우                                                            |                                                           문혜라                                                            |                                                           박진용                                                            |                                                           이한주                                                            |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img width=85 src="https://avatars3.githubusercontent.com/u/52201658?s=400&u=4408005f95fd9ef3b95279cd1399f1b388fca6df&v=4"> | <img width=85 src="https://avatars0.githubusercontent.com/u/20068470?s=400&u=f84948e4c48880aa7f60f0b2ff4f31884457a621&v=4"> | <img width=85 src="https://avatars1.githubusercontent.com/u/60877502?s=400&u=f865c33c7eace2b43b9327641bbd987e528848e2&v=4"> | <img width=85 src="https://avatars0.githubusercontent.com/u/63051473?s=460&u=752d76ccaac7da54547adcd552a79e1a73dba505&v=4"> |

</div>

## 기술 스택

### Front-End

|      Spec       | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110741-e66d1e80-531d-11eb-8024-e138a1003cd7.png"> | <img width= 50 src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110747-f127b380-531d-11eb-801e-e97233b5acfb.png"> | <img width= 50 src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png"> |
| :-------------: | :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| **Description** |                                                         JavaScript                                                          |                                                            React                                                             |                                                           Recoil                                                            |                                                      Styled-Components                                                       |

</br>

### Back-End

|      Spec       | <img width= 50 src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png"> | <img width= 50 src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597622806/noticon/avedhz3pvaij65k3ztar.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110726-c76e8c80-531d-11eb-951b-89587d8a93a4.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110711-b0c83580-531d-11eb-8f80-d7aee997c398.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110717-bcb3f780-531d-11eb-9ae0-9a468bf06060.png"> |
| :-------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| **Description** |                                                          TypeScript                                                          |                                                           Express                                                            |                                                            MySQL                                                            |                                                           TypeORM                                                           |                                                           TS-NODE                                                           |

</br>

### Infrastructure

|      Spec       | <img width= 50 src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566798146/noticon/lku5cppzh8r7awwsmmko.png"> | <img width= 50 src="https://cdn-images-1.medium.com/max/1200/1*r5KdIfHXaz7UQM4FmZ0D5A.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110734-d2c1b800-531d-11eb-88bb-68d718f02653.png"> | <img width= 50 src="https://user-images.githubusercontent.com/63051473/104110736-dce3b680-531d-11eb-9431-564813d0dad3.png"> |
| :-------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| **Description** |                                                            Nginx                                                             |                                             NCP                                             |                                                           Docker                                                            |                                                           Jenkins                                                           |

## DevOps

<img src="https://user-images.githubusercontent.com/63051473/101992417-6d66b100-3cf6-11eb-8df9-ef7f65e90bf3.png"/>

## 🚦 How to start?

### 1. NPM

> npm, node가 설치되어 있다면 이 방법으로 시작할 수 있습니다.

#### (1) Clone

```bash
git clone https://github.com/boostcamp-2020/Project12-A-Slack-Web.git
```

#### (2) Frontend Setting

```bash
cd client
yarn install
# .env 파일 생성
```

`/common/constant.js를 생성하기`

```
const env = {
  SERVER_BASE_URL: "<서버 Url>/api",
};

export default env;

```

> `SERVER_DOMAIN_PRODUCTION`와 `SOCKET_SERVER_DOMAIN_PRODUCTION`은 `URL:3000`, `URL:4000`와 같이 작성해주시면 됩니다.

#### (3) Backend Setting

```bash
cd ../server
npm install
# .env 파일 생성
```

`.env`

```
NODE_ENV = <dev라면 dev, production 환경이라면 prod>
SERVER_PORT = 4000

TYPEORM_CONNECTION = mysql
TYPEORM_HOST = <DB host>
TYPEORM_PORT = <DB port>
TYPEORM_USERNAME = <DB user name>
TYPEORM_PASSWORD = <DB password>
TYPEORM_DATABASE = <DB database name>
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/entity/*.entity.js

kakao_clientId = <kakao client ID>
kakao_redirect_dev = http://localhost:4000/api/auth/callback/kakao
kakao_redirect_production = <배포 FE 서버 URL>/api/auth/callback/kakao

JWT_SECRET = <JWT secret key>
JWT_TOKEN_EXPIRES_IN = <JWT token expire time>
CLIENT_URI_DEV = http://localhost:3000
CLIENT_URI_PRODUCTION = <배포 FE 서버 URL>
```

#### (4) Backend 실행

```bash=
npm start
```

#### (5) Frontend 실행

```bash=
cd ../client
npm run dev
```
