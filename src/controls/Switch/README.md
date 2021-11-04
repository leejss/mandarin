# Switch components

## implements

```ts
<input type="checkbox" role="switch" />
```

```ts
<label></label>
```

https://web.dev/building-a-switch-component/

checked property

layout for the switch

switch는 두 가지 부분으로 이루어져 있다. track과 thumb

track size
thumb size

트랙 사이즈 결정하기

- inline-size
- block-size

# 구성요소

track
thumb
:checked
::before
transform: translateX
css varaible

checked 상태가 되면 translateX를 통해서 포지션을 이동시킨다.

포지션을 어떻게 계산할까?

스타트 포지션: translateX(0%);
마지막 포지션: translateX(-100%)

CSS 만으로 스타일을 구현하기 위해서 CSS 변수를 이용한다. 여기서 가변적인 값은 포지션 값 따라서 포지션 값을 변수화하면 JS없이도 스타일을 구성할 수있다.

```scss
--thmmb-position: 0%;
.Switch::before {
  transform: translateX(var(--thumb-position)); // stay still
}
```

여기에서 checked상태가 되면 calc()를 통해서 새로운 값을 부여한다.

```scss
// 스위치가 checked상태가 되면 --thumb-position의 값을 새롭게 변경한다.
.Switch {
  &:checked {
    --thumb-position: calc(--thumb-position - 100%);
  }
}
```

위 값을 변화하게 되면 변화에 반응하여 새롭게 스타일을 보여주게 된다.

input state - indeterminate

box-shadow를 통해서 hover effect 부여하기
hover 시, box-shadow를 결정하는 css변수 값 바꾸기
