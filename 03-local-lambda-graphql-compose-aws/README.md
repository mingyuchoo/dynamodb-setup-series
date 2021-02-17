# Server

앱을 실행하는데 필요한 방법을 적었습니다. 명령어가 어떻게 동작하는지 알고자 한다면 `package.json` 파일을 참고하세요.

## 앱을 실행하기 전에

- docker가 설치되어 있어야 합니다.
- node 최신 LTS 버전을 설치하세요.
- AWS 계정이 있어야 합니다.
- `aws cli`, `sam cli`를 설치하세요.
- `aws configure` 명령을 이용해서 자신의 aws 정보를 저장하세요.
- AWS 콘솔에 들어가 DynamoDB 테이블 `Cat`을 만들고 Key로 `id`를 만듭니다.
- AWS에서 S3 버켓을 만들고 `package.json`파일에 있는 `<s3-bucket-name>` 부분을 생성한 S3 버켓이름으로 바꿉니다.
- `yarn`을 사용하려면 `npm install --global yarn`으로 전역에 먼저 설치하세요. 모든 실행 명령어 `yarn` 부분을 `npm run`로 바꿔 실행해도 됩니다.
- (`yarn docker:build` 명령어로 DB를 Docker 형태로 띄웁니다.)

## 빌드 방법

## 로컬 모드로 Lambda 실행하기

- `yarn start`: AWL Lambda를 로컬에서 실행합니다. `yarn start`가 어떻게 작동하는지 궁금하시면 `package.json` 파일을 참고하세요.

### Playground 이용하기

Apollo 에서 제공하는 GUI 화면입니다. GraphQL 쿼리를 직접 실행할 수 있습니다.

- `http://localhost:4000/graphql` 로 접속하면 Playground 화면이 나옵니다.

- 그리고 왼쪽 창에 쿼리를 입력 후 실행 버튼을 누릅니다. (Ctrl+Enter)

## AWS에 배포하기

운영환경에서는 TypeScript로 배포하지 않습니다. JavaScript 형태로 컴파일한 상태로 배포하는데요,
TypeScript를 컴파일하면 확장자 모두 \*.js인 자바스크립트로 dist 디렉토리 안에 만들어집니다.
이 과정을 빌드(`yarn build`)라고 합니다.

운영환경이라는 것을 명확하게 알려주기 위해 `NODE_ENV` 라는 환경변수에 `production` 이라고 선언해서 실행합니다.
환경 변수가 설정된 내용은 `.env.test`, `package.json`, `nexusSchema.ts`에서 확인하세요.

- `yarn build`: `src` 소스 파일을 트랜스파일해서 `dist`에 빌드한다.
- `yarn sam:validate`: `template.yml` 파일에 오류가 없는지 검증합니다.
- `yarn sam:package`: `template.yml`을 이용하여 `package.yml` 파일을 만듭니다.
- `yarn sam:deploy`: `package.yml` 을 이용하여 AWS 자원을 만듭니다. 이 때 현재 디렉토리(`node_modules`, `dist` 포함)의 모든 파일이 압축되어 AWS로 올라가고 CloudFormation이 필요한 자원을 만들고 배포합니다.
- 배포가 완료되면 AWS APIGateway 에 나와있는 endpoint를 이용해서 제대로 작동하는지 확인하세요.

## 추가 정보

### Lint 실행하기

Lint는 사전에는 보푸라기라고 나와있는데, 규칙에 어긋난 코드를 알려주고 수정까지 해주는 것을 말합니다.
TypeScript용 Lint 도구인 TSLint는 deprecated되어 ESLint 모듈을 사용합니다.
코드를 자동으로 포맷팅해주는 Prettier와 묶어 놔서 Lint를 실행하면 코드 자동 포맷팅까지 됩니다.

- `yarn lint`: MacOS, Linux 에서 실행
- `yarn lint:win`: Windows 에서 실행

## 참고한 페이지

- https://www.npmjs.com/package/graphql-compose-aws
- https://github.com/graphql-compose/graphql-compose-aws
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
