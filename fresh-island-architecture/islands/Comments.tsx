import { useSignal, type Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  name: string;
  text: string;
  like: number
  index: number;

}

export default function Counter(props: CounterProps) {
  const like = useSignal(props.like)

  return (
      <div style="padding: 16px; margin: 24px 0; border-radius: 15px; background-color: #d3dded; box-shadow: -1px 0px 23px 0px rgba(0,0,0,0.62); -webkit-box-shadow: -1px 0px 23px 0px rgba(0,0,0,0.62); -moz-box-shadow: -1px 0px 23px 0px rgba(0,0,0,0.62);">
        <h1>name: {props.name}</h1>
        <p>comment: {props.text}</p>
        <p>like: {like}</p>

        <Button onClick={() => like.value++}>I like it</Button>
      </div>
  );
}
