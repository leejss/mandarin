# Radio Button

## usecases

```ts
<RadioButton />
<RadioButton label="" name="" value="" />
<RadioButton label="" name="" value="" checked />
<RadioButton label="" name="" value="" onChange={} />
// or?
// 밑으로 사용해보자
<RadioButton option={} checked={} />


const[value, setValue ] = useState("apple")

<div>
  <RadioButton onClick={} value= />
  <button>Change value</button>
</div>
```

value를 부여하고 onClick를 통해서 값을 가져올 수 있다.

## 일지

RadioButton에 value를 주입. 그리고 그 value를 변화시킬 수 있는 onClick handler를 같이 주입.

상위 컴포넌트와 통신할 수 있는 수단.

라디오 버튼의 역할?

select one thing among multiple choices

How to get a value from RadioButton??

e.target.value를 통해서 값을 가져올 수 있다.
라디오 버튼에 onClick 핸들러를 부여하면 한가지 값을 가져올 수있다.

handleClick(
onClick()
)

라디오 버튼의 checked는 뭐야??

radio타입의 인풋은 checked로 표현된다.
checked의 value를 가져온다.

```ts
// selected, unselected
const [options, setOptions] = React.useState([])
const [ selected, setSelected ] = React.useState("")

<div>

{options.map((option, index) => {
  return <RadioButton key={index} value={option} checked={option === selected} onChange={(changeEvnet) => {setSelected(changeEvent.target.value)}} />

})}

<div>
```

이게 체크인지 아닌지는 밖에서 판단.

라벨과 인풋을 분리하는 작업.

그러면 일단 id를 부여해야 한다.
label의 htmlfor

id를 외부에서 부여해줄 필요가 없이 안에서 상태로 부여

각각의 input을 form으로 감싸야 하는가?

라디오 버튼의 마크업 모습은? form이 들어갈 자리는?=> Grouping
일단 input을 밖으로 빼는 작업을 해보자

```ts
<div>버튼</div>
<label>라벨</label>
```
