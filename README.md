# Intro
- 이 프로젝트는 전작 new-lighthouse repository 에서 구현에 실패한 문제점을 보완하여, 새롭게 제작된 포트폴리오 페이지입니다.
- 미리보기 주소: https://quizzical-lalande-ad5cef.netlify.app

# Main principle:
- CSS OR styled-components. 둘 중 하나만 사용하기. 
(둘다쓰면 유지보수가 끔찍해짐)
- 타인의 CSS 사례를 적극 참고해서 반영해보기.
- 완성 후, 리팩토링을 위해 중간에 메모 남겨두기.
- tag 및 class, function 명은 '최대한 간단하게' (길게 하면 디버깅때 괴로움)

# 확고히 정립하게 된 점 (언제든지 대응 가능)
- Media query 를 이용한 mobile view 창크기 대응.
- responsive css 적용을 위한 대응.
- animation effect / CSS
- bright/dark view mode / JavaScript, mouse click event
- 기본 react hook (useContext) 에 대한 적용. (note: globally apply props e.g. something should appear on top of each page)
- REST API 적용 대응 - emailjs
- 함수적 대응: map, key 응용대응 to another javascript file
- useState 의 적용 시점, 확고해짐. 
https://stackoverflow.com/questions/53165945/what-is-usestate-in-react 
https://stackoverflow.com/questions/58860021/why-react-hook-usestate-uses-const-and-not-let
https://react.vlpt.us/basic/07-useState.html

# 아쉬운 점 (아직 외부 자료의 도움이 필요)
- react-redux https://stackoverflow.com/questions/42871136/dispatch-function-in-react-redux
- 너무 포트폴리오 랜딩 페이지 위주로만 제작 함. 그 다음 프로젝틍 에서는 간이 검색 엔진을 구현해 볼 예정.

# Debugging note:
[1] display: flex; 
- 이는 정말 그 목적에 부합하는 flex 하게 라인업 되어서 출력 됨. 즉, 지금까지 착각한 것이 반드시 지정된 정확한 지점에 맞게 픽셀을 조정하고, 엇나가면 padding 과 margin 을 조정해서 맞추는 것이었다.
- 이때, display: flex; 를 사용하기에 앞서 '각 영역 (텍스트 테두리 영역과 + 텍스트 영역) 의 width, height 를 미리 percentage 로 설정 해 둔다.
- 결론: 이렇게 하는게 반응형 할 때는 절대적인 해답임. 이제부터 percentage 이외의 조정은 미세조정임을 잊지 말고, 스크린에 대한 반응형(융통성)이 없음을 잊지말기.

[2] unable to load image from data.js
- image 폴더는 public 폴더에 두고 하기.  
- https://stackoverflow.com/questions/65858373/unable-to-import-image-from-data-js-file-in-react/65858630
[Added] : https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder
- 분명 public 에서 src 로 하면 되는게 맞으나, 편의상 하라는대로 src 폴더 내부에 img 재이동.


[3] position: static, sticky, fixed;
- https://deeplify.dev/front-end/markup/position-sticky
- note: does not work on IE browsers