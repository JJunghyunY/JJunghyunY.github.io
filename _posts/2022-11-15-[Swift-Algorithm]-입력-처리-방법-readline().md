---
layout: post
title:  '[Swift Algorithm] 입력 처리 방법, readline()'
date: 2022-11-15 13:33:11 +0900
tags: Swift Algorithm
color: rgb(255,90,90)
cover: '../assets/1.png'
subtitle: 'readline()을 알아보자'
---

# readline()
swift에서의 입력 처리는 readline() 메소드를 통해 처리할 수 있다.  
프로그래머스처럼 입력처리를 따로 하지 않고 function으로 문제를 풀 수 있는곳도 있지만
백준과 같은 사이트는 주어지는 입력값의 처리를 따로 해야한다.  
알고리즘 문제를 풀기 위해서는 익혀야할 개념이다.

<br>

<img width="855" alt="image" src="https://user-images.githubusercontent.com/50796114/201829033-0cc7edd4-b30b-4a1d-b23f-7f4e0e3ce1e8.png">
Apple 공식 문서를 보면 현재 입력중인 라인의 끝이거나 EOF에 도달하기 전까지의 입력값을 `String`형태로 반환하는것을 알 수 있다.
 - 정수로 입력해도 String형태로 반환하기 때문에  
 정수로써 사용하려면 추가적으로 Int로 형변환을 해 주어야 함.
 - newline(엔터)을 입력받으면 readline()한개의 입력 처리가 끝난다.

<br>

<img width="868" alt="image" src="https://user-images.githubusercontent.com/50796114/201830228-222c451c-2f68-4e68-aa9b-47f8a45bf0a9.png">

<br>

Declaration을 보면 `String?`형태인 `Optional String` 형태로 return 하는것을 볼 수 있다.  
즉, nil을 반환하는 경우가 아래 Return Value에 나오는데, readline()이 불리기 전에 EOF에 도달 해 버리면 nil을 반환 해 버린다!  
Optional이기 때문에 강제 언래핑을 해 주거나, 옵셔널 바인딩을 사용하여 입력을 처리받는다.

Parameters부분을 보면 strippingNewline부분이 있는데 default값은 true이다.  
true이면 개행문자와 문자 조합이 결과에서 제되되고, false일 경우 유지된다고 하는데,,,  
false로 값을 줄 경우 입력값이 보존되지 않는다고 한다.(나중에 따로 테스트를 해 보아야 할 것같다)

<br>

### 옵셔널 바인딩을 활용해 문자열 입력받기
{% highlight swift %}
if let input = readline() {
  print("input value: \(value)")
}
{% endhighlight %}

### 강제 언래핑을 이용해 문자열 입력받기
만일 입력값이 확실히 보장된다면 강제 언래핑을 사용해도 괜찮다.
{% highlight swift %}
let input = readline()!
{% endhighlight %}

### 한 라인에 여러개의 값이 띄어쓰기로 구분되어 주어질 경우
split이나 components메소드를 사용하여 구분한다.
{% highlight swift %}
let valueS = readline()!.split(separator: " ")
let valueC = readLine()!.components(separatedBy: " ")
{% endhighlight %}

split과 componenets의 차이점으로는
 - `split`의 경우 문자열을 구분자 기준으로 쪼갤 수 있으며, 반환형은 `[Substring]`으로 반환한다.  
  그리고 swift표준 라이브러리에 속하기 때문에 별도로 import해 줄 필요 없이 사용이 가능하다.
 - `componenets` 메소드의 경우 split과 같이 문자열을 구분자 기준으로 쪼개지만, 반환형은 `[String]`형태인 점이 다르다.  
  그리고 Foundation 프레임워크에 속하기 때문에 import Foundation을 해 주어야 사용이 가능하다.

### map 활용
1. 입력받은 문자열을 Int형태의 배열로 변환

2. 행렬 형태의 값 입력받기

3. 등등

업데이트 할 예정!
<br>
