# Blog Back-end

```
1차
1. Blog 리스트, 상세, 댓글 처리
2. Rest api 기능
3. Error 처리
4. MongoDB 연동 -> config file
5. Dev, Stage, Production 구분
6. 리펙토링, 구조 정리
```
<hr/>

```
2차
1. JWT
2. Admin Mng. -> Auth, Login, Session
3. 리펙토링, 구조 정리
```
<hr/> 

```json
let blogs = [
    {
      id: 1,
      name: 'alice',
      title: 'This is a title for my blog',
      contents: 'Hi Hello make some contents, Can write HTML',
      createDate: '2018-05-18T16:00:00Z',
      updateDate: '2018-05-18T16:00:00Z',
      count: 10,
      display: true,
      comments:[
          {
              name: 'david',
              email: 'david@gmail.com',
              content: 'wow'
          }
      ]
    }
  ]
```