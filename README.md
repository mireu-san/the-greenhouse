# Main principle:
- CSS OR styled-components. 둘 중 하나만 사용하기. 
(둘다쓰면 유지보수가 끔찍해짐)
- 타인의 CSS 사례를 적극 참고해서 반영해보기.
- 완성 후, 리팩토링을 위해 중간에 메모 남겨두기.
- tag 및 class, function 명은 '최대한 간단하게' (길게 하면 디버깅때 괴로움)

# Debugging note:
[1] display: flex; 
- 이는 정말 그 목적에 부합하는 flex 하게 라인업 되어서 출력 됨. 즉, 지금까지 착각한 것이 반드시 지정된 정확한 지점에 맞게 픽셀을 조정하고, 엇나가면 padding 과 margin 을 조정해서 맞추는 것이었다.
- 이때, display: flex; 를 사용하기에 앞서 '각 영역 (텍스트 테두리 영역과 + 텍스트 영역) 의 width, height 를 미리 percentage 로 설정 해 둔다.
- 결론: 이렇게 하는게 반응형 할 때는 절대적인 해답임. 이제부터 percentage 이외의 조정은 미세조정임을 잊지 말고, 스크린에 대한 반응형(융통성)이 없음을 잊지말기.

[2] unable to load image from data.js
- image 폴더는 public 폴더에 두고 하기.  
- https://stackoverflow.com/questions/65858373/unable-to-import-image-from-data-js-file-in-react/65858630

[3] position: static, sticky, fixed;
- https://deeplify.dev/front-end/markup/position-sticky
- note: does not work on IE browsers