# Server

앱을 실행하는데 필요한 방법을 적었습니다. 명령어가 어떻게 동작하는지 알고자 한다면 `package.json` 파일을 참고하세요.
`yarn`을 사용하려면 `npm install --global yarn`으로 전역에 먼저 설치하세요. 모든 실행 명령어 `yarn` 부분을 `npm run`로 바꿔 실행해도 됩니다.

## 설명

로컬환경에 DynamoDB를 실행하고, fruitsTable 테이블을 만들어 조회하고 데이터를 입력하는 예제입니다.

## 앱을 실행하기 전에

- `yarn docker:build` 명령어로 DynamoDB를 Docker 형태로 띄웁니다.

### 개발 모드로 실행하기

- `yarn dev` - 개발모드로 실행

## 참고한 페이지

- https://keithweaverca.medium.com/using-aws-dynamodb-using-node-js-fd17cf1724e0
- https://github.com/keithweaver/MERN-boilerplate/tree/master-w-dynamodb
