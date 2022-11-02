#### json server를 사용한 코로나 차트 웹어플리케이션.

<br/>

# 목차

- [실행](#1-실행)

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=Next.js&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
     <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
     <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
     
</div>

<br/>
<br/>

<br />

<br />

#### json 파일 다운로드

https://drive.google.com/file/d/1Y9XCynmsbmw-W_cCgpDA7DiV7fNZMBaF/view?usp=sharing

#### json server 실행방법

<br />

```sh

npm install -g json-server

json-server -p 9000 db.json // 포트 9000으로 서버 실행
```

<br/>

<br/>
<br/>

<br/>
<br/>

## 1. 실행

### 실행 방법

```sh
npm install

npm run dev
```

<br/>
<br/>

#### 2-1 Main

- 코로나 일자별 코로나 확진자 수
  <img width="454" alt="image" src="https://user-images.githubusercontent.com/97820540/199507367-b4f8d3cd-99be-46e4-b24b-0009cb085085.png">

![image](https://user-images.githubusercontent.com/97820540/199507748-483bf04a-f018-43e8-9a5f-408c9263e54f.png)

- 코로나 일자 별 연령대 확진자 수
  <img width="473" alt="image" src="https://user-images.githubusercontent.com/97820540/199508089-c0ee42b8-0c8c-4d6a-8b07-da5efc7d8433.png">

![image](https://user-images.githubusercontent.com/97820540/199507948-2124202b-4d0e-4ad5-9fa7-9cdc70beceed.png)

- 코로나 일자 별 성별 확진자 수

![dbdselect-02-2022 22-58-49](https://user-images.githubusercontent.com/97820540/199508683-7e71de68-da6d-4da3-9a68-c7e6e3d5c56d.gif)

<img width="473" alt="image" src="https://user-images.githubusercontent.com/97820540/199509057-3971aecb-a432-456e-ba1b-042533371ceb.png">

select box에서 선택될 state의 기본값은 데이터의 날짜들중 제일 빠른 날자로 설정.

<img width="473" alt="image" src="https://user-images.githubusercontent.com/97820540/199509276-9f238968-af59-4372-bae4-231c39b9d660.png">

<img width="473" alt="image" src="https://user-images.githubusercontent.com/97820540/199509328-a448a3e9-38aa-4b93-9a14-6aac51dfa96b.png">

<img width="473" alt="image" src="https://user-images.githubusercontent.com/97820540/199509746-4acdc75a-bbb9-4523-be4a-f07fbac53ba9.png">

선택된 날짜가 selected로 저장되며 useMemo를 사용하여 selected 값 변경시
각 성별과 selected값과 맞는 데이터를 리턴하여 표기.

<br/>

<br/>

#### 2-2 SideBar

- 선택된 Menu Item color 변경
  <img width="488" alt="image" src="https://user-images.githubusercontent.com/97820540/199498914-a3386a8c-9f74-48e5-ae18-e7906016d375.png">

  현재 pathname과 sidebar 카테고리들의 각 url를 비교하여 색깔 변경.

<br/>

- 해당하는 페이지로 push 후 메인 섹션은 빈페이지로 라우팅(path는 임의 설정)
  <img width="488" alt="image" src="https://user-images.githubusercontent.com/97820540/199499279-af7e75a2-8bfe-4931-a80b-acab4522bf32.png">

  <img width="238" alt="image" src="https://user-images.githubusercontent.com/97820540/199499412-c9a4ae2d-1efd-42e1-821e-b3a35332e520.png">

  해당 카테고리 클릭시 페이지 이동.

<br/>

<br/>

<br/>

<br/>
