# RadioButtonGroup

## usecases

```ts
const [ value, setValue ] = React.useState("one")
<RadioButtonGroup
  name=""
  options={['one', 'two']} // 여기에 옵션이 주어지고
  value={value}
  onChange={event => setValue(event.target.value)}
/>
```

onChange를 통해서 값을 하나 가져온다.

콜렉션에서 값 하나를 가져와야 한다.

버튼 그룹에서 셋팅한 값이 전달되어야 한다.

버튼 그룹에서 어떤 버튼을 선택했을 때,
change event => onChange handler 호출 => value를 셋팅

버튼 그룹에 전달하는 value
