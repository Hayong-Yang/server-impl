# Spring Boot 기반 회원 + 게시판 서비스 구현

## 과제 개요

사용자는 로그인 후 게시글을 작성, 조회, 수정, 삭제할 수 있으며, 게시판 조회는 페이지네이션 방식을 도입했습니다.  
**React + Spring Boot + MyBatis + JWT** 기반으로 개발되었으며, 클라이언트와 서버는 서로 다른 폴더에서 관리됩니다.

---

## 폴더 구조

```
serverImpl/
├── front/            # 프론트엔드 (React)
└── server/        # 백엔드 (Spring Boot)
```

---

## 주요 기능

### 1. 사용자 인증

- 로그인 시 JWT 토큰을 발급하여 로컬스토리지에 저장
- 토큰에서 `userId`, `username`을 파싱해 인증 및 권한 확인

### 2. 게시글 목록

- 서버에서 페이지별 게시글 조회
- `totalCount`를 기반으로 동적 페이지네이션 구현

### 3. 게시글 작성

- 로그인한 사용자만 작성 가능
- 토큰을 통해 작성자 ID 자동 등록

### 4. 게시글 상세 보기 (모달)

- 게시글 클릭 시 내용 모달로 표시
- 작성자 본인일 경우, 수정/삭제 버튼 표시

### 5. 게시글 수정

- `navigate("/board/edit/{id}", { state: post })` 로 수정 페이지 이동
- PUT 요청으로 수정 내용 반영

### 6. 게시글 삭제

- DELETE 요청으로 게시글 삭제
- 토큰 기반으로 작성자 확인 후 삭제 가능

---

## 인증 방식 (JWT)

- 로그인 성공 시:
  - `username`, `userId` 기반으로 토큰 생성
  - 프론트엔드는 토큰을 `localStorage`에 저장
- 서버는 `Authorization: Bearer {token}` 헤더로 유효성 검사 수행

---

## API 예시

### POST /api/posts

게시글 생성

### GET /api/posts?page=1&size=10

페이지별 게시글 목록 조회

### DELETE /api/posts/{id}

해당 게시글 삭제 (작성자 본인만 가능)

### PUT /api/posts/{id}

게시글 수정 (작성자 본인만 가능)

---

## 실행 방법

### 백엔드 (server 폴더)

```bash
cd server
./gradlew bootRun

또는

인텔리제이에서 server폴더 실행


```

### 프론트엔드 (front 폴더)

```bash
cd front
npm install
npm run dev
```

---

## 기타

- CORS 설정은 `http://localhost:5173` 에서 접근 가능하도록 구성
- 게시글 모달에서 **작성자 본인인 경우에만 수정/삭제 버튼**이 보임
- 게시글이 존재하지 않거나 권한이 없는 경우 에러 처리
