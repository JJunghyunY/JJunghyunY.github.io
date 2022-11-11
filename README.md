## HardCandy-Jekyll



### Preview

[view demo →](http://xseven.me/)

![1](/screenshot/1.png)

![2](/screenshot/2.png)

![3](/screenshot/3.png)

휴대폰에서 디스플레이 효과를 보려면 아래 QR 코드를 스캔하여 브라우저를 엽니다.

![4](/screenshot/4.png)



### 테마 기능

- `jekyll 3.8.1` 기반으로 개발된 테마
- 반응형 레이아웃
- 기사 태그 색인
- 기사 타임라인 인덱스
- 블로거의 개인정보 표시
- 테마 색상을 강조하는 9가지 코드 지원
- `dispus` , `Laibili` , `Gitment` 3가지 코멘트 시스템 지원
- 'Baidu Statistics' 및 'Google Analytics' 두 가지 웹사이트 추적 시스템 지원
- 13개의 다양한 소셜 플랫폼 아이콘 및 링크 주소 지원
- 11개의 다른 플랫폼에서 기사 공유 접합 지원



### 사용 시작

#### 온라인 배포

​ 먼저 `github username.github.io`라는 `github`에서 저장소를 엽니다. 그리고 저장소를 로컬로 `복제`합니다. 그런 다음 `HardCandy-Jekyll`의 [소스 코드](https://github.com/xukimseven/HardCandy-Jekyll)를 로컬로 다운로드하고 `_config.yml` 파일을 자신의 구성(아래 설명)으로 변경합니다. 그런 다음 모든 파일을 자신의 로컬 웨어하우스의 루트 디렉터리에 복사한 다음 `github` 온라인 웨어하우스에 업로드하면 도메인 이름 `https://yourgithub username.github.io'를 통해 방문하여 자신을 볼 수 있습니다. ` 블로그 페이지.

#### 로컬 배포

​ 먼저 `Jekyll`을 로컬에 설치 [자세한 내용은 클릭](https://www.jekyll.com.cn/docs/quickstart/)

설치가 완료되면 `jekyll -v` 명령어를 사용하여 **jekyll 버전 번호**를 확인하고, `jekyll 3.x.x`보다 낮으면 `jekyll 3.x.x`로 업그레이드해야 합니다.

​ `gem install jekyll-paginate` 또는 `sudo gem install jekyll-paginate`를 사용하여 Jekyll의 페이지 매김 플러그인을 설치합니다.

​ 소스코드 `clone`을 로컬에 복사한 후, 터미널에 `HardCandy-Jekyll` 루트 디렉토리로 진입하고 `jekyll server` 또는 `bundle exec jekyll serve`를 실행하여 jekyll 서비스를 시작합니다. 브라우저를 통해 [http://localhost:4000](http://localhost:4000)에 접속하면 로컬에 배포된 'HardCandy-Jekyll' 블로그를 볼 수 있다.

> 경고! 주목할만한 장소:
>
> ​ 본 테마는 'jekyll 3.8.1' 기반으로 개발되었기 때문에 jekyll의 버전 차이로 인해 관련 표시 효과가 다르게 나타날 수 있습니다. 자세한 내용은 공식문서 [news](https://jekyllrb.com/news/)를 참조하세요.



### 구성 문서

- 시작
  - [블로그 소개] (#블로그 소개)
  - [글쓰기](#글쓰기)
- 구성품
  - [블로거 개인정보] (#블로거 개인정보)
  - [소셜미디어](#소셜미디어)
  - [첫 페이지에 정보 표시] (#첫 페이지에 정보 표시)
  - [내비게이션 바](#내비게이션 바)
  - [페이지](#페이지)
  - [코드 하이라이트 테마](#코드 하이라이트 테마)
  - [우정링크](#친화링크)
  - [바닥글](#바닥글)
- 제3자 서비스
  - [댓글 시스템 전환](#댓글 시스템 전환)
  - [기사공유의 교차점] (#기사공유의 교차점)
  - [웹사이트 트래픽 추적 설정] (#웹사이트 트래픽 추적 설정)



> ​일반적으로 `_config.yml` 파일을 수정하면 나만의 블로그를 쉽게 만들 수 있습니다.
>
> ​ 일부 구성은 기본적으로 이미 구성되어 있으며 아래 내용만 수정하면 구성이 완료됩니다.


#### 블로그 소개

````yaml
---
# 사이트 설정은 사이트를 구성합니다.
제목: '당신의 멋진 제목'
설명: '웹 설명'
키워드: '귀하의 웹 키워드, 다른 키워드'
url: 'https://abc.github.io' # 호스트
---
````

`title` : 페이지의 제목 태그에 대한 콘텐츠 표시

`description` : 웹사이트에 대한 간략한 설명

`keywords` : 웹사이트의 키워드

`url` : 웹사이트 도메인 이름



#### 에세이 쓰기

​ 블로그는 'markdown' 파일을 파싱하여 기사 페이지를 배포하므로 사용자는 기사를 작성하기 위해 마크다운을 작성하고 사이트의 루트 디렉토리의 '_post' 폴더에 배치하기만 하면 됩니다. 인터넷에서 특정 마크다운 구문을 검색하여 배우거나 마크다운 편집기를 사용하여 작성하십시오. 마크다운 편집기를 권장합니다: [typora](https://www.typora.io). 윈도우, 맥 OSX, 리눅스를 지원합니다.

기사 YAML 헤더 정보 정보:

```yaml
layout: post
title:  "post title"
subtitle: 'post subtitle'
date:   2018-05-29 08:44:13
tags: html js css
description: ''
color: 'rgb(154,133,255)'
cover: ''
```

색상 정보:

​ 여기의 색상은 포스트 페이지 상단의 배경색으로 사용됩니다. 위와 같이 'rgb(154,133,255)' 색상입니다.

​ 색상 표기 시 색상 코드가 'rgb', 'rgba' 또는 '영어 단어'인 경우 따옴표 없이 줄 바꿈할 수 있지만 색상 코드가 '#123456'인 경우 이 16진수 코드를 사용해야 합니다. 인용 부호. 따라서 사용 시 오용을 방지하기 위해 따옴표를 일관되게 사용하는 것이 좋습니다.

물론 글을 작성할 때 color 값을 쓰는 것을 잊었다면 기본적으로 테마가 `rgb(154,133,255)` 색상을 채워줍니다. 위에 보이는 색상입니다. 페이지의 표시에는 영향을 미치지 않으나, 보다 화려한 페이지 효과를 원하신다면 각 기사의 헤더 정보에 색상 값을 기재하는 것을 권장합니다.

덮개에 관하여:

​ 여기에 특정 사진의 'url'을 입력해야 하며, 'url' 값은 온라인 사진이나 블로그 디렉토리에 있는 사진이 될 수 있습니다. 핵심은 정확하게 작성하는 것입니다. 이 사진은 아래와 같이 홈페이지 아래의 블로그 목록에 표시하기 위해 사용됩니다.

![5](/screenshot/5.png)




#### 블로거 개인 정보

```yaml
# 博主
author: true
name: 'your awesome name'
NickName: 'your awesome nickname'
webtitle: 'your awesome webtitle'
bio: 'your awesome bio'
about: true
aboutyou: 'your introduction'
portraits: '/assets/profile.jpeg' # your portraits image file path
```

​ 이 섹션은 아래 이미지의 '소셜 미디어'와 함께 'Blogger 소개' 페이지에 표시됩니다.

![6](/screenshot/6.png)

저자 소개:

​ 블로거 정보 카드를 열거나 닫으려면 'true' 또는 'false'를 사용하세요. 기본값은 true 이며 최상의 경험도 true 입니다.

정보:

​ 'true' 또는 'false'를 사용하여 정보에 대한 블로거, 즉 aboutyou 섹션에 정보를 표시할지 여부를 켜거나 끕니다. 기본값은 true 이며 이 섹션에서는 aboutyou에 관련 정보를 입력해야 하며 여기에 html 코드를 입력할 수 있습니다.



#### 소셜 미디어

````yaml
# SNS
SNS: 사실
SNS-icon: #['페이스북', '웨이보', 'qq', '깃허브', '드리블', '트위터', '인스타그램', '웨이신', '코드펜']
  메일: 'mailto:abc@gmail.com'
  weixin: '' # WeChat QR 코드가 저장된 주소
  qq: '' # qq QR 코드가 저장된 주소 또는 http://wpa.qq.com/msgrd?v=3&uin='귀하의 QQ 번호'&site=qq&menu=yes
  github: ''
  Codepen: ''
  weibo: ''
  instagram: ''
  Twitter: ''
  Dribbble: ''
  Facebook: ''
  Google: ''
  zhihu: ''
  juejin: ''
  twitch: ''
```


​ ~~이 테마는 총 13가지 소셜 미디어 아이콘으로 구성되어 있습니다. 개설해야 하는 소셜 계정 이름 뒤에 개인 홈페이지 링크를 입력하면 됩니다. 열 필요가 없으면 ` #`를 줄 머리에 넣어 주석을 답니다. 한 줄이면 됩니다. 마찬가지로 각 아이콘의 정렬 위치를 변경해야 하는 경우 각 행의 정렬 순서만 변경하면 됩니다. ~~

​ 'SNS' 뒤에 'true' 또는 'false'를 입력하여 이 섹션을 켜거나 끕니다.

2018/09/28 업데이트：

![7](/screenshot/sns-icon.png)

- 쉽게 관리하고 수정할 수 있도록 소셜 아이콘을 온라인 주소로 업데이트합니다.
- **Codepen** 아이콘 추가
- 원래 원형 아이콘을 불규칙한 아이콘으로 수정



#### 홈 디스플레이 정보

```yaml
---
layout: default
title: your awesome title
page-title: awesome page-title.
home-title: awesome home-title.
description: description
---
```

​ 이 부분은 `index.html` 페이지에 있으며 `title` , `page-title` , `home-title` , `description` 을 원하는 정보로 수정하면 기본 설정이 아래와 같이 표시됩니다.

![7](/screenshot/7.png)



#### 탐색 모음

````yaml
# nav 한자 공백: &emsp;
nav: # 6개의 태그를 가장 잘 경험하고 태그당 4자 이하의 한자를 사용하는 것이 좋습니다.
  첫 장: '/'
  태그: '/tags.html'
  타임라인: '/timeline.html'
  블로거 소개: '/about.html'
  우정 링크: '/friendLink.html'
````

​ 기본적으로 모두 켜져 있으며, 물론 직접 추가하고 싶다면 아래 형식으로 채워넣으시면 됩니다. 물론 페이지의 표시 순서는 각 행의 위치와 관련이 있습니다.



#### 페이지 매김

````yaml
# 페이지 매김
페이지 매김: 2
페이지 매김 경로: ['페이지:넘버']
````

​ 개인의 취향에 따라 홈 페이지의 한 페이지에 최대 표시해야 하는 블로그 수를 입력합니다.

​ 로컬 배포의 경우 `gem install jekyll-paginate` 또는 `sudo gem install jekyll-paginate`를 사용하여 Jekyll의 페이지 매김 플러그인을 설치합니다.



#### 코드 강조 테마

````yaml
# 루즈를 사용한 코드 하이라이트
하이라이터: 루즈
# 코드 강조 테마는 pygments 테마를 사용합니다. autumn\ default\ emacs\ friendly\ manni\ murphy\ pastie\ perldoc\ tango 원하는 테마 이름을 선택하고 아래 작은 따옴표를 입력하십시오.
pygmentsTheme: '기본'
````

​ 코드 하이라이트는 jekyll 3.0 이후 기본 하이라이트 엔진인 'rouge'를 사용합니다. 테마는 `pygmentsTheme` 뒤에 원하는 테마의 이름을 입력하면 됩니다. 선택할 수 있는 총 9개의 테마가 있습니다. 테마 이름은 위를 참조하십시오.

​ 코드 강조:

~~~마크다운
```` CSS
*{
 여백:0;
 패딩:0;
}
````
~~~

2018/09/28 업데이트:

![7](/screenshot/博客代码高亮例子.png)

위 그림은 **코드 강조 테스트 예시** 입니다. html만 참고용으로 사용하고, 다른 코드는 위 그림을 참조하거나, 직접 테스트를 전환하여 원하는 코드 하이라이트 테마를 선택하세요.



#### 연결

````yaml
# 연결
친구들:
  지킬: 'https://www.jekyll.com.cn/'
````

​ 형식을 채우면 정렬은 구성 파일의 정렬과 관련됩니다.



#### 바닥글

````yaml
# 부터
보행인:
  이후: 2018
````

​ 푸터에 시간을 표시할 때 사용합니다.



#### 댓글 시스템 전환

````yaml
# 댓글 최고의 경험 disqus, livere 및 Gitment 중에서 선택
#disqus 댓글
disqus: 거짓
disqus_url: '' # https://abc.disqus.com/embed.js
# 빌리 댓글로 오세요
리버: 사실
livere_uid: 'MTAyMC8zNDI2OS8xMDgwNg==' # MTAyMC8zNDI2OS8xMDgwNg==
#GitmentComments OAuth 애플리케이션
Gitment: 거짓
Gitment_owner: '' # github 사용자 이름
Gitment_repo: '' # github 블로그가 저장된 저장소 이름
client_id: '' # OAuth 애플리케이션 등록 후 얻은 client_id
client_secret: '' # OAuth 애플리케이션 등록 후 얻은 client_secret
````

​ 제3자 심사를 신청하여 얻은 관련 정보를 구성 파일에 입력할 수 있습니다.

​ 선택할 수 있는 댓글에는 세 가지 유형이 있습니다. 'true' 또는 'false'를 사용하여 댓글 시스템을 활성화하거나 비활성화합니다. 여러 개 또는 완전히 열려 있습니다. 물론 최상의 경험을 위해 하나를 여십시오.

세 댓글의 스타일은 다음과 같습니다.

dispus：

![8](/screenshot/8.png)

빌리로 오세요:

![9](/screenshot/9.png)

Gitment 코멘트:

![10](/screenshot/10.png)

​	세 가지 리뷰는 각각 장단점이 있습니다. 중국 본토의 디스플레이 스타일과 네트워크 환경을 고려하여 테마는 최고의 경험을 위해 기본적으로 'Lebili' 댓글을 활성화합니다. 물론 관련 `livere_uid` 코드를 작성해야 합니다.


#### 기사 공유의 교차점

```yaml
# Share : weibo, qq, wechat, tencent, douban, qzone, linkedin, diandian, facebook, twitter, google
social-share: true
social-share-items: ['qq', 'wechat', 'weibo', 'twitter', 'facebook']
```

​ 보다 편리하게 기사를 공유할 수 있도록 원클릭 공유를 지원하는 타사 공유 플러그인 [Share.js] (http://overtrue.github.io/share.js/)를 사용합니다. Weibo, QQ space 및 QQ 친구, WeChat, Tencent Weibo, Douban, Facebook, Twitter, Linkedin, Google+, Diandian 및 기타 소셜 네트워킹 사이트에.

​ 'social-share-items' 뒤에 해당 이름을 입력하면 표시 순서는 쓰기 순서와 관련이 있습니다.



#### 웹사이트 트래픽 추적 구성

````
# Baidu Statistics baidu-url에 자신의 URL 코드 입력
바이두: 사실
바이두 URL: ''
# Google Analytics google-ID에 Google Analytics에서 얻은 추적 ID를 입력
구글: 거짓
구글 아이디: ''
````

​ 'baidu-url'과 'google-ID'에 등록하여 얻은 관련 정보를 각각 입력합니다. 'true' 또는 'false'를 사용하여 켜거나 끕니다. 중국 본토의 네트워크 환경으로 인해 Baidu 통계는 기본적으로 활성화되어 있지만 더 열 수 있습니다.



### 라이선스 라이선스
HardCandy-Jekyll is licensed under [MIT](https://github.com/xukimseven/HardCandy-Jekyll/blob/master/LICENSE).



### 스타에게 관심을 요청하세요

이것을 보시고 제 작은 프로젝트가 마음에 드시면 다운로드하여 사용하실 수 있습니다. 작은 별점 😜 , 감사합니다.
