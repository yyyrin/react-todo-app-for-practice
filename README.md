# To-Do App

## Overview

이 프로젝트는 `Recoil`을 사용하여 To-Do 리스트의 상태를 관리하고, `React Hook Form`을 활용하여 사용자로부터 To-Do 항목을 입력받는 기능을 제공하는 간단한 웹 애플리케이션입니다. 이 애플리케이션은 3개의 카테고리에서 To-Do 항목을 관리하며, To-Do 항목의 이동 및 삭제를 지원합니다. 또한, 브라우저의 `localStorage`를 활용하여 상태를 지속적으로 저장합니다.

<br/>

## 주요 기능

#### To-Do 생성 및 입력

- `CreateToDo` 컴포넌트를 통해 To-Do 항목을 입력하고 추가 가능
- `React Hook Form`을 사용하여 입력 양식의 유효성을 검사하며, 필수 입력 사항이 누락되지 않도록 함

#### To-Do 항목 관리

- `To-Do` 컴포넌트를 통해 각 To-Do 항목을 표시하고, 해당 항목의 상태를 변경하거나 삭제 가능
- To-Do 항목은 세 가지 카테고리 중 하나에 속하며, **"To Do"**, **"Doing"**, **"Done"** 으로 구분됨

#### To-Do 카테고리 필터링

- `ToDoList` 컴포넌트에서 카테고리를 선택하여 해당 카테고리에 속한 To-Do 항목만 필터링하여 볼 수 있음
- 선택된 카테고리는 UI에 실시간으로 반영되며, 브라우저의 `localStorage`에 저장되어 유지됨

#### To-Do 상태의 지속적인 저장

- 애플리케이션의 상태는 `Recoil`을 사용하여 관리되며, 변경된 상태는 `localStorage`에 지속적으로 저장됨
- 페이지를 새로고침하거나 브라우저를 종료해도 To-Do 항목과 선택돤 카테고리는 유지됨

<br/>

## Tech Stack

- React
- TypeScript
- React Router Dom
- styled-components
- Recoil
- React Hook Form

<br/>

## Quick start

Run the project by running:

```bash
npm install
npm start
```
