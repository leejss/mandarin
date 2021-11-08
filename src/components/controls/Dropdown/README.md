# Dropdown Component

## How to markup?

select와 옵션 => semantic but non-creative ui

div와 ul => create ui 가능

select와 option은 기능적으로,
div와 ul은 visual적으로 기능해야 한다.

## communication

```tsx
<Dropdown label="" options={} onChange={} value={} />
```

- Dropdown은 value를 display해야 한다.
- select에서 선택을 하면 onChange 호출 되어야 한다.
